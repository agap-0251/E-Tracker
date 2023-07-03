const express = require('express')
const router = express.Router()
const {loginUser,signupUser,setImage} = require('../controllers/userController')

//login user
router.post('/login',loginUser)

//signup user
router.post('/signup',signupUser)

//set user Image
router.post('/image',setImage)

module.exports = router