const express = require('express')
const router = express.Router()
const requireAuth = require('../middleware/requireAuth')
const {getAllExpenses,getSingleExpense,getWeelyExpenses,createExpense,deleteExpense,updateExpense} = require('../controllers/expenseController')

router.use(requireAuth)

//get all expenses
router.get('/',getAllExpenses)

//get Weekly routes
router.get('/weekly',getWeelyExpenses)

//get single expense
router.get('/:id',getSingleExpense)

//post single expense
router.post('/',createExpense)

//delete expense
router.delete('/:id',deleteExpense)

//update expense
router.patch('/:id',updateExpense)

module.exports = router
