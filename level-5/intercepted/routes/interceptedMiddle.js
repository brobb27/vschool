// import express
const express = require('express')
const intercepted = express.Router()

intercepted.use('/', (req, res, next) => {
    console.log('THE MIDDLEWARE WAS EXECUTED')
    req.body = {
        isThicc: true
    }
    next()
})


module.exports = intercepted