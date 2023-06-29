const express = require('express')
const router = express.Router()
const requireAuth = require('../middleware/requireAuth')
const {getAllExpenses,getSingleExpense,getWeelyExpenses,createExpense,deleteExpense,updateExpense} = require('../controllers/expenseController')

router.use(requireAuth)

//get all todos
router.get('/',getAllExpenses)

//get Weekly routes
router.get('/weekly',getWeelyExpenses)

//get single todo
router.get('/:id',getSingleExpense)


//post single todo
router.post('/',createExpense)

//delete todo
router.delete('/:id',deleteExpense)

//update todo
router.patch('/:id',updateExpense)

module.exports = router