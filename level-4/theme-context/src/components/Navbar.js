import React, { useContext } from 'react'
import {ThemeContext} from '../ThemeContext'

// ADD CONTEXT USING "USE CONTEXT" SEE FOOTER FOR EXAMPLE

function Navbar() {
    const context = useContext(ThemeContext)
    return (
        <div id="navbar" className={`${context.theme}Theme`}>
            <a id="navbarTitle" href='https://github.com/brobb27/vschool'>Theme Context</a>
            <div id="navbarLinks">
                <a className="navbarLink" href='https://github.com/brobb27/vschool'>HOME</a>
                <a className="navbarLink" href='https://github.com/brobb27/vschool'>ABOUT</a>
                <a className="navbarLink" href='https://github.com/brobb27/vschool'>CONTACT</a>
            </div>
        </div>
    )
}

export default Navbar