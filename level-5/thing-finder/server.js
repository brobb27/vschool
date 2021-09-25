// import express
const express = require('express')
const app = express()

// middleware
app.use(express.json())

// routes
app.use('/things', require('./routes/things'))

// server listening
app.listen(7000, () => {
    console.log('The server is up and running on port 7000')
})