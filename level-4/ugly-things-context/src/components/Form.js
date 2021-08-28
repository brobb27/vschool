import React, { useContext, useState } from 'react'
import {UglyContext} from './uglyContext'

function Form(props) {
    const { submit, edit, getList } = useContext(UglyContext)
    const [productDetails, setDetails] = useState({title: '', description: '', imgUrl: ''})
    
    function handleChange(e) {
        const {name, value} = e.target

        setDetails(prevDetails => {
            return {
                ...prevDetails,
                [name]: value
            }
        })
    }

    return (
        <div>
            <form id={props.descriptionId} onSubmit={(e) => submit(e, productDetails, setDetails)}>
                <input
                    type='text'
                    name='title'
                    placeholder='Title'
                    value={productDetails.title}
                    onChange={handleChange}
                    required
                />
                <input
                    type='text'
                    name='imgUrl'
                    placeholder='Image URL'
                    value={productDetails.imgUrl}
                    onChange={handleChange}
                    required
                />
                <textarea
                    type='text'
                    name='description'
                    placeholder='Enter Description Here'
                    value={productDetails.description}
                    onChange={handleChange}
                    required
                />
                <button id='submit' onClick={() => getList()}>Submit</button>
            </form>
            <button onClick={edit}>Test</button>
        </div>
    )
}

export default Form