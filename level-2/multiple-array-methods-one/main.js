// Multiple Array Methods Part 1

const people = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]

// This filters the array in alphabetical order from a to b

const lastName = people.sort((personA, personB) => {
    let a = personA.lastName.toLowerCase();
    let b = personB.lastName.toLowerCase();

    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    return 0;
})

// OR

const filterByLast = people.sort((personA, personB) => {
    return personA.lastName.toLowerCase - personB.lastName.toLowerCase
})

// This filters the array by age

const byAge = filterByLast.filter(person => person.age > 18)

// This gets the array ready to be inserted into html

const ready = byAge.map(person =>
    `<li>${person.firstName} ${person.lastName} is ${person.age} </li>`
)

console.log(ready)
