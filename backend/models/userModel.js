const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

const userSchema = new Schema({
    email : {
        type : String,
        required : true,
        unique : true
    },
    uname: {
        type : String,
        required : true,
    },
    password : {
        type : String,
        required : true
    }
},{timestamps : true})

// signup statics function

userSchema.statics.signup = async function(email,uname,password) {
    if(!email || !password || !uname) {
        throw Error("All fields must be filled")
    }

    if(!validator.isEmail(email)) {
        throw Error("Not a valid email")
    }

    if(!validator.isStrongPassword(password)) {
        throw Error("Password is not strong enough")
    }
    const exists = await this.findOne({email})
    if(exists) {
        throw Error('Email is already in use')
    }
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password,salt)
    const user = await this.create({email,uname,password : hash})

    return user
}

// login statics function

userSchema.statics.login = async function(email,password) {
    if(!email || !password) {
        throw Error("All fields must be filled")
    }

    const user = await this.findOne({email})
    if(!user) {
        throw Error('Invalid Email')
    }
    const match = await bcrypt.compare(password,user.password)
    if(!match) {
        throw Error('Invalid passwordd')
    }

    return user
}

module.exports = mongoose.model('usersSchema',userSchema)