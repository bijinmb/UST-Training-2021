const express = require('express')
const router = express.Router()

const authController = require('../controllers/authcontroller')

//router.post('/register',authController.register); - if below didn't work, use this line of code instead.
router.post('/register',authController.register.bind(authController.register))
router.post('/login',authController.login.bind(authController.login))
//router.post('/login',authController.login)
module.exports = router
