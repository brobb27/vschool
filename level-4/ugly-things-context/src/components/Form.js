import React, { useContext, useState } from 'react'
import {UglyContext} from './uglyContext'

// Form props are "isEditing", "toggleEdit", "itemId", and "descriptionId"

function Form(props) {
    const { submit, update } = useContext(UglyContext)

    // destructures props
    const { defaultTitle, defaultDescription, defaultImg, itemId } = props

    // sets the state as empty or sets it as the previous text
    const [productDetails, setDetails] = 
        useState(
            props.isEditing === true ? 
            {title: defaultTitle, description: defaultDescription, imgUrl: defaultImg} : 
            {title: '', description: '', imgUrl: ''}
        )
    
    // handles changes of the input boxes
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
            <form 
                id={props.descriptionId} 
                onSubmit={ props.isEditing ? ((e) => {update(e, itemId, productDetails); props.toggleEdit()}) : ((e) => submit(e, productDetails, setDetails)) }
            >
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
                {/* isEditing conditional */}
                {props.isEditing ? <button>Update</button> : <button id='submit'>Submit</button>}
            </form>
        </div>
    )
}

export default Form