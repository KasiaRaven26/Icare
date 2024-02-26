const express = require('express')
const userController = require('./../controllers/userController');

const router = express.Router();

router.param('id', userController.checkId);

router.route('/').get(userController.getAllUsers);
router.route('/:id').get(userController.getUser);

module.exports = router;