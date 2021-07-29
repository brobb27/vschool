import React from 'react'
// import randomcolor from 'randomcolor'
import axios from 'axios'

class Badge extends React.Component {
    constructor() {
        super()
        this.state = {
            randomColor: ''
        }
    }

    // componentDidMount() {
    //     const newColor = randomcolor()
    //     console.log(newColor)
    //     this.setState({
    //         randomColor: newColor
    //     })
    // }

    componentDidMount() {
        axios.get(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
            .then(res => this.setState({
                randomColor: res.data.colors[0].hex
            }))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div id='userBadgeContainer'>
                <div id='badgeHeader' style={{backgroundColor: `#${this.state.randomColor}`}}>
                    <h2>Badge:</h2>
                </div>
                <div id='userBadgeInfo'>
                    <p>Name: {this.props.info.firstName} {this.props.info.lastName}</p>
                    <p>Phone: {this.props.info.phone}</p>
                    <p>Place of Birth: {this.props.info.birthPlace}</p>
                    <p>Favorite Food: {this.props.info.favFood}</p>
                    <p>Email: {this.props.info.email}</p>
                </div>
                <p id='userAboutYou'>{this.props.info.aboutYou}</p>
            </div>
        )
    }
}

export default Badge