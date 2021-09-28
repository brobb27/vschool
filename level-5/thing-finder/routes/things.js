// import packages
const express = require('express')
const things = express.Router()

// fake data
const inventory = [
    { name: "banana", type: "food", price: 200,},
    { name: "pants", type: "clothing", price: 2500,},
    { name: "basket ball", type: "toy", price: 1000,},
    { name: "rockem sockem robots", type: "toy", price: 1500,},
    { name: "shirt", type: "clothing", price: 800,},
    { name: "soup", type: "food", price: 300,},
    { name: "flour", type: "food", price: 100,}
]

// get by type
things.get('/:type', (req, res) => {
    const type = req.params.type
    const filteredThings = inventory.filter(item => item.type === type)
    res.send(filteredThings)
})

// get by price
things.get('/search/price', (req, res) => {
    const max = typeof req.query.max !== 'undefined' ? req.query.max : 1000000
    const min = typeof req.query.min !== 'undefined' ? req.query.min : 0
    const filteredThings = inventory.filter(item => item.price <= max && item.price >= min)
    res.send(filteredThings)
})


module.exports = things