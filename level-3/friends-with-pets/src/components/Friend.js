import React from 'react'
import Pet from './Pet'


function Friend(props) {
    let petArr = props.friend.pets
    const petsInfo = petArr.map(pet => <Pet name={pet.name} breed={pet.breed} key={pet.name}/>)
    return (
        <div className="friendItem">
            <h3>Name: {props.friend.name}</h3>
            <h3>Age: {props.friend.age}</h3>
            <h3>Pets:</h3>
            <div className="petList">
                {petsInfo}
            </div>
        </div>
    )
}

export default Friend