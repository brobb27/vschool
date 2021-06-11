// ES6 Slope Style Practice!

// 6streams.tv/nba-streams/

// 1.

function collectAnimals(...animals) { 
    return animals
}

console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus", "tiger"))

// 2.

const combineFruit = (fruit, sweets, vegetables) => ({fruits: fruit, sweets: sweets, vegetables: vegetables})

console.log(combineFruit(["apple", "pear"], ["cake", "pie"], ["carrot"]))

// 3.

const vacation = {  
    location: "Burly Idaho",
    duration: "3 weeks"
  };


function parseSentence({location, duration}){
    return `We're going to have a good time in ${location} for ${duration}`
  }

console.log(parseSentence(vacation))

// 4.

function returnFirst(items){
    const [firstItem, ...rest] = items; /*change this line to be es6*/
    return firstItem
}

console.log(returnFirst([4, 2, 3, 1]))

// 5. 

const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

const [firstFav, secondFav, thirdFav, ...rest] = favoriteActivities

function returnFavorites(){
    return `My top three favorite activities are, ${firstFav}, ${secondFav}, and ${thirdFav}?`
}

console.log(returnFavorites(favoriteActivities))

// 6.

function combineAnimals(arr1, arr2, arr3, ...rest) {
    return [...arr1, ...arr2, ...arr3, ...rest]
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals, `rabbit`))

// 7.

const product = (a, b, c, d, ...rest) => {
    const numbers = [a,b,c,d, ...rest];
    return numbers.reduce((final, number) => final * number, 1)
}

// Not ES6
// function product(a, b, c, d, e) {  
//     var numbers = [a,b,c,d,e];
  
//     return numbers.reduce(function(acc, number) {
//       return acc * number;
//     }, 1)
//   }

  console.log(product(1, 2, 3, 4))

// 8.

const newArray = ['cat', `dog`, 2]

function unshift(a, b, c, d, ...newer) {  
    return [a, b, c, d, ...newer];
  }

  console.log(unshift(1, 3, 4, `cat`, ...newArray))

// 9.

const populatePeople = (names) => names.map(name => {
     name = name.split(` `)
     const [firstName, lastName] = name
     return {
         firstName: firstName,
         lastName: lastName
     }
    })

// function populatePeople(names){
//     return names.map(function(name){
//         name = name.split(" ");
//         // your code
//         return {
//             firstName: firstName,
//             lastName: lastName
//         }
//     })
// }

console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))

// COMPLETED! SUCCESS!