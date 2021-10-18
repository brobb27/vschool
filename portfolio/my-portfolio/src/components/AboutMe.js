import React, { useState } from 'react'
import profilePhoto from '../images/profilePhoto.png'

function AboutMe() {
    // state handler
    const [detailed, setDetailed] = useState(false)

    // toggle button
    function toggle() {
        setDetailed(prevDetail => !prevDetail)
    }
    return (
        <div id='aboutMe'>
            <div>
                <img id='profileImg' src={profilePhoto} alt='Profile'/>
                <div>
                    <h2>About Me</h2>
                    {/* conditional on what the user wants */}
                    {detailed ? 
                        <p>Found my passion for web development while finishing my Bachelor's Degree in Business Management at Utah Valley University. I decided to make the jump into programming after I graduated and attended V School. I love the problem-solving and the learning that accompanies software development and I am happy I found a career that I'll never stop learning new things. The web development skills I have acquired include, but are not limited to: HTML {`&`} CSS, JavaScript, React, JSON, ES6, AJAX/HTTP, Node.js, REST API, Express, Mongoose, MongoDB, Git {`&`} Github. In my free time, I like spending time with my wife and playing pickleball.</p> 
                    : 
                        <p>Self-motivated full stack web developer. Passionate about creative problem solving, writing clean maintainable code, and developing useful, beautiful web applications. Resourceful, observant, and adaptable throughout the software development process. Also skilled in organization, communication and teamwork.</p>
                    }
                    <button onClick={toggle}>{detailed ? 'Less Details' : 'More Details'}</button>
                </div>
            </div>
        </div>
    )
}

export default AboutMe