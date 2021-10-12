import React from "react"
import { FaLinkedin, FaGithub } from 'react-icons/fa'

function Footer() {
    return (
        <div id="footer">
        <div id="icons">
                <div>
                    <a href="https://www.linkedin.com/in/blair-robbins/"><FaLinkedin/></a>
                </div>
                <div><a href="https://github.com/brobb27/vschool"><FaGithub /></a></div>
        </div>
        <p>Copyright © B {'&'} R Development 2021</p>
    </div>
    )
}

export default Footer