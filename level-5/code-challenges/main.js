//Challenge number 1

// Usually when you buy something, you're asked whether your credit card number, 
// phone number or answer to your most secret question is still correct. 
// However, since someone could look over your shoulder, you don't want that shown on your screen.
// Instead, we mask it.

// Your task is to write a function maskify,
//  which changes all but the last four characters into '#'.

// return masked string
// function maskify(cc) {

//     let array = cc.split('')
    
//     let maskedArr = array.map((char, index) => {
//       if(index < cc.length - 4) {
//         return '#'
//       } else {
//         return char
//       }
//     })
    
//     let encrypted = maskedArr.join('')
    
//     console.log(encrypted)

// }

// maskify('hellllasdfa')


//Challenge number 2
// function isValidWalk(walk) {
//     let n = 0
//     let s = 0
//     let w = 0
//     let e = 0

//     for(let i = 0; i < walk.length; i++) {
//       if(walk[i] === 'n') {
//         n += 1
//       } else if (walk[i] === 's') {
//         s += 1
//       } else if (walk[i] === 'w') {
//         w += 1
//       } else if (walk[i] === 'e') {
//         e += 1
//       }
//     }

//     let total = n + s + w + e
//     let evenNS = n + s
//     let evenWE = w + e

//     console.log(total)

//     if (total === 10) {
//       if (n === s && w === e && evenWE % 2 === 0 && evenNS % 2 === 0) {
//         return true
//       }
//     } else {
//       return false
//     }

// }

// console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']))


//Challenge number 3
// Find the number that appears an odd number of times

// loop through array twice
// compare one to all the rest
// if it is found then add it to a variable
// if variable % 2 does not have a remainder of 0 then it appears an odd number of times


// function findOdd(A) {
//   // first loop to hold the space of the first number
//   for(let i = 0; i < A.length; i++) {
//     // count to tell us how many times that number appears
//     var oddOneOut = 0
//     // second loop to compare the first number to the second number
//     for(let j = 0; j < A.length; j++) {
//       // comparing the first number held by the first loop A[i] to all the
//       //  other numbers in the array A[j] that this loop will go through
//       // (because it is a double loop it will compare it to the first number)
//       if (A[i] === A[j]) {
//         // if the number is found it adds one to the variable above
//         oddOneOut++
//       }
//     }
//     if (oddOneOut % 2 !== 0) {
//         return A[i]
//     }
//   }
// }

// console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]))


//Challenge number 4
// Find the shortest string and return it's length

// function findShort(s){
//   // split the string into an array by ' '
//   // sort data by array length return the shortest words length

//   // split the array
//   let array = s.split(' ')
  
//   // sort array to compare one length of the word to the next
//   array.sort((a, b) => (a.length - b.length))

//   // return the length of the item with the index of 0
//   return array[0].length
  
// }

// console.log(findShort("bitcoin take over the world maybe who knows perhaps"))


//Challenge number 5
// Find the digital root

// function digital_root(n) {
//   var root = n
//   while(root > 9) {
//     // turns num into string
//     let string = root.toString()
//     let stringArr = string.split('')
//     let arr = stringArr.map(num => Number(num))

//     console.log(arr)

//     let result = arr.reduce((final, num) => {
//       final += num
//       return final
//     })

//     root = result
//   }

//   return root
// }

// console.log(digital_root(24590))

//Challenge number 6
// change letter to either ( or )

// function duplicateEncode(word){
//   // splits the string into array
//   const array = word.toLowerCase().split('')
  
//   const newArray = array.map(letter => {
//     // make a copy of the array
//     const test = [...array]

//     // remove the current letter from the array
//     test.splice(test.indexOf(letter), 1)

//     // see if there are any other letters that match and return based on the result
//     const result = test.some(newletter => newletter === letter )
//     if (result === true) {
//       return ')'
//     } else if (result === false) {
//       return '('
//     }
//   })

//   console.log(newArray.join(''))
// }

// REFACTORED

// function duplicateEncode(word){
//   const arr = word.toLowerCase().split('')
//   const encodedArr = arr.map(letter => arr.indexOf(letter) === arr.lastIndexOf(letter) ? `(` : ')')
  
//   console.log(encodedArr.join(''))
//   return encodedArr.join('')

// }

// duplicateEncode('hello')


//Challenge number 7
// sort an array in ascending order ignoring even numbers

// function sortArray(array) {
  

//   array.sort((a, b) => {
//     if (a % 2 === 0) {
//       return 0
//     } else if (a > b && b % 2 !== 0) {
//       return 1
//     }
//   })
  
