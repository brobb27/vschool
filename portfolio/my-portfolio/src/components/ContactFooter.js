import React from 'react'
import { FaLinkedin, FaGithub, } from 'react-icons/fa'
import { HiDocumentText } from 'react-icons/hi'
import { MdEmail } from 'react-icons/md'

function ContactFooter() {
    return (
        <div id='contact'>
            <div>
                <h2>Get In Touch</h2>
                <p>Are you looking for, or recruiting a developer with my skillset? Look no further. I have attached my resume and contact information below. I look forward to hearing from you!</p>
            </div>
            <div id="info">
                <div id="icons">
                    <div>
                        <div>
                            <a href='mailto:blairrobbins27@gmail.com' rel="noopener noreferrer" target='_blank'><MdEmail /></a>
                        </div>
                        <p>Email</p>
                    </div>
                    <div>
                        <div>
                            <a href='https://www.linkedin.com/in/blair-robbins/' rel="noopener noreferrer" target='_blank'><FaLinkedin/></a>
                        </div>
                        <p>LinkedIn</p>
                    </div>
                    <div>
                        <div>
                            <a href='https://docs.google.com/document/d/1S9q27JRSO6ZgCpAot2Nv0WvwuexK7kFewzWbpHBKKAQ/edit?usp=sharing' rel="noopener noreferrer" target='_blank'><HiDocumentText /></a>
                        </div>
                        <p>Resume</p>
                    </div>
                    <div>
                        <div>
                            <a href='https://github.com/brobb27/vschool' rel="noopener noreferrer" target='_blank'><FaGithub /></a>
                        </div>
                        <p>Github</p>
                    </div>
                </div>
            </div>
            <p>Copyright © B {'&'} R Development 2021</p>
        </div>
    )
}

export default ContactFooter