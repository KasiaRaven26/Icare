const express = require("express");
const authController = require("./../controllers/authController");

const availableCareGiversController = require("./../controllers/availableCareGiversController");

const router = express.Router();

router
  .route("/")
  .get(
    authController.protect,
    availableCareGiversController.getAllAvailableCareGivers
  )
  .post(availableCareGiversController.addAvailableCareGiver);

router
  .route("/:id")
  .get(availableCareGiversController.getAvailableCareGiverById)
  .patch(availableCareGiversController.updateAvailableCareGiver)
  // .delete(availableCareGiversController.deleteAvailableCareGiver).restrictTo('admin', 'lead-guide');
module.exports = router;
