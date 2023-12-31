const { default: mongoose } = require('mongoose')
const Expense = require('../models/expenseModel')

// all expenses

const getAllExpenses = async (req,res) => {
    const user_id = req.user._id
    const expense = await Expense.find({user_id}).sort({createdAt : -1})
    if(!expense) {
        return res.status(200).json({msg : "No expenses"})
    }
    res.status(200).json(expense)
}

const getSingleExpense = async (req,res) => {

    if(mongoose.isValidObjectId(req.params.id)) {
        const expense = await Expense.findOne({_id : req.params.id})
        if(!expense) {
            return res.status(400).json({error : "No such expense exists"})
        }
        return res.status(200).json(expense)
    }
    res.status(401).json({error : "Not a valid id"})

}

const getWeelyExpenses = async (req,res) => {
    const u_id = req.user._id
    const expense = (await Expense.find({user_id : u_id}).sort({createdAt : -1}))
    const date = new Date()
    date.setDate(date.getDate()-1)
    let data = [];
    for(let i = 1; i <= 6; i++) {
        let currentRec =  expense.filter(rec => rec.payDate.toLocaleDateString() === date.toLocaleDateString())
                                  .map(trans => {
                                    return {amount : trans.amount,isIncome : trans.isIncome}
                                  })

        let Expense,Income;
        Expense = currentRec.filter(trans => !trans?.isIncome)
                                 .map(rec => Number(rec?.amount))
                                 ?.reduce((acc,val) => acc+val,0)

        Income = currentRec.filter(trans => trans?.isIncome)
                                 .map(rec => Number(rec?.amount))
                                 ?.reduce((acc,val) => acc+val,0)
        data.push({name : date.toLocaleDateString(),Expense,Income})
        date.setDate(date.getDate()-1)
    }
    // console.log(data)
    if(!expense) {
        return res.status(200).json({msg : "No expenses"})
    }
    res.status(200).json(data)
}

const createExpense = async (req,res) => {
    const {title,amount,category,isIncome,payDate} = req.body
    const user_id = req.user._id
    if(!title || !amount || !category) {
        return res.status(400).json({error : "All fields must be filled"})
    }

    try {
        const expense = await Expense.create({title,amount,category,isIncome,payDate,user_id})
        res.status(200).json(expense)
    } catch(error) {
        res.status(400).json(error)
    } 
}

const deleteExpense = async (req,res) => {
    if(mongoose.isValidObjectId(req.params.id)) {
        const expense = await Expense.deleteOne({_id : req.params.id})
        if(!expense) {
            return res.status(400).json({error : "No such expense exists"})
        }
        return res.status(200).json(expense)
    }
    res.status(401).json({error : "Not a valid id"})
}

const updateExpense = async (req,res) => { 

    if(mongoose.isValidObjectId(req.params.id)) {
        const expense = await Expense.findByIdAndUpdate({_id : req.params.id},{...req.body})
        if(!expense) {
            return res.status(404).json({error : "No such expense exists"})
        }
        return res.status(200).json(expense)
    }
    res.status(401).json({error : "Not a valid id"})
}

module.exports = {
    getAllExpenses,getSingleExpense,createExpense,deleteExpense,updateExpense,getWeelyExpenses
}
