const express = require("express");

const availableCareGiversController = require("./../controllers/availableCareGiversController");

const router = express.Router();

router
  .route("/")
  .get(availableCareGiversController.getAllAvailableCareGivers)
  .post(availableCareGiversController.addAvailableCareGiver);

router
  .route("/:id")
  .get(availableCareGiversController.getAvailableCareGiverById)
  .patch(availableCareGiversController.updateAvailableCareGiver)
  .delete(availableCareGiversController.deleteAvailableCareGiver);
module.exports = router;
