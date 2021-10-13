import React from 'react'

function Projects(props) {
    // list of project details
    const projectList = [
        {
            projectImg: 'xyz',
            title: 'Magic Ate Ball',
            description: `Are you tired of eating at the same places time and time again? This app uses Foursquare's api and allows you to shake up your food selection. Enter your city, state, and what kind of food you are craving to find your next favorite restaurant. Save the new restaurants to your favorite list so you always have options to choose from in the future.`
        },
        {
            projectImg: 'yeeeet',
            title: 'CSS Zen Garden',
            description: `This is a fully responsive website built from scratch with HTML & CSS. It is a copy of the original CSS Zen Garden created by Dave Shea.`
        },
        {
            projectImg: 'xyz',
            title: 'Job Tracker',
            description: 'It does lots of cool things'
        },
        {
            projectImg: 'xyz',
            title: 'Meme Generator',
            description: 'It does lots of cool things'
        },
        {
            projectImg: 'xyz',
            title: 'Kents Camera Kastle',
            description: 'It does lots of cool things'
        },
        {
            projectImg: 'xyz',
            title: 'AJAX/HTTP Travel List',
            description: 'It does lots of cool things'
        }
    ]

    return (
        <div id='projects'>
            <h2>Projects</h2>
            <p>Short description of what languages were used to develop these projects</p>
            <div id='projectContainer'>
                <p>componenets</p>
            </div>
        </div>
    )

}

export default Projects