// importing express
const express = require('express')
const server = express()

// middleware
server.use(express.json())

// object to be sent
let fakeData = {
    name: 'Joe Schmo',
    age: 40,
    height: '6 foot'
}

// middleware
server.use('/', require('./routes/interceptedMiddle'))

// get request
server.get('/', (req, res) => {
    res.send({...fakeData, ...req.body})
})

// server running
server.listen(7000, () => {
    console.log('Server is up and running on port 7000')
})



