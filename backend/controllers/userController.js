const { default: mongoose } = require('mongoose')
const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
    return jwt.sign({_id},process.env.SECRET,{expiresIn : '3d'})
}

// all expenses

const loginUser = async (req,res) => {
    const {email,password} = req.body
    console.log(email,password)
    
    try {

        const user = await User.login(email,password)
        const token = createToken(user._id)
        const uname = user.uname
        res.status(200).json({email,uname,token})

    } catch(err) {
        res.status(400).json({error : err.message})
    }
}

const signupUser = async (req,res) => {
    const {email,uname,password} = req.body
    // console.log(email,uname,password)
    
    try {

        const user = await User.signup(email,uname,password)
        const token = createToken(user._id)
        res.status(200).json({email,uname,token})

    } catch(err) {
        res.status(400).json({error : err.message})
    }


}

module.exports = {
    loginUser,signupUser
}
