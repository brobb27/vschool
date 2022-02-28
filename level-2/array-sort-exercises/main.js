// Array Sort Exercises


// 1) Sort an array from smallest number to largest

const firstArray = [1, 3, 5, 2, 90, 20]

firstArray.sort((a, b) => a - b)

console.log(firstArray)


// 2) Sort an array from largest number to smallest

firstArray.sort((a, b) => b - a)

console.log(firstArray)


// 3) Sort an array from shortest string to longest

const secondArray = ["dog", "wolf", "by", "family", "eaten"]

secondArray.sort((a, b) => a.length - b.length)

console.log(secondArray)


// 4) Sort an array alphabetically

secondArray.sort()

console.log(secondArray)


// 5) Sort the objects in the array by age

const ageArray = [
    { name: "Quiet Samurai", age: 22 },
    { name: "Arrogant Ambassador", age: 100 },
    { name: "Misunderstood Observer", age: 2 },
    { name: "Unlucky Swami", age: 77 }
]

ageArray.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))

console.log(ageArray)

ageArray.sort((a, b) => a.age - b.age)

console.log(ageArray)