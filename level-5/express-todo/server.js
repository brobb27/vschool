// import packages
const express = require('express')
const app = express()
const { v4: uuid } = require('uuid')

// middleware
app.use(express.json())

// fake data
const todos = [
    {
        name: "Store",
        description: "Buy Groceries",
        imageUrl: "http://www.myimage....",
        completed: false,
        _id: uuid()
    }
]

// post and get request
app.route('/')
    .get((req, res) => {
        res.send(todos)
    })
    .post((req, res) => {
        const newTodo = req.body
        newTodo._id = uuid()
        todos.push(newTodo)
        res.send(`You have successfully added ${newTodo.name} to the list`)
    })

// get one and put request
app.route('/:todoId')
    .get((req, res) => {
        const receivedId = req.params.todoId
        const foundTodo = todos.find(todo => todo._id === receivedId)
        res.send(foundTodo)
    })
    .put((req, res) => {
        const receivedId = req.params.todoId
        const todoUpdating = todos.findIndex(todo => todo._id === receivedId)
        const updatedTodo = Object.assign(todos[todoUpdating], req.body)
        res.send(updatedTodo)
    })
    .delete((req, res) => {
        const receivedId = req.params.todoId
        const todoDelete = todos.findIndex(todo => todo._id === receivedId)
        todos.splice(todoDelete, 1)
        res.send('You have successfully deleted the todo item.')
    })


// server is listening
app.listen(7000, () => {
    console.log('The server is up and running on port 7000')
})