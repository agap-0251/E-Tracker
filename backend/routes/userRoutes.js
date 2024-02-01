const express = require('express')
const router = express.Router()
const {loginUser,signupUser,setImage} = require('../controllers/userController')

//set user Image
router.post('/image',setImage)

//login user
router.post('/login',loginUser)

//signup user
router.post('/signup',signupUser)

module.exports = router