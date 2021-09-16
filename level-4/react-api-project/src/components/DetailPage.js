import React, { useContext, useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { ContextInfo } from './contextInfo'

function DetailPage(props) {
    // Using hooks to retreive necessary information for my AJAX call
    const { clientIdSquare, clientSecretSquare, favoritesList, setFavoriteList } = useContext(ContextInfo)
    const { venueId } = useParams()

    // Using state to store my data
    const [info, setInfo] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    // Get request for venue details
    function getDetails() {
        axios.get(`https://api.foursquare.com/v2/venues/${venueId}?client_id=${clientIdSquare}&client_secret=${clientSecretSquare}&v=20210725`)
        .then(res => {
            setInfo(() => {
            console.log(res.data.response.venue)
            return (res.data.response.venue)
            });
            setIsLoading(false)
        })
        .catch(err => console.log(err))
    }

    // useEffect as componenet did mount
    useEffect(() => {
        getDetails()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // Add venue to favorite list
    function favorite() {
        setFavoriteList(prevList => 
            [...prevList, {
                    name, 
                    photoUrl: photos.count === 0 ? '' : `${photos.groups[0].items[0].prefix}original${photos.groups[0].items[0].suffix}`,
                    description: page && page.pageInfo !== false ? page.pageInfo.description : 'No description available',
                    phone: contact.formattedPhone !== undefined ? contact.formattedPhone : contact.phone || 'No phone number available',
                    address: location !== undefined ? `${location.address}, ${location.city}, ${location.state} ${location.postalCode}` : 'No Address Available',
                    hours: hours !== undefined ? hours.status : 'Not Available',
                    price: price !== undefined ? price.message : 'Not Available',
                    id: info.id
                }
            ]
        )
    }

    console.log(favoritesList)

    // Destructuring JSON objects
    const { name, contact, location, page, hours, price, photos } = info

    return (
        <div id='detailPage'>
            {isLoading === true ? 
            <h1>Loading...</h1> : 
            <>
                <h1>Restaurant Details</h1>
                <h2>{name}</h2>
                <img src={photos.count === 0 ? '' : `${photos.groups[0].items[0].prefix}original${photos.groups[0].items[0].suffix}`} alt='Our Venue' className='detailImg'/>
                <p>Description: {page && page.pageInfo !== false ? page.pageInfo.description : 'No description available'}</p>
                <p>Phone: {contact.formattedPhone !== undefined ? contact.formattedPhone : contact.phone || 'No phone number available' }</p>
                <p>Address: {location !== undefined ? `${location.address}, ${location.city}, ${location.state} ${location.postalCode}` : 'No Address Available'}</p>
                <p>Hours: {hours !== undefined ? hours.status : 'Not Available'}</p>
                <p>Price Scale: {price !== undefined ? price.message : 'Not Available'}</p>
                <button onClick={favorite}>Add to Favorites</button>
            </>}
        </div>
    )
}

export default DetailPage