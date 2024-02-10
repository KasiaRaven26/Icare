const mongoose = require("mongoose");
const validator = require('validator');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'User must have a name']
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  role: {
    type: String,
    enum: {
        values: ["care-giver", "care-receiver"]
    }
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
  
});

const User = mongoose.model("User", userSchema);

module.exports = User;
