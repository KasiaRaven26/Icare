const catchAsync = require("./../utils/catchAsync");
const jwt = require("jsonwebtoken");
const crypto = require('crypto');
const User = require("./../models/userModel");
const AppError = require("./../utils/appError");
const { promisify } = require("util");
const sendEmail = require("./../utils/email");

const signToken = (id) => {
  return jwt.sign({ id: id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

exports.signup = catchAsync(async (req, res, next) => {
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
    // passwordChangedAt: req.body.passwordChangedAt,
    role: req.body.role,
  });
  console.log(newUser);

  const token = signToken(newUser._id);
  // console.log(token);

  res.status(201).json({
    status: "success",
    token,
    data: {
      user: newUser,
    },
  });
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(
      new AppError(" Please provide a valid email and/or password", 400)
    );
  }

  const user = await User.findOne({ email: email }).select("+password");
  console.log(user);
  if (!user || (await user.comparePasswords(password, user.password))) {
    return next(new AppError("Incorrect email or password", 401));
  }

  const token = signToken(user._id);
  res.status(200).json({
    status: "success",
    token,
  });
});

exports.protect = catchAsync(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return next(new AppError("You are not logged in", 401));
  }

  const decodedJwtToken = await promisify(jwt.verify)(
    token,
    process.env.JWT_SECRET
  );
  console.log(decodedJwtToken);
  const currentUser = await User.findById(decodedJwtToken.id);

  if (!currentUser) {
    return next(new AppError("The user of this token no longer exists", 401));
  }

  // if (currentUser.changedPasswordAfter(decodedJwtToken.iat)) {
  //   return next(
  //     new AppError(
  //       "User has recently changed the password - please login again",
  //       401
  //     )
  //   );
  // }

  req.user = currentUser;
  next();
});

exports.forgotPassword = catchAsync(async (req, res, next) => {
  // 1) get User based on Posted email

  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return next(new AppError("User does not exist", 404));
  }
  // 2) Generate random token
  const resetToken = user.createPasswordResetToken();
  await user.save({ validateBeforeSave: false });

  // 3) Send token in an email.
  const resetURL = `${req.protocol}://${req.get(
    "host"
  )}/api/v1/users/resetPassword/${resetToken}`;

  console.log(resetURL);
  const message = `Forgot your password? Submit a patch request with your new password and passwordConfirm to ${resetURL}.\nIf you didn't forget your password, please ignore this email`;

  try {
    await sendEmail({
      email: user.email,
      subject: "Your password reset token (valid for 10 minutes)",
      message: message,
    });

    res.status(200).json({
      status: "success",
      message: "Token sent to email!",
    });
  } catch (error) {
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;

    await user.save({ validateBeforeSave: false });

    return next(
      new AppError("There was an error sending the email. Try again later", 500)
    );
  }
});


exports.resetPassword = catchAsync(async (req, res, next) => {
  /// 1 Get user based on token
  const hashedToken = crypto
    .createHash('sha256')
    .update(req.params.token)
    .digest('hex');

  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() }
  });

  /// 2 If token has not expired and there is no user, set the password

  if (!user) {
    return next(
      new AppError('No user - token isd invalid or has expired', 400)
    );
  }

  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;

  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;

  await user.save();

  /// 3 Updated changedPasswordAt property for the user
  /// 4 Log the user in, send JWT

  const token = signToken(user._id);
  res.status(200).json({
    status: 'success',
    token
  });
});