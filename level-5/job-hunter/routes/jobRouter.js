// required packages
const express = require('express')
const jobsRouter = express.Router()
const Job = require('../models/jobModel.js')

let jobList = []


// Routes

// Get all
jobsRouter.get('/', (req, res, next) => {
    Job.find((err, jobs) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(jobs)
    })
})

// Get one
jobsRouter.get('/:jobId', (req, res, next) => {
    Job.findOne({_id: req.params.jobId}, (err, foundJob) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(foundJob)
    })
})

// I can now make a filter on the front end where you can filter by work location
// Get by type
jobsRouter.get('/search/type', (req, res, next) => {
    Job.find({type: req.query.type}, (err, jobs) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(jobs)
    })
})

// post
jobsRouter.post('/', (req, res, next) => {
    const newJob = new Job(req.body)
    newJob.save((err, savedJob) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        res.set('Access-Control-Allow-Origin', '*')
        return res.status(201).send(savedJob)
    })
})

// put
jobsRouter.put('/:jobId', (req, res, next) => {
    Job.findOneAndUpdate(
        {_id: req.params.jobId}, // finds the job
        req.body, // update the object with this data
        {new: true}, // sends back the updated version
        (err, updatedJob) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedJob)
        }
    )
})

// delete
jobsRouter.delete('/:jobId', (req, res, next) => {
    Job.findOneAndDelete({_id: req.params.jobId}, (err, deletedJob) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted ${deletedJob.position} at ${deletedJob.company} from the database.`)
    })
})

// OR

// bountyRouter.route('/')
//     .get((req, res) => {
//         res.send(bountyList)
//     })
//     .post((req, res) => {
//         const newBounty = req.body
//         newBounty._id = uuid()
//         bountyList.push(newBounty)
//         res.send(`You have successfully added ${newBounty.firstName} ${newBounty.lastName} to the Bounty List`)
//     })

module.exports = jobsRouter