// String Methods Exercise

// 1.
// function capitalizeAndLowercase(word) {
//     var wordCapitalized = word.toUpperCase()
//     var wordLowerCased = word.toLowerCase()

//     console.log(wordCapitalized + wordLowerCased)
// }

// capitalizeAndLowercase("YeeeEEEt")

// 2.
// function findMiddleIndex(word) {
//     var lengthOfWord = word.length / 2
//     var middleIndex = Math.floor(lengthOfWord)

//     console.log(middleIndex)
// }

// findMiddleIndex("What it do baby!")

// 3.
// function returnFirstHalf(word) {
//     var halfwayPoint = Math.floor(word.length / 2)
//     var halfOfWord = word.slice(0, halfwayPoint)

//     console.log(halfOfWord)
// }

// returnFirstHalf("Okay I guess that is cool")

// 4.
// function capitalizeAndLowercase(word) {
//     var halfwayPoint = Math.floor(word.length / 2)
//     var firstHalf = word.slice(0, halfwayPoint)
//     var secondHalf = word.slice(halfwayPoint)
//     var completeWord = firstHalf.toUpperCase() + secondHalf.toLowerCase()

//     console.log(completeWord)
// }

// capitalizeAndLowercase("BlaIr RoBBins")

// 5.
function capitalizeEveryWord(phrase) {
    var phraseArray = phrase.split(" ")
    var newArray = []

    for (var i = 0; i < phraseArray.length; i++) {
        var firstLetter = phraseArray[i].slice(0, 1)
        var restOfWord = phraseArray[i].slice(1)
        var capitalized = firstLetter.toUpperCase()

        newArray.push(capitalized + restOfWord)
    }

    var finalProduct = newArray.join(" ")
    
    console.log(finalProduct)
}

capitalizeEveryWord("let us see if this works- it sure does!")