require('dotenv').config()
const express = require('express')
const expenseRoutes = require('./routes/expenseRoutes')
const userRoutes = require('./routes/userRoutes')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

const port = process.env.PORT || 3500

app.use(express.json({limit : '10mb'}))
app.use(express.urlencoded({extended : true,limit : '10mb'}))

//middleware
app.use(cors({
    origin : ['https://e-tracker-frontend.vercel.app',
              'https://e-tracker-frontend-git-main-agap-0251.vercel.app',
              'https://e-tracker-frontend-2u1v7qzhm-agap-0251.vercel.app',
              'http://localhost:5173']
}))
/*app.use((req,res,next) => {
    console.log(req.method,req.path)
    next()
})*/



// db connection and routes
app.get('/',(req,res) => {
    res.status(200).json({msg : "welcome to e tracker"})
})

app.use('/api/user',userRoutes)
app.use('/api/expenses',expenseRoutes)

mongoose.connect(process.env.MONGO_URI,{
    dbName : 'test'
})
    .then (() => {
        app.listen(port,() => {
            console.log(`Connected to db and Server started on port ${process.env.PORT || 3500}`)
        })
    })
    .catch (err => {
        console.log(err)
    })



