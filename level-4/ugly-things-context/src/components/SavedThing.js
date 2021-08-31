import React, { useContext, useState } from 'react'
import { UglyContext } from './uglyContext'
import Form from './Form'
import axios from 'axios'

function SavedThing(props) {
    const { setSavedList } = useContext(UglyContext)
    const [isEditing, setEdit] = useState(false)

    // Deletes the thing from API
    function remove() {
        setSavedList(prevList => prevList.filter(savedThing => savedThing._id !== props.thing._id))
        axios.delete(`https://api.vschool.io/blairrobbins/thing/${props.thing._id}`)
            .then(res => {console.log(res); console.log('item deleted')})
            .catch(err => console.log(err));
    }

    // Changes the editing state
    function toggleEdit() {
        setEdit(prevState => !prevState)
    }

    return (
        <div className='savedThing'>
            <h2>{props.thing.title}</h2>
            <p>{props.thing.description}</p>
            <img src={props.thing.imgUrl} alt='Ugly Thing'/>
            {/* editing conditional */}
            {isEditing ? 
                <Form 
                    descriptionId='editForm' 
                    itemId={props.thing._id} 
                    isEditing={isEditing} 
                    toggleEdit={toggleEdit} 
                    defaultTitle={props.thing.title}
                    defaultImg={props.thing.imgUrl}
                    defaultDescription={props.thing.description}
                /> : 
                <div>
                    <button onClick={toggleEdit}>Edit</button>
                    <button onClick={remove}>Delete</button>
                </div>
            }
        </div>
    )
}

export default SavedThing