import React from 'react'
import vacationData from './vacationData'

function Card(props) {
    vacationData.forEach(function(vacation) {
        if (vacation.price > 1000) {
            return vacation.price = '$$$'
        }
        else if (vacation.price <= 1000 && vacation.price > 500) {
            return vacation.price = '$$'
        } else if(vacation.price < 500) {
            return vacation.price = '$'
        }
    })

    return (
        <div className="cardo">
            <img src={props.destination.imgUrl} className="locationImg" alt="Desination"></img>
            <h3>{props.destination.place}</h3>
            <h4>Price {props.destination.price}</h4>
            <p>Time of year: {props.destination.timeToGo}</p>
        </div>
    )
}

export default Card