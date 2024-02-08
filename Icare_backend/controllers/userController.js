const fs = require("fs");
const User = require("./../models/userModel");

// const users = JSON.parse(fs.readFileSync(`${__dirname}/../data/users.json`));

// exports.checkId = (req, res, next, val) => {
//   console.log(`id is ${val}`);
//   if (req.params.id * 1 > users.length) {
//     return res.status(404).json({
//       status: "fail",
//       message: "Invalid Id",
//     });
//   }
//   next();
// };

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
    
    // console.log(res.data)
    // const queryObj = { ...req.query };
    // const queryString = JSON.stringify(queryObj);

    // let query = User.find(JSON.parse(queryString));
    const query = User.find();
    // console.log(query)
    // console.log(query)
    const usersAll = await query;
    // console.log(usersAll)

    res.status(200).json({
      status: "success",
      results: usersAll.length,
      data: {
        usersAll,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getUser = async (req, res) => {
  // console.log(req.id);
  
  try {
    const user = await User.findById(req.params.id)
    // const id = req.params.id * 1;
    // const user = users.find((el) => el._id === id);
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

exports.createUser = async (req, res) => {
  // console.log(req.body);/

  // const newId = tours[tours.length - 1].id + 1;
  // const newTour = Object.assign({ id: newId }, req.body);
  // tours.push(newTour);

  // fs.writeFile(
  //   `${__dirname}/dev-data/data/tours-simple.json`,
  //   JSON.stringify(tours),
  //   (err) => {
  //     res.status(201).json({
  //       status: 'success',
  //       data: {
  //         tour: newTour,
  //       },
  //     });
  //   }
  // );

  try {
    const newUser = await User.create(req.body);
    console.log(req.body)

    res.status(201).json({
      status: 'success',
      data: {
        user: newUser,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
