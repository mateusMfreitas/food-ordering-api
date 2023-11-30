const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.getUsers);
router.get('/getUsers', userController.getUsers);
router.get('/getUser/:id', userController.getUser);
router.post('/createUser', userController.createUser);

module.exports = router;
