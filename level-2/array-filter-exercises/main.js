// Array Filter Exercises


// 1) Given an array of numbers, return a new array that has only the numbers that are 5 or greater.

const firstArray = [3, 6, 8, 2]

const fiveOrGreater = firstArray.filter(function(number) {
    if (number > 5) {
        return number
    }
})

// OR

const es6Five = firstArray.filter(num => num > 5)

console.log(es6Five)


// 2) Given an array of numbers, return a new array that only includes the even numbers.

const even = firstArray.filter(function(num) {
    if (num % 2 === 0) {
        return num
    }
})

// OR

const es6Even = firstArray.filter(num => num % 2 === 0)

console.log(es6Even)


// 3) Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length

const stringArray = ["dog", "wolf", "by", "family", "eaten", "camping"]

const lessFive = stringArray.filter(function(word) {
    if (word.length <= 5) {
        return word
    }
})

// OR

const es6lessFive = stringArray.filter(word => word.length <= 5)

console.log(es6lessFive)


// 4) Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.

const illuminatiPeople = [
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }
]

const inTheClub = illuminatiPeople.filter(function(person) {
    if (person.member === true) {
        return person
    }
})

// OR

const es6inTheClub = illuminatiPeople.filter(person => person.member === true)

console.log(es6inTheClub)


// 5) Make a filtered list of all the people who are old enough to see The Matrix (older than 18)

const samePeople = [
        { name: "Angelina Jolie", age: 80 },
        { name: "Eric Jones", age: 2 },
        { name: "Paris Hilton", age: 5 },
        { name: "Kayne West", age: 16 },
        { name: "Bob Ziroll", age: 100 },
]

const oldEnough = samePeople.filter(function(person) {
    if (person.age >= 18) {
        return person
    }
})

// OR

const es6oldEnough = samePeople.filter(person => person.age >= 18)

console.log(es6oldEnough)