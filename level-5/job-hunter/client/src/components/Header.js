import React from 'react'

function Header() {
    return (
        <div id="navbar">
            <a id="navbarTitle" href='https://github.com/brobb27/vschool'>Job Tracker</a>
            <div id="navbarLinks">
                <a className="navbarLink" href='https://github.com/brobb27/vschool'>HOME</a>
                <a className="navbarLink" href='https://github.com/brobb27/vschool'>ABOUT</a>
                <a className="navbarLink" href='https://github.com/brobb27/vschool'>CONTACT</a>
            </div>
        </div>
    )
}

export default Header
