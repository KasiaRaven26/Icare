const fs = require("fs");
const User = require("./../models/userModel");

const users = JSON.parse(fs.readFileSync(`${__dirname}/../data/users.json`));

exports.checkId = (req, res, next, val) => {
  console.log(`id is ${val}`);
  if (req.params.id * 1 > users.length) {
    return res.status(404).json({
      status: "fail",
      message: "Invalid Id",
    });
  }
  next();
};

// exports.getAllUsers = (req, res) => {
//     res.status(200).json({
//         status: 'success',
//         results: users.length,
//         data: {
//             users: users
//         }
//     })
// }

exports.getAllUsers = async (req, res) => {
  try {
    const queryObj = { ...req.query };
    const queryString = JSON.stringify(queryObj);

    let query = User.find(JSON.parse(queryString));
    const users = await query;

    res.status(200).json({
      status: "success",
      results: users.length,
      data: {
        users,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getUser = (req, res) => {
  console.log(req.id);
  try {
    const id = req.params.id * 1;
    const user = users.find((el) => el._id === id);
    res.status(200).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
