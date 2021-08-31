import React, { useContext, useState } from 'react'
import {UglyContext} from './uglyContext'

// Form props are "isEditing", "toggleEdit", "itemId", and "descriptionId"

function Form(props) {
    const { submit, update } = useContext(UglyContext)
    const [productDetails, setDetails] = useState({title: '', description: '', imgUrl: ''})

    //create a new state for the edit form so we can have the values via props?
    //set conditionals on values to equal one or the other
    
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
                onSubmit={ props.isEditing ? ((e) => {update(e, props.itemId, productDetails); props.toggleEdit()}) : ((e) => submit(e, productDetails, setDetails)) }
            >
                <input
                    type='text'
                    name='title'
                    placeholder='Title'
                    value={productDetails.title}
                    // value={productDetails.title !== '' ? productDetails.title : props.defaultTitle}
                    onChange={handleChange}
                    required={props.descriptionId === 'firstForm' ? true : false}
                />
                <input
                    type='text'
                    name='imgUrl'
                    placeholder='Image URL'
                    value={productDetails.imgUrl !== '' ? productDetails.imgUrl : props.defaultImg}
                    onChange={handleChange}
                    required={props.descriptionId === 'firstForm' ? true : false}
                />
                <textarea
                    type='text'
                    name='description'
                    placeholder='Enter Description Here'
                    value={productDetails.description !== '' ? productDetails.description : props.defaultDescription}
                    onChange={handleChange}
                    required={props.descriptionId === 'firstForm' ? true : false}
                />
                {/* isEditing conditional */}
                {props.isEditing ? <button>Update</button> : <button id='submit'>Submit</button>}
            </form>
        </div>
    )
}

export default Form