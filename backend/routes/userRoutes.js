const express = require('express')
const router = express.Router()
const {loginUser,signupUser,setImage} = require('../controllers/userController')

//get all todos
router.post('/login',loginUser)

//get single todo
router.post('/signup',signupUser)

//set user Image
router.post('/image',setImage)

module.exports = router