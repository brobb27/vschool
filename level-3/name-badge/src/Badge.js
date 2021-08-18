import React, { useState } from 'react'
// import randomcolor from 'randomcolor'
import axios from 'axios'

function Badge(props) {
    const [randomColor, setColor] = useState(getColor)

    function getColor() {
        axios.get(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
        .then(res => setColor(() => {
            return (
                res.data.colors[0].hex
            )
        }))
        .catch(err => console.log(err))
    }

    return (
        <div id='userBadgeContainer'>
            <div id='badgeHeader' style={{backgroundColor: `#${randomColor}`}}>
                <h2>Badge:</h2>
            </div>
            <div id='userBadgeInfo'>
                <p>Name: {props.info.firstName} {props.info.lastName}</p>
                <p>Phone: {props.info.phone}</p>
                <p>Place of Birth: {props.info.birthPlace}</p>
                <p>Favorite Food: {props.info.favFood}</p>
                <p>Email: {props.info.email}</p>
            </div>
            <p id='userAboutYou'>{props.info.aboutYou}</p>
        </div>
    )
}

export default Badge

// Old react code

// class Badge extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             randomColor: ''
//         }
//     }

//     // componentDidMount() {
//     //     const newColor = randomcolor()
//     //     console.log(newColor)
//     //     this.setState({
//     //         randomColor: newColor
//     //     })
//     // }

//     // when the component mounts it sets the state of random color to the new retrieved color
//     componentDidMount() {
//         axios.get(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
//             .then(res => this.setState({
//                 randomColor: res.data.colors[0].hex
//             }))
//             .catch(err => console.log(err))
//     }

//     render() {
//         return (
//             <div id='userBadgeContainer'>
//                 <div id='badgeHeader' style={{backgroundColor: `#${this.state.randomColor}`}}>
//                     <h2>Badge:</h2>
//                 </div>
//                 <div id='userBadgeInfo'>
//                     <p>Name: {this.props.info.firstName} {this.props.info.lastName}</p>
//                     <p>Phone: {this.props.info.phone}</p>
//                     <p>Place of Birth: {this.props.info.birthPlace}</p>
//                     <p>Favorite Food: {this.props.info.favFood}</p>
//                     <p>Email: {this.props.info.email}</p>
//                 </div>
//                 <p id='userAboutYou'>{this.props.info.aboutYou}</p>
//             </div>
//         )
//     }
// }

// export default Badge