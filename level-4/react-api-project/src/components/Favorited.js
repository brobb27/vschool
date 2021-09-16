import React, { useContext } from 'react'
import {ContextInfo} from './contextInfo'

function Favorited(props) {
    // Context info
    const { setFavoriteList } = useContext(ContextInfo)

    // Removes item from favorited list
    function remove() {
        setFavoriteList(prevList => prevList.filter(savedVenue => savedVenue.id !== props.venue.id))
    }

    return (
        <div>
            <h2>{props.venue.name}</h2>
            <img src={props.venue.photoUrl} alt='Our Venue'/>
            <p>Description: {props.venue.description}</p>
            <p>Phone: {props.venue.phone}</p>
            <p>Address: {props.venue.address}</p>
            <p>Hours: {props.venue.hours}</p>
            <p>Price Scale: {props.venue.price}</p>
            <p>{props.venue.id}</p>
            <button onClick={remove}>Remove From Favorites</button>
        </div>
    )
}

export default Favorited