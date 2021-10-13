import React, { useState } from 'react'
import personalLogo from '../images/site_logo.png'

function Navbar() {
    // state for the background color
    const [scrolled, setScroll] = useState(false)

    // function to change state on scroll
    function changeBackground() {
        if (window.scrollY >= 80) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    }

    // event listener to trigger function
    window.addEventListener('scroll', changeBackground)

    return (
        <div id='navbar' className={scrolled ? 'scroll' : ''}>
            <div id='navbarTitle'>
                <img src={personalLogo} alt='Personal Logo'/>
                <a href='header'>Blair Robbins</a>
            </div>
            <div id='navbarLinks'>
                <a href='#header'>Home</a>
                <a href='#aboutMe'>About Me</a>
                <a href='#projects'>Projects</a>
                <a href='#contactMe'>Contact Me</a>
            </div>
        </div>
    )
}

export default Navbar