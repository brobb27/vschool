// import express
const express = require('express')
const app = express()

// Middleware
app.use(express.json()) // looks for a request body

// Routes
app.use('/bounties', require('./routes/bountyRouter'))

// Server listening
app.listen(7000, () => {
    console.log('Server is up and running on port 7000')
})