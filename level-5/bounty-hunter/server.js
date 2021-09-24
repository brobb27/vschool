// import express
const express = require('express')
const app = express()


app.get('/homie', (req, res) => {
    res.send({name: 'joe', age: 27})
})


app.listen(7000, () => {
    console.log('Server is up and running on port 7000')
})