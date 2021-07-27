import React from 'react'

class Badge extends React.Component {
    constructor() {
        super()
        this.state = {
            something: ''
        }
    }

    render() {
        return (
            <div id='userBadgeContainer'>
                <div id='badgeHeader'>
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