const express = require('express')
const router = express.Router()
const {loginUser,signupUser} = require('../controllers/userController')

//get all todos
router.post('/login',loginUser)

//get single todo
router.post('/signup',signupUser)

module.exports = router