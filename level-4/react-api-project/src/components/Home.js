import React, { useState, useContext } from 'react'
import axios from 'axios'
import { ContextInfo } from './contextInfo'
import SearchedList from './SearchedList'

function Home() {
    // info from context
    const { setVenueList, clientIdSquare, clientSecretSquare } = useContext(ContextInfo)

    //State for location and food type
    const [shakeDetails, setShakeDetails] = useState({location: '', foodType: ''})

    //State for is loading
    // const [isLoading, setLoading] = useState(false)

    // Get request for the user's search
    function shakeGet(e) {
        e.preventDefault()

        axios.get(`https://api.foursquare.com/v2/venues/search?client_id=${clientIdSquare}&client_secret=${clientSecretSquare}&v=20210725&near=${shakeDetails.location}&intent=browse&radius=10000&query=${shakeDetails.foodType}&limit=15`)
        .then(res => setVenueList(() => { 
            console.log(res.data.response.venues); 
            return [...res.data.response.venues]
        }))
        .catch(err => console.log(err))
    }

    // Handles form changes
    function handleChange(e) {
        const {name, value} = e.target

        setShakeDetails(prevDetails => {
            return {
                ...prevDetails,
                [name]: value
            }
        })
    }
    
    return (
        <div id='home'>
            <div id='topSection'>
                <h2>It's Time You Ate Somewhere New!</h2>
                <p>Enter your city, state, and the type of food your craving then shake the magic ate ball to find your next favorite place to eat!</p>
                <form id='userForm' onSubmit={shakeGet}>
                    <input 
                        type='text'
                        name='location'
                        placeholder='Location (city, state)'
                        value={shakeDetails.location}
                        onChange={handleChange}
                    />
                    <input 
                        type='text'
                        name='foodType'
                        placeholder='Type of Food'
                        value={shakeDetails.foodType}
                        onChange={handleChange}
                    />
                    <button>Shake It Up</button>
                </form>
            </div>
            <SearchedList />
        </div>
    )
}

export default Home

// Put this in the About Page

// Are you tired of eating at the same restaurants every week, but don't know where else to go?

// Us too. That's why we created the Magic Ate Ball. Enter your location and what type of food you are in the mood for and we will help you find new restaurants near you!