const mongoose = require("mongoose");
const validator = require("validator");

const availableCareGiversSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "A name must be present"],
  },
  email: {
    type: String,
    validate: [validator.isEmail, "invalid email"],
  },
  activeSince: {
    type: Date,
    default: Date.now(),
  },
  role: {
    type: String,
    enum: {
      values: ["care-giver"],
    },
    default: "care-giver",
  },
  dateAvailable: {
    type: Date,
    default: Date.now()
  },
  yearsOfExperience: {
    type: Number,
  },
  region: {
    type: String,
    enum: {
      values: ["uk", "netherlands", "germany"],
    },
  },
});

const AvailableCareGivers = mongoose.model(
  "AvailableCareGivers",
  availableCareGiversSchema
);

module.exports = AvailableCareGivers;
