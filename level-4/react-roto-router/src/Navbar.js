import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <div id="navbar">
            <Link to='/' id="navbarTitle">Theme Context</Link>
            <div id="navbarLinks">
                <Link to='/' className="navbarLink">HOME</Link>
                <Link to='/about' className="navbarLink">ABOUT</Link>
                <Link to='/services' className="navbarLink">SERVICES</Link>
            </div>
        </div>
    )
}

export default Navbar