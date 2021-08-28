import React, { useState } from 'react'
import axios from 'axios'
const UglyContext = React.createContext()

function UglyContextProvider(props) {
    // State handlers
    const [savedList, setSavedList] = useState([])
    const [, setEdit] = useState(false)
    const [postMade, setPostMade] = useState(1)

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
        setState({title: '', imgUrl: '', description: ''})
        setPostMade(prevCount => prevCount + 1)
    }

    function edit() {
        console.log(savedList)
    }

    function toggleEdit() {
        setEdit(prevState => !prevState)
    }

    return (
        <UglyContext.Provider value={{submit, toggleEdit, edit, savedList, setSavedList, getList, postMade}}>
            {props.children}
        </UglyContext.Provider>
    )
}

export {UglyContextProvider, UglyContext}