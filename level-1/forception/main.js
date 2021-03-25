// This is Forception

var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"


var newAlpha = alphabet.toUpperCase().split("")

function forception(){

    for (var i = 0; i < people.length; i++){
        // This creates a new array and pushes the names plus a ":"
        let newArray = []
        newArray.push(people[i] + ":")
        for (var j = 0; j < newAlpha.length; j++) {
            // This loops through the new alphabet and pushes each letter to the new array
            newArray.push(newAlpha[j])
        }
        console.log(newArray)
    }
}

// console.log(newAlpha)
forception()
