const express = require('express');
const router = express.Router();

const { body } = require("express-validator");
const { route } = require('../app');
const userController = require('../controllers/user.controller');




router.post('/register', [
    body('phone').trim().notEmpty().withMessage('Phone is required'),
    body('college').trim().notEmpty().withMessage('College is required'),
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({ min: 3 }).withMessage('First name must be at least 3 characters long'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')

],
 userController.registerUser
)

module.exports = router;