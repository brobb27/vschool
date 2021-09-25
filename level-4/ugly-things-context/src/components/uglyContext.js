import React, { useState } from 'react'
import axios from 'axios'
const UglyContext = React.createContext()

function UglyContextProvider(props) {
    // State handler
    const [savedList, setSavedList] = useState([])

    // Get request to thing API
    function getList() {
        axios.get('https://api.vschool.io/blairrobbins/thing')
            .then(res => setSavedList(() => [...res.data]))
            .catch(err => console.log(err))
    }

    // Post request to thing API
    // RESPONSE WILL HAVE THE OBJECT THAT YOU CAN ADD THE SAVED LIST INSTEAD OF MAKING ANOTHER GET REQUEST
    function submit(e, item, setState) {
        e.preventDefault()
        axios.post('https://api.vschool.io/blairrobbins/thing', item)
            .then(res => getList())
            .catch((err) => console.log(err))
        setState({title: '', imgUrl: '', description: ''})
    }

    // Put request to thing API
    // RESPONSE WILL HAVE THE OBJECT THAT YOU CAN ADD THE SAVED LIST INSTEAD OF MAKING ANOTHER GET REQUEST
    function update(e, itemId, itemInfo) {
        e.preventDefault()
        axios.put(`https://api.vschool.io/blairrobbins/thing/${itemId}`, itemInfo)
            .then(() => getList())
            .catch((err) => console.log(err))
        // console.log(itemId)
    }

    function test() {
        console.log(savedList)
    }

    return (
        <UglyContext.Provider value={{submit, test, savedList, setSavedList, getList, update}}>
            {props.children}
        </UglyContext.Provider>
    )
}

export {UglyContextProvider, UglyContext}