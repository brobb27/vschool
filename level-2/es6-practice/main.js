// ES6 Practice

// 1. change var to let and const

// const name = "John"
// const age = 101

// function runForLoop(pets) {
//     const petObjects = []
//     for (let i = 0; i < pets.length; i++) {
//         const pet = { type: pets[i] }
//         let name;
//         if (pets[i] === "cat") {
//             name = "fluffy"
//         } else {
//             name = "spot"
//         }
//         console.log("pet name: ", name)
//         pet.name = name
//         petObjects.push(pet)
//     }
//     console.log("man name: ", name)
//     return petObjects
// }

// runForLoop(["cat", "dog"])

// 2. ES6 Arrow functions

// Task 1: re-write with arrow functions

const carrots = ["bright orange", "ripe", "rotten"]

function mapVegetables(arr) {
    return arr.map(carrot => ({ type: "carrot", nombre: carrot }))

    // Not ES6
    // return arr.map(function(carrot) {
    //     return { type: "carrot", name: carrot }
    // })
}

console.log(mapVegetables(carrots))

// Task 2: re-write with an arrow function

const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

function filterForFriendly(arr) {
    return arr.filter(person => person.friendly)

    // Not ES6
    // return arr.filter(function(person) {
    //     return person.friendly
    // })
}

console.log(filterForFriendly(people))

// Task 3: re-write functions to be arrow functions

const doMathSum = (a, b) => a + b

// ES5 version
// function doMathSum (a, b) {
//     return a + b
// }

console.log(doMathSum(5, 6))

const produceProducts = (a, b) => a * b

// ES5 version
// var produceProducts = function(a, b) {
//     return a * b
// }

console.log(produceProducts(5, 6))


// Task 4: Write a printString function that takes firstName, 
// lastName, and age as parameters and returns a string

const printString = (firstName, lastName, age) => `Hi ${firstName} ${lastName}, how does it feel to be ${age}`

console.log(printString('Jane', 'Doe', 100))

// Task 5: Use the shorthand syntax to make the following filter take up one line. Copy and paste the array to test it.

const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
 ];

 const filterForDogs = arr => arr.filter(animal => animal.type === `dog`)

 console.log(filterForDogs(animals))

 // Task 6: Using template literals, write a function that takes location and name parameters and outputs a message formatted

 const greeting = (firstName, destination) => `Hi ${firstName}! 
 
Welcome to ${destination}!
 
I hope you enjoy your stay. Please ask the president of ${destination} if you need anything!`

 console.log(greeting(`Jonny`, `Bolivia`))

 // Completed!!!