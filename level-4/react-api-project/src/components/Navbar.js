import React from 'react'
import { Link } from 'react-router-dom'
import { GiEightBall } from 'react-icons/gi'

function Navbar() {
    return (
        <div id="navbar" >
            <a id="navbarTitle" href='https://github.com/brobb27/vschool'>Magic Ate Ball <GiEightBall /></a>
            <div id="navbarLinks">
                <Link className="navbarLink" to='/'>HOME</Link>
                <Link className="navbarLink" to='/favorites'>MY FAVORITES</Link>
                <Link className="navbarLink" to='/about'>ABOUT</Link>
            </div>
        </div>
    )
}

export default Navbar