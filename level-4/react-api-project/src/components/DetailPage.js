import React, { useContext, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { ContextInfo } from './contextInfo'

function DetailPage(props) {
    // Using hooks to retreive necessary information for my AJAX call
    const { clientIdSquare, clientSecretSquare } = useContext(ContextInfo)
    const { venueId } = useParams()
    console.log(venueId)

    // Using state to store my data
    const [info, setInfo] = useState()

    // Get request for venue details
    axios.get(`https://api.foursquare.com/v2/venues/${venueId}?client_id=${clientIdSquare}&client_secret=${clientSecretSquare}&v=20210725`)
    .then(res => setInfo(() => {
        console.log(res.data.response)
        return (res.data.response)
    }))
    .catch(err => console.log(err))

    // res => setInfo(() => {
    //     console.log(res.response)
    //     return [...res.response]
    // })


    return (
        <div>
            <h1>latida da</h1>
            <p>Hmmm</p>
        </div>
    )
}

export default DetailPage