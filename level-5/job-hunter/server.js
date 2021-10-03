// import express
const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')

// Middleware
app.use(express.json()) // looks for a request body
app.use(morgan('dev')) // logs requests to the console

// THIS IS SUPER HELPFUL
app.use(cors({
    origin: 'http://localhost:3000'
})) // allows requests from localhost 3000 (client)

// Routes
app.use('/jobs', require('./routes/jobRouter'))

// Server listening
app.listen(7000, () => {
    console.log('Server is up and running on port 7000')
})