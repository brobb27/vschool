import React from 'react'
import { Link } from 'react-router-dom'

function VenueDetails(props) {
    // destructuring props
    const { place } = props
    return (
        <div className='detailComponent'>
            <Link to={`/detail/${place.id}`}><h2>{place.name}</h2></Link>
            <p><b>Type:</b> {place.categories[0].name}</p>
            <p><b>Address:</b> {place.location.address !== undefined ? `${place.location.address}, ${place.location.city}, ${place.location.state} ${place.location.postalCode}` : 'No Adress Available'}</p>
        </div>
    )
}

export default VenueDetails