import React, { useContext } from 'react'
import { UglyContext } from './uglyContext'
import axios from 'axios'

function SavedThing(props) {
    const { setSavedList } = useContext(UglyContext)

    // Deletes the thing from API
    function remove() {
        setSavedList(prevList => prevList.filter(savedThing => savedThing._id !== props.thing._id))
        axios.delete(`https://api.vschool.io/blairrobbins/thing/${props.thing._id}`)
            .then(res =>console.log(res))
            .catch(err => console.log(err));
    }

    return (
        <div className='uglyThing'>
            <h2>{props.thing.title}</h2>
            <p>{props.thing.description}</p>
            <img src={props.thing.imgUrl} alt='Ugly Thing'/>
            <div>
                <button>Edit</button>
                <button onClick={remove}>Delete</button>
            </div>
        </div>
    )
}

export default SavedThing