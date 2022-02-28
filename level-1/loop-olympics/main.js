// PRELIMINARIES
// 1. Write a for loop that prints to the console the numbers 0 through 9.
// 2. Write a for loop that prints to the console 9 through 0.
// 3. Write a for loop that prints these fruits to the console.
// const fruit = ["banana", "orange", "apple", "kiwi"]

// 1.
// for (var i = 0; i <= 9; i++) {
//     console.log(i)
// }

// 2.
// for (var i = 9; i >= 0; i--) {
//     console.log(i)
// }

// 3.
// for (var i = 0; i < fruit.length; i++) {
//     console.log(fruit[i])
// }
// fruit.forEach(fruit => console.log(fruit))

// BRONZE MEDAL
// 1. Write a for loop that will push the numbers 0 through 9 to an array.
// 2. Write a for loop that prints to the console only even numbers 0 through 100.
// 3. Write a for loop that will push every other fruit to an array.
const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]

// 1.
// const myArray = []

// for (var i = 0; i <= 9; i++) {
//     myArray.push(i)
// }
// console.log(myArray)

// 2.
// for (var i = 0; i <= 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i)
//     }
// }

// 3.
// const fruityArray = []
// for (var i = 0; i < fruit.length; i++) {
//     if (i % 2 === 0) {
//         fruityArray.push(fruit[i])
//     }
// }
// console.log(fruityArray)
// const newArr = fruit.filter(item => (fruit.indexOf(item) + 1) % 2 !== 0)
// console.log(newArr)

// SILVER MEDAL
// 1. Write a loop that will print out all the names of the people of the people array
// 2. Write a loop that pushes the names into a names array, and the occupations into an occupations array.
// 3. Write a loop that pushes every other name to an array starting with the first person, 
// in this case "Harrison Ford", and every other occupation to another array starting with, in this case, "Singer".
const peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]

// 1.
// for (var i = 0; i < peopleArray.length; i++) {
//     console.log(peopleArray[i].name)
// }
// peopleArray.forEach(person => console.log(person.name))

// 2.
const namesArray = []
const occupationsArray = []

// for (var i = 0; i < peopleArray.length; i++) {
//     namesArray.push(peopleArray[i].name)
//     occupationsArray.push(peopleArray[i].occupation)
// }
// peopleArray.forEach(person => {
//     namesArray.push(person.name); 
//     occupationsArray.push(person.occupation)
// })

// console.log(namesArray)
// console.log(occupationsArray)

// 3.
// const namesArray = []
// const occupationsArray = []

// for (var i = 0; i < peopleArray.length; i++) {
//     if (i % 2 === 0) {
//         namesArray.push(peopleArray[i].name)
//     } else {
//         occupationsArray.push(peopleArray[i].occupation)
//     }
// }
// peopleArray.forEach(person => {
//   peopleArray.indexOf(person) % 2 === 0 ? namesArray.push(person.name) : occupationsArray.push(person.occupation)
// })

// console.log(namesArray)
// console.log(occupationsArray)

// GOLD MEDAL


let arrayOfArrays = []

// 1.
// for (var i = 0; i <= 2; i++) {
//     let array = []
//     for (var j = 0; j <= 2; j++) {
//         array.push(0)
//     }
//     arrayOfArrays.push(array)
// }

// console.log(arrayOfArrays)

// console.log(arrayOfArrays[1][2])

// 2.
// for (var i = 0; i <= 2; i++) {
//     let array = []
//     for (var j = 0; j <= 2; j++) {
//         array.push(i)
//     }
//     arrayOfArrays.push(array)

// }
// console.log(arrayOfArrays)

// 3.
for (var i = 0; i <= 2; i++) {
    let array = []
    for (var j = 0; j <= 2; j++) {
        array.push(j)
    }
    arrayOfArrays.push(array)
}

// 4.
for (var i = 0; i <= 2; i++){
    for (var j = 0; j <= 2; j++) {
        arrayOfArrays[j].shift()
        arrayOfArrays[j].push('x')
    }

}

console.log(arrayOfArrays)