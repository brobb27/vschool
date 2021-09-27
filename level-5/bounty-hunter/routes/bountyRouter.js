// required packages
const express = require('express')
const bountyRouter = express.Router()
const { v4: uuid } = require('uuid')

// Fake Data
let bountyList = [
    {firstName: 'Luke', lastName: 'Skywalker', isAlive: true, bounty: '$90000', type: 'jedi', _id: uuid()},
    {firstName: 'General', lastName: 'Juan', isAlive: true, bounty: '$40000', type: 'sith', _id: uuid()},
    {firstName: 'Hoe', lastName: 'Bee-one', isAlive: true, bounty: '$70000', type: 'jedi', _id: uuid()},
    {firstName: 'Darth', lastName: 'Vmaker', isAlive: true, bounty: '$80000', type: 'sith', _id: uuid()},
    {firstName: 'Jabba', lastName: 'TheJedi', isAlive: true, bounty: '$10000', type: 'jedi', _id: uuid()}
]

// Routes
// get all
bountyRouter.get('/', (req, res) => {
    res.send(bountyList)
})

// get one
bountyRouter.get('/:boutnyId', (req, res) => {
    const bountyId = req.params.boutnyId
    const foundBounty = bountyList.find(person => person._id === bountyId)
    res.send(foundBounty)
})

// get by type
bountyRouter.get('/search/side', (req, res) => {
    const side = req.query.side
    const filteredBounty = bountyList.filter(person => person.type === side)
    res.send(filteredBounty)
})

// post
bountyRouter.post('/', (req, res) => {
    const newBounty = req.body
    newBounty._id = uuid()
    bountyList.push(newBounty)
    res.send(`You have successfully added ${newBounty.firstName} ${newBounty.lastName} to the Bounty List`)
})

// put
bountyRouter.put('/:bountyId', (req, res) => {
    const bountyId = req.params.bountyId
    const itemEditing = bountyList.findIndex(person => person._id === bountyId)
    const updatedPerson = Object.assign(bountyList[itemEditing], req.body)
    res.send(updatedPerson)

})

// delete
bountyRouter.delete('/:bountyId', (req, res) => {
    const bountyId = req.params.bountyId
    const filteredBounty = bountyList.filter(person => person._id !== bountyId)
    // Use state would probably be safer, but this isn't react?
    bountyList = filteredBounty
    res.send(`You have successfully taken the bounty off their head!`)
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

module.exports = bountyRouter