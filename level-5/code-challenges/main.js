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


//Challeng number 5
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


//Challenge 7
// understanding 



