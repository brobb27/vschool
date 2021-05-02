// This is that main funciton that calculates the amount due by Princess Peach

const form = document.baddiesForm
const result = document.getElementById(`results`)

addEventListener('submit', function(event) {
    event.preventDefault();

    // Total amount for each baddie category
    const goombaTotal = form.numOfGooms.value * 5
    const bombTotal = form.numOfBombs.value * 7
    const cheepTotal = form.numOfCheeps.value * 11

    // Adds all of them up!
    const invoiceTotal = goombaTotal + bombTotal + cheepTotal

    // creates a new element
    const totalAmountDue = document.createElement(`h1`)
    totalAmountDue.textContent = invoiceTotal + " coins!"

    // appends the total amount to the result div
    result.appendChild(totalAmountDue)

})