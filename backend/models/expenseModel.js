const mongoose = require('mongoose')

const Schema = mongoose.Schema

const expenseSchema = new Schema({
    amount : {
        type : Number,
        required : true
    },
    title : {
        type : String,
        required : true
    },
    category : {
        type : String,
        required : true
    },
    payDate : {
        type : Date,
        default : Date.now(),
    },
    isIncome : {
        type : Boolean,
        required : true
    },
    user_id : {
        type : String,
        required : true
    }
},{timestamps : true})

module.exports = mongoose.model('expenseSchema',expenseSchema)