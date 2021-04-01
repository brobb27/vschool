// Problem solving practice

// 1.
// function largest(array) {
//     for (let i = 0; i < array.length; i++) {
//         let firstNumber = array.indexOf(array[i])
//         let secondNumber = firstNumber + 1
//         let numberFromArray = array.slice(firstNumber, secondNumber)
//         const greaterThan = (currentValue) => numberFromArray >= currentValue;
//         if (array.every(greaterThan) === true) {
//             console.log(numberFromArray)
//         }
//     }
// }


// largest([3, 9, 2, 80, 3])


// CODE THAT DIDN'T WORK

// function largest(array) {
//     //creates new array that is the same as the original
//     console.log(array)

//     for (var i = 0; i < array.length; i++) {
//         var currentNumber = array[i]
//         const greaterThan = (currentNumber) => currentNumber >= array[j];

//         for (var j = 0; j < array.length; j++) {
            

//             if (array.every(greaterThan) === true) {
//             console.log(currentNumber)
//             }
//         }
//     }
// }


// 2.

function lettersWithStrings(arrayOfStrings, character) {
    for (let i = 0; i < arrayOfStrings.length; i++) {
        let firstIndex = arrayOfStrings.indexOf(arrayOfStrings[i])
        let secondIndex = firstIndex + 1
        let separateArray = arrayOfStrings.slice(firstIndex, secondIndex)
        let stringOfArray = separateArray[0]
        if (stringOfArray.includes(character)) {
            console.log(stringOfArray)
        }

    }
}

lettersWithStrings(["john!", "jacob", "jingle!"], "o")

// 3.

function isDivisible(num1, num2) {
    let result = num1 / num2
    if (result % 1 === 0){
        console.log('true')
    } else ( console.log('false'))
}

isDivisible(15, 5)
