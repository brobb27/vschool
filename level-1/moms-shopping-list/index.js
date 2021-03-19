// This allows you to add an item to the shopping list

const addItem = document.addItemForm


function addToList(event) {
    event.preventDefault()

    const userInputText = addItem.title.value
    addItem.title.value = ""

    const newListItem = document.createElement('li')
    const inputHolder = document.createElement('div')
    inputHolder.textContent = userInputText

    //This creates an edit button and allows the user to change the text
    const editButton = document.createElement('button')
    editButton.textContent = 'edit'
    editButton.className = 'editButton'
    editButton.addEventListener('click', editItemInList)

    //This function allows the user to edit the original list item
    function editItemInList() {

        //This stores the original userInputText
        const previousText = newListItem.childNodes[0].innerText

        //This removes the users previous userInputText
        newListItem.removeChild(newListItem.childNodes[0])
        
        //This removes the edit button and turns it into a save button
        editButton.remove()
        const saveButton = document.createElement('button')
        saveButton.textContent = 'save'
        newListItem.prepend(saveButton)

        //This creates a new input box for the user to make changes
        const userEditInputHolder = document.createElement('input')
        userEditInputHolder.type = 'text'
        userEditInputHolder.value = previousText
        newListItem.prepend(userEditInputHolder)

        //This allows the user to save the new input
        saveButton.addEventListener('click', saveEdit)
        function saveEdit() {

            //This changes the save button back to the edit button
            newListItem.prepend(editButton)
            

            //This adds the new input to the list and removes the input box and save button
            const editText = document.createElement('div')
            editText.textContent = userEditInputHolder.value
            newListItem.prepend(editText)

            userEditInputHolder.remove()
            saveButton.remove()
        

        }
    }

    //This creates a delete button
    const deleteButton = document.createElement('button')
    deleteButton.textContent = 'X'
    deleteButton.className = 'deleteButton'
    deleteButton.addEventListener('click', removeFromList)
    function removeFromList() {
        this.parentElement.remove()
    }

    //This appends the elements to the list item
    newListItem.appendChild(inputHolder)
    newListItem.appendChild(editButton)
    newListItem.appendChild(deleteButton)

    const theActualShoppingList = document.getElementById('list')

    theActualShoppingList.append(newListItem)


}

addItem.addEventListener ('submit', addToList)




//THIS CODE DID NOT WORK


// This allows you to delete items off of the list

// const deleteButtons = document.getElementsByClassName('deleteButton')

// function removeFromList(event) {
//     console.log('f me')
// }

// console.log(deleteButtons)


// for (var i = 0; i < deleteButtons.length; i++) {
//     console.log(deleteButtons[i].value)
//     deleteButtons[i].addEventListener('click', removeFromList)
// }


// const parentListItem = deleteButtons[i].parentElement

//     function removeFromList(event) {
//         parentListItem.remove()
//     }




// const buttons = document.getElementsByTagName('button')

// function deleteButtons (event) {
//     for (var i = 0; i < buttons.length; i++) {
//         if (buttons[i].value === 'X') {
//             console.log('hi')
//         }
//     }
// }

// function removeFromList(event) {

