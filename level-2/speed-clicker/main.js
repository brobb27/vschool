// This counts how many times a person clicks the webpage


// This gets the h1 and makes the current value equal to the local storage or 0
const currentNumber = document.getElementById('number')
currentNumber.textContent = localStorage.number || 0

// This creates a new variable of count and sets it to the local storage number or 0
let count = localStorage.number || 0


function listening() {
    document.addEventListener(`click`, function() {
        // This takes either the local storage number or 0 and adds 1
        count++

        // This sets the currentNumber text content to the new number
        currentNumber.textContent = count

        // This stores the new number in the local storage
        localStorage.setItem(`number`, count)
    })
}

listening()






// This code didn't work

// document.addEventListener('click', function() {

//     // Stores the current number and calculates the new number by adding 1
//     const currentNumber = document.getElementById(`number`)
//     const newNumber = currentNumber.nodeValue + 1
//     console.log(currentNumber)

//     //This creates a new element with the new number and adds it to the page
//     const theNumber = document.createElement('h1')
//     theNumber.textContent = newNumber
//     theNumber.id = 'number'

    
//     bodyDiv.appendChild(theNumber)

//     //This removes the old element
//     currentNumber.remove();
// })