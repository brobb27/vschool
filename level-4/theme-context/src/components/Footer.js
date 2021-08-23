import React, { useContext } from 'react'
import { FaGithub, FaFacebook, FaTwitter } from 'react-icons/fa'
import { ThemeContext } from '../ThemeContext'

function Footer() {
    const context = useContext(ThemeContext)
    return (
        <div id="footer" className={`${context.theme}Theme`}>
            <div id="icons">
					<div>
						<a href="https://twitter.com"><FaTwitter/></a>
					</div>
					<div><a href="https://m.facebook.com"><FaFacebook /></a></div>
					<div><a href="https://github.com"><FaGithub /></a></div>
			</div>
            <p>Copyright © B {'&'} R Development 2021</p>
        </div>
    )
}

export default Footer