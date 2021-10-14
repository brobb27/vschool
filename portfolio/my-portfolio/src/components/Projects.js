import React from 'react'
import ProjComponent from './ProjComponent'

// importing images
import magicAte from '../images/magicAteBallImg.png'
import zenGarden from '../images/zenGardenCSS.png'
import jobTracker from '../images/jobTracker.png'
import memeMachine from '../images/memeMachine.png'
import sampleBlog from '../images/sampleBlog.png'
import kentsCamera from '../images/kentsCamera.png'
import travelList from '../images/travelList.png'

function Projects() {
    // list of project details
    const projectList = [
        {
            projectImg: magicAte,
            title: 'Magic Ate Ball',
            description: `Are you tired of eating at the same places time and time again? This app uses Foursquare's api and allows you to shake up your food selection. Enter your city, state, and what kind of food you are craving to find your next favorite restaurant. Save the new restaurants you love to your favorites list.`
        },
        {
            projectImg: zenGarden,
            title: 'CSS Zen Garden',
            description: `This is a fully responsive website built from scratch with HTML & CSS. It is a copy of the original CSS Zen Garden created by Dave Shea.`
        },
        {
            projectImg: jobTracker,
            title: 'Job Tracker',
            description: 'Are you on the job hunt? This full stack app helps you to keep track of all the jobs you want. Easily see the pros, cons, and if you have applied to the jobs you are interested in.'
        },
        {
            projectImg: memeMachine,
            title: 'Meme Machine',
            description: 'This app selects random meme images from an API for you to make your own meme by entering in a top and bottom text.'
        },
        {
            projectImg: sampleBlog,
            title: 'Sample Blog',
            description: 'This is a simple is a sample landing page for a generic blog. It was built using React props and CSS'
        },
        {
            projectImg: kentsCamera,
            title: 'Kents Camera Castle',
            description: 'This fully responsive landing page was built from scratch using HTML, CSS, and Bootstrap. I built it for a digital marketing assignment while finishing my degree.'
        },
        {
            projectImg: travelList,
            title: 'Travel List',
            description: 'This app was built from scratch using HTML, CSS, and Javascript to make AJAX/HTTP calls to an API and allows the user to add travel destinations to the webpage.'
        }
    ]

    // map through project list for components
    const projectComponents = projectList.map(project => <ProjComponent proj={project} key={project.projectImg} />)


    return (
        <div id='projects'>
            <div>
                <h2>Projects</h2>
                <p>Short description of what languages were used to develop these projects</p>
            </div>
            <div id='projectContainer'>
                {projectComponents}
            </div>
        </div>
    )

}

export default Projects