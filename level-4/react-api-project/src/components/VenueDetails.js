import React from 'react'
import { Link } from 'react-router-dom'

function VenueDetails(props) {
    return (
        <div>
            <Link to={`/detail/${props.place.id}`}><h2>{props.place.name}</h2></Link>
            <p>{props.place.id}</p>
            <p>{props.place.location.address}</p>
            <p>type: {props.place.categories[0].name}</p>
        </div>
    )
}

export default VenueDetails