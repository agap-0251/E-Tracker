require('dotenv').config()
const express = require('express')
const expenseRoutes = require('./routes/expenseRoutes')
const userRoutes = require('./routes/userRoutes')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()



const port = process.env.PORT || 3500

app.use(express.json())
app.use(express.urlencoded({extended : true}))

//middleware
app.use(cors())
app.use((req,res,next) => {
    console.log(req.method,req.path)
    next()
})

// db connection and routes
app.get('/',(req,res) => {
    res.status(200).json({msg : "welcome to e tracker"})
})

app.use('/api/expenses',expenseRoutes)
app.use('/api/user',userRoutes)

mongoose.connect(process.env.MONGO_URI)
    .then (() => {
        app.listen(port,() => {
            console.log(`Connected to db and Server started on port ${process.env.PORT || 3500}`)
        })
    })
    .catch (err => {
        console.log(err)
    })



