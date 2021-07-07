import React from 'react'

function Pets(props) {
    return (
        <div>
        <ul>
            <li>Name: {props.name}</li>
            <li>Breed: {props.breed}</li>
        </ul>
        </div>
    )
}

export default Pets