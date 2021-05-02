// This counts how many times a person clicks the webpage

const currentNumber = document.getElementById(`number`)
let count = localStorage.number || 0;
currentNumber.textContent = localStorage.number




document.addEventListener('click', function() {
    count++
    currentNumber.textContent = count
    
    localStorage.number = count
})



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