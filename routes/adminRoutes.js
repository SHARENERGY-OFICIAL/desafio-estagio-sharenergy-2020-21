const express = require('express');
const router = express.Router();
const {validateUser} = require('../util/validator');
const adminController = require('./../controllers/adminController');


router.get('/', adminController.showHomePage);
router.get('/users', adminController.showUsers);
router.get('/edit-user/:id', adminController.getEditUser);
router.post('/edit-user', validateUser, adminController.postEditUser);
router.post('/delete-user', adminController.deleteUser);
router.get('/new-user', adminController.getNewUser);
router.post('/new-user', validateUser, adminController.postNewUser);
router.get('/user/:id', adminController.getUserDetails);


module.exports = router;