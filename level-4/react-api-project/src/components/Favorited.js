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
        <div id='favoritedVenue'>
            <h2>{props.venue.name}</h2>
            <img src={props.venue.photoUrl} alt='Our Venue' className='detailImg'/>
            <p><b>Description:</b> {props.venue.description}</p>
            <p><b>Phone:</b> {props.venue.phone}</p>
            <p><b>Address:</b> {props.venue.address}</p>
            <p><b>Hours:</b> {props.venue.hours}</p>
            <p><b>Price Scale:</b> {props.venue.price}</p>
            <button onClick={remove}>Remove From Favorites</button>
        </div>
    )
}

export default Favorited