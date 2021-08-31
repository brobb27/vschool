import React, { useState } from 'react'
import axios from 'axios'
const UglyContext = React.createContext()

function UglyContextProvider(props) {
    // State handlers
    const [savedList, setSavedList] = useState([])

    // Get request to thing API
    function getList() {
        axios.get('https://api.vschool.io/blairrobbins/thing')
            .then(res => setSavedList(() => [...res.data]))
            .catch(err => console.log(err))
    }

    // Post request to thing API
    function submit(e, item, setState) {
        e.preventDefault()
        axios.post('https://api.vschool.io/blairrobbins/thing', item)
            .then(() => getList())
            .catch((err) => console.log(err))
        setState({title: '', imgUrl: '', description: ''})
    }

    // Put request to thing API
    function update(e, itemId, itemInfo) {
        e.preventDefault()
        axios.put(`https://api.vschool.io/blairrobbins/thing/${itemId}`, itemInfo)
            .then(() => getList())
            .catch((err) => console.log(err))
        console.log(itemId)

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