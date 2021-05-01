// Traveler's form

const tForm = document.travelInfo

tForm.addEventListener(`submit`, function(event) {
    event.preventDefault()

    const firstName = tForm.firstName.value
    const lastName = tForm.lastName.value
    const age = tForm.age.value
    const gender = tForm.gender.value
    const destination = tForm.destination.value
    const allergies = tForm.allergies
    let allergiesArray = []

    for(let i = 0; i < allergies.length; i++) {
        if (allergies[i].checked === true) {
            allergiesArray.push(allergies[i].value)
        }
    }
    
    alert(`
    First name: ${firstName}
    Last name: ${lastName}
    Age: ${age}
    Gender: ${gender} 
    Destination: ${destination}
    Allergies: ${allergiesArray}`)
})