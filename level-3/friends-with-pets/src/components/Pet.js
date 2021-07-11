import React from 'react'

function Pet(props) {
    return (
        <div>
        <ul>
            <li>Name: {props.name}</li>
            <li>Breed: {props.breed}</li>
        </ul>
        </div>
    )
}

export default Pet