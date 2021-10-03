// required packages
const express = require('express')
const jobsRouter = express.Router()
const { v4: uuid } = require('uuid')

// Fake Data
let jobList = [
    {position: 'Front End Developer', company: 'Weave', estimatedSalary: '$90000', postUrl: 'https://www.linkedin.com/jobs/view/2732496188/?refId=4837f2cf-4f17-48ad-a51a-43b98f1e2366', applied: false, type: 'remote', _id: uuid()},
    {position: 'Developer I', company: 'Xactware', estimatedSalary: '$65000', postUrl: 'https://www.linkedin.com/jobs/view/2732496188/?refId=4837f2cf-4f17-48ad-a51a-43b98f1e2366', applied: false, type: 'in-office', _id: uuid()},
    {position: 'Front End Engineer', company: 'Adobe', estimatedSalary: '$70000', postUrl: 'https://www.linkedin.com/jobs/view/2732496188/?refId=4837f2cf-4f17-48ad-a51a-43b98f1e2366', applied: false, type: 'hybrid', _id: uuid()},
    {position: 'Front End Software Engineer', company: 'VMware', estimatedSalary: '$75000', postUrl: 'https://www.linkedin.com/jobs/view/2732496188/?refId=4837f2cf-4f17-48ad-a51a-43b98f1e2366', applied: false, type: 'remote', _id: uuid()},
    {position: 'Software Engineer', company: 'Numetric', estimatedSalary: '$67000', postUrl: 'https://www.linkedin.com/jobs/view/2732496188/?refId=4837f2cf-4f17-48ad-a51a-43b98f1e2366', applied: false, type: 'in-office', _id: uuid()}
]

// Routes
// get all
jobsRouter.get('/', (req, res) => {
    res.send(jobList)
})

// get one
jobsRouter.get('/:jobId', (req, res) => {
    const jobId = req.params.jobId
    const foundJob = jobList.find(job => job._id === jobId)
    res.send(foundJob)
})

// get by type
jobsRouter.get('/search/side', (req, res) => {
    const side = req.query.side
    const filteredJob = jobList.filter(job => job.type === side)
    res.send(filteredJob)
})

// post
jobsRouter.post('/', (req, res) => {
    const newJob = req.body
    newJob._id = uuid()
    jobList.push(newJob)
    res.set('Access-Control-Allow-Origin', '*')
    res.send(newJob)
})

// put
jobsRouter.put('/:jobId', (req, res) => {
    const jobId = req.params.jobId
    const itemEditing = jobList.findIndex(job => job._id === jobId)
    const updatedJob = Object.assign(jobList[itemEditing], req.body)
    res.send(updatedJob)
})

// delete
jobsRouter.delete('/:jobId', (req, res) => {
    const jobId = req.params.jobId
    const filteredJob = jobList.filter(job => job._id !== jobId)
    // Use state would probably be safer, but this isn't react?
    jobList = filteredJob
    res.send(`You have successfully removed this job from your tracker!`)
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