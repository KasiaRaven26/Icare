const AvailableCareGivers = require("./../models/availableCareGivers");
const APIFeatures = require("./../utils/apiFeatures");

exports.getAllAvailableCareGivers = async (req, res) => {
  try {
    console.log(req.query.fields);
    const features = new APIFeatures(
      AvailableCareGivers.find(),
      req.query
    ).limitFields();

    // const tours = await features.query;

    const AllAvailableCareGivers = await features.query;

    res.status(200).json({
      status: "success",
      results: AllAvailableCareGivers.length,
      data: {
        AllAvailableCareGivers,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getAvailableCareGiverById = async (req, res) => {
  try {
    const availableCareGiver = await AvailableCareGivers.findById(
      req.params.id
    );

    res.status(200).json({
      status: "success",
      data: {
        availableCareGiver,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.addAvailableCareGiver = async (req, res) => {
  try {
    const newAvailableCareGiver = await AvailableCareGivers.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        newAvailableCareGiver,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.updateAvailableCareGiver = async (req, res) => {
  try {
    const availableCareGiver = await AvailableCareGivers.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(200).json({
      status: "success",
      data: { availableCareGiver },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.deleteAvailableCareGiver = async (req, res) => {
  try {
    await AvailableCareGivers.findByIdAndDelete(req.params.id);

    res.status(200).json({
      status: "success",
      message: "Deleted",
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
