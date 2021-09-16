import React, { useState, useEffect } from 'react'

const ContextInfo = React.createContext()


function ContextInfoProvider(props) {

    // Retrieve local list storage
    const retrievedData = localStorage.getItem('localFavoriteList')
    const localFavoriteList = JSON.parse(retrievedData)

    // State of current 8 restaurants
    const [venueList, setVenueList] = useState([])
    const [favoritesList, setFavoriteList] = useState(localFavoriteList || [])

    // Client id and secret id foursquare (make context to handle these)
    const clientIdSquare = 'YUC3ZX0JTCE5XH1GBJNMV1XWA33FQ5UY324J4C1DXTCQ0XRH'
    const clientSecretSquare = '435MV4PXVOJZLZWPG1CJCSMAJNW22O1QFYEZU5GIG5QXS5IS'

    // Updadate local storage
    useEffect(() => {
        localStorage.setItem('localFavoriteList', JSON.stringify(favoritesList))
    }, [favoritesList])


    return (
        <ContextInfo.Provider value={{clientIdSquare, clientSecretSquare, venueList, setVenueList, favoritesList, setFavoriteList}}>
            {props.children}
        </ContextInfo.Provider>
    )
}

export {ContextInfoProvider, ContextInfo}


// get requests to get restaurant pictures/details

// https://api.foursquare.com/v2/venues/{{VENUE_ID}}?client_id={{client_id}}&client_secret={{client_secret}}&v=20210725