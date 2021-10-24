const mongoose = require('mongoose')
const Schema = mongoose.Schema

const inventorySchema = new Schema({
    productName: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    inStock: {
        type: Boolean,
        required: true
    }
})

// exporting name and the model attached to it
module.exports = mongoose.model('Inventory', inventorySchema)