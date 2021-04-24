// This is the addition function
const additionForm = document.add
const additionDiv = document.getElementById(`additionDiv`)

additionForm.addEventListener(`submit`, function(event) {
    event.preventDefault()

    const num1 = additionForm.addNum1.value
    const num2 = additionForm.addNum2.value
    additionForm.addNum1.value = ``
    additionForm.addNum2.value = ``

    const result = document.createElement(`h4`)

    result.textContent = Number(num1) + Number(num2)

    additionDiv.append(result)

})


// This is the subtration function
const subForm = document.subtract
const subDiv = document.getElementById(`subtractionDiv`)

subForm.addEventListener(`submit`, function(event) {
    event.preventDefault()

    const num1 = subForm.subNum1.value
    const num2 = subForm.subNum2.value
    subForm.subNum1.value = ``
    subForm.subNum2.value = ``

    const result = document.createElement(`h4`)

    result.textContent = num1 - num2

    subDiv.append(result)

})


// This is the multiplication function
const multiForm = document.multiply
const multiDiv = document.getElementById(`multiplicationDiv`)

multiForm.addEventListener(`submit`, function(event) {
    event.preventDefault()

    const num1 = multiForm.multiNum1.value
    const num2 = multiForm.multiNum2.value
    multiForm.multiNum1.value = ``
    multiForm.multiNum2.value = ``

    const result = document.createElement(`h4`)

    result.textContent = num1 * num2

    multiDiv.append(result)

})