//   console.log(array)
//   return array
// }

// sortArray([5, 3, 2, 8, 1, 4])

//Challenge 20
// understanding map

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8]
// const names = ["john", "JACOB", "jinGleHeimer", "schmidt"]

// const isEven = numbers.map(num => num % 2 !== 0 ? num : 'even')

// Double numbers of an array
// function double(arr) {
//   const doubled = arr.map(number => number * 2)
//   return doubled
// }

// console.log(double(numbers))

// Take the numbers of an array and make them strings
// function numToString(arr) {
//   const stringed = arr.map(number => number.toString())
//   return stringed
// }

// console.log(numToString(numbers))

// Capitalize each name in the array
// function capThem(arr) {
//   const capitalized = arr.map(name => {
//     const firstLetter = name[0].toUpperCase()
//     const restOfWord = name.slice(1, ).toLowerCase()

//     return firstLetter.concat(restOfWord)
//   })
//   return capitalized
// }

// console.log(capThem(names))

// Make an array of strings of the names
// function namesOnly(arr){
//   const names = arr.map(person => person.name)
//   return names
// }

// console.log(namesOnly([
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]));

// Make an array saying whether or not the person is old enough to see a rated R movie
// function makeStrings(arr){
//   const isOldEnough = arr.map(person => person.age >= 18 ?
//      `${person.name} is old enough to see The Matrix` :
//      `${person.name} is not old enough to see The Matrix`
//   )
//   return isOldEnough
// }

// console.log(makeStrings([
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]));

// Make an array of the names in h1's and ages in h2's
// function readyToPutInTheDOM(arr){
//   const personComponents = arr.map(person => `<h1>${person.name}</h1><h2>${person.age}</h2>`)
//   return personComponents
// }
// console.log(readyToPutInTheDOM([
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]));


//Challenge number 21
// Understanding filter

// const numbers = [2, 4, 3, 6, 9, 12, 15]
// const strings = ["dog", "wolf", "by", "family", "eaten", "camping"]

// Filter numbers to return greater than 5
// function fiveAndGreaterOnly(arr) {
//   const filtered = numbers.filter(number => number > 5)

//   return filtered
// }

// console.log(fiveAndGreaterOnly(numbers))

// Filter to only return even numbers
// function evensOnly(arr) {
//   const filterByEven = arr.filter(number => number % 2 === 0)

//   return filterByEven
// }

// console.log(evensOnly(numbers))

// Filter by strings that have 5 characters or less
// function fiveCharactersOrFewerOnly(arr) {
//   const lessThanFive = arr.filter(word => word.length <= 5)

//   return lessThanFive
// }

// console.log(fiveCharactersOrFewerOnly(strings))

// Filter by club status
// function peopleWhoBelongToTheIlluminati(arr){
//   const inClub = arr.filter(person => person.member === true)

//   return inClub
// }

// console.log(peopleWhoBelongToTheIlluminati([
//     { name: "Angelina Jolie", member: true },
//     { name: "Eric Jones", member: false },
//     { name: "Paris Hilton", member: true },
//     { name: "Kayne West", member: false },
//     { name: "Bob Ziroll", member: true }
// ]));

// Filter by age
// function ofAge(arr){
//   const isOldEnough = arr.filter(person => person.age >= 18)
  
//   return isOldEnough
// }

// console.log(ofAge([
//     { name: "Angelina Jolie", age: 80 },
//     { name: "Eric Jones", age: 2 },
//     { name: "Paris Hilton", age: 5 },
//     { name: "Kayne West", age: 16 },
//     { name: "Bob Ziroll", age: 100 }
// ])); 


//Challenge number 22
// Understanding sort

// const numbers = [20, 45, 50, 1, 5, 7, 8]
// const strings = ['Boy', 'Girl', 'animal', 'Cow', 'Zoo']
// const objects = [{name: 'ronald', number: 2}, {name: 'Bobby', number: 5}, {name: 'alex', number: 10}, {name: 'Burton', age: 60}]

// // sort by youngest to oldest or alphabetically
// numbers.sort((a, b) => {
//   // a is greater than b then move it 1 space to the right
//   if (a > b) {
//     return 1
//   }
//   // b is greater than a 
//   else if (b > a) {
//     return -1
//   } 
//   else {
//     return 0
//   }
// })

// // there are certain use cases you will need to compare a to b and b to a as shown above

// objects.sort((a, b) => a.name.toUpperCase() > b.name.toUpperCase() ? 1 : 0)

// console.log(objects)





