const mongoose = require("mongoose");
const validator = require("validator");
const crypto = require('crypto');
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "User must have a name"],
  },
  email: {
    type: String,
    required: [true, "User must have an email address"],
  },
  password: {
    type: String,
    required: [true, "User must have a password"],
    minlength: 5,
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, "Please confirm your passowrd"],
    validate: {
      validator: function (element) {
        return element === this.password;
      },
    },
  },
  role: {
    type: String,
    enum: {
      values: ["care-giver", "care-receiver", "admin"],
    },
  },
  region: {
    type: String,
    enum: {
      values: ["uk", "netherlands", "germany"],
    },
  },
  dateJoinedICare: {
    type: Date,
    default: Date.now(),
  },
  passwordResetToken: String,
  passwordResetExpires: Date
});

userSchema.methods.comparePasswords = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

userSchema.methods.createPasswordResetToken = function() {
  const resetToken = crypto.randomBytes(32).toString('hex');
  this.passwordResetToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');

  console.log(`Reset token is ${resetToken}`);
  console.log(`Encrypted reset token is ${this.passwordResetToken}`);
  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

  return resetToken;
};


const User = mongoose.model("User", userSchema);

module.exports = User;
