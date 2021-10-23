const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Job blueprint
const jobSchema = new Schema({
    position: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    estimatedSalary: {
        type: Number,
        required: true
    },
    postUrl: {
        type: String,
        required: true
    },
    applied: {
        type: Boolean,
        required: true
    },
    type: {
        type: String,
        enum: ['remote', 'in-office', 'hybrid'],
        required: true
    }
})

// exporting the name and model above

module.exports = mongoose.model('Job', jobSchema, 'Job')