// import express
const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')

// port
const PORT = process.env.PORT || 7000

// Middleware
app.use(express.json()) // looks for a request body
app.use(morgan('dev')) // logs requests to the console

// Connect to DB  I am not sure if these are relevant anymore.
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/job-tracker-db',
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
},
() => console.log('Connected to the Job Tracker DB')
)

// allows requests from localhost 3000 (client)
app.use(cors({
    origin: 'http://localhost:3000',
    origin: 'http://localhost:7000'
}))

// Routes
app.use('/jobs', require('./routes/jobRouter'))

// Error handler -- include a global error handler in all projects
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

// Pulling client build into express.js
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
}

// Server listening
app.listen(PORT, () => {
    console.log('Server is up and running on port 7000')
})