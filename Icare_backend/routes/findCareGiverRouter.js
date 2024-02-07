const express = require('express')
const findCareGiverController = require('./../controllers/findCareGiversController');
const router = express.Router();

router.param('id', findCareGiverController.checkId)

router.route('/').get(findCareGiverController.getAllCareGivers).post(findCareGiverController.addCaregiver);
router.route('/:id').patch(findCareGiverController.updateCareGiver);
module.exports = router;