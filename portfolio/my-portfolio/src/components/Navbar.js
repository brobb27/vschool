import React, { useState } from 'react'
import personalLogo from '../images/site_logo.png'
import { GiHamburgerMenu } from 'react-icons/gi'

function Navbar() {
    // state for the background color
    const [scrolled, setScroll] = useState(false)
    const [isDropped, setDrop] = useState(false)

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

    //dropdown true or false?
    function dropdown() {
        setDrop(prevState => !prevState)
    }

    return (
        <div id='navbar' className={scrolled ? 'scroll' : ''}>
            <div id='navbarTitle'>
                <img src={personalLogo} alt='Personal Logo'/>
                <a href='header'>Blair Robbins</a>
            </div>
            <div className={isDropped === false ? 'navbarLinks' : 'droppedOptions'}>
                <div id='dropper' onClick={dropdown}>
                    <GiHamburgerMenu />
                </div>
                <a href='#header'>Home</a>
                <a href='#aboutMe'>About Me</a>
                <a href='#projects'>Projects</a>
                <a href='#contact'>Contact Me</a>
            </div>
        </div>
    )
}

export default Navbar