// Array Map Exercises


// 1) Make an array of numbers that are doubles of the first array

const firstString = [2, 5, 100]

const newDouble = firstString.map(function(number) {
    return number * 2
})

// E6 way to write it

const newerDouble = firstString.map(number => number * 2)

console.log(newerDouble)


// 2) Take an array of numbers and make them strings

const stringItUp = firstString.map(function(number) {
    return number.toString()
})

// E6 way to do it

const newToString = firstString.map(number => number.toString())

console.log(newToString)


// 3) Capitalize each of an array of names

const secondString = ["john", "JACOB", "jinGleHeimer", "schmidt"]

const capThem = secondString.map(function(name) {
    const firstLetter = name.slice(0, 1).toUpperCase()
    const restOfWord = name.slice(1, ).toLowerCase()

    return firstLetter.concat(restOfWord);
})

// E6 would just be name =>

const capEm = secondString.map(name => {
    const capitalized = name.slice(0, 1).toUpperCase() + name.slice(1, ).toLowerCase()

    return capitalized
})

console.log(capEm)


// 4) Make an array of strings of the names

const namesOnly = [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]

const theNames = namesOnly.map(function(person) {
    return person.name
})

// OR ES6

const onlyNames = namesOnly.map(person => person.name)

console.log(onlyNames)


// 5) Make an array of strings of the names saying whether or not they can go to The Matrix

const oldEnough = namesOnly.map(person => {
    if (person.age >= 18) {
        return `${person.name} can go to the Matrix`
    }
    else {
        return `${person.name} is under age!!`
    }
})

// OR ES6

const rRated = namesOnly.map(person => person.age >= 18 ? 
    `${person.name} can go to the Matrix.`
    :
    `${person.name} is too young to see the Matrix.`
)

console.log(rRated)


// 6) Make an array of the names in h1s, and the ages in h2s

const readyToImport = namesOnly.map(person => {
    return `<h1>${person.name}</h1><h2>${person.age}</h2>`
})

console.log(readyToImport)

// Do they want them in actual h1 and h2's or do they want them in a string with h1 and h2's?