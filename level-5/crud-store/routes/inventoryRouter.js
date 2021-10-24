const express = require('express')
const inventoryRouter = express.Router()
const Inventory = require('../models/inventoryModule')

// Routes

// Get request
inventoryRouter.get('/', (req, res, next) => {
    Inventory.find((err, inventory) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(inventory)
    })
})

// Get one request
inventoryRouter.get('/:productId', (req, res, next) => {
    Inventory.findOne({_id: req.params.productId}, (err, product) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(product)
    })
})

// Post request
inventoryRouter.post('/', (req, res, next) => {
    const newProduct = new Inventory(req.body)
    newProduct.save((err, savedProd) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedProd)
    })
})

// Put request
inventoryRouter.put('/:productId', (req, res, next) => {
    Inventory.findOneAndUpdate(
        {_id: req.params.productId}, // finds product in db
        req.body, // info to update
        {new: true}, // sends back the updated version instead of outdated
        (err, updatedProduct) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedProduct)
        }
    )
})

// Delete request
inventoryRouter.delete('/:productId', (req, res, next) => {
    Inventory.findOneAndDelete(
        {_id: req.params.productId},
        (err, deletedJob) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`You have successfully deleted ${deletedJob.productName} from the database.`)
        }
    )
})


module.exports = inventoryRouter