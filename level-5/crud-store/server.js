// import express
const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')

// Middleware
app.use(express.json()) // looks for request body from user
app.use(morgan('dev')) // logs any requests to the console

// Connect to mongoDB
mongoose.connect('mongodb://localhost:27017/crud-store-db',
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
},
() => console.log('Connected to the crud store DB')
)

// Routes for requests
app.use('/inventory', require('./routes/inventoryRouter'))

// Error handler
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

// Server listening
app.listen(7000, () => {
    console.log('The serving is running on port 7000')
})