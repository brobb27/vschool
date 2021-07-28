import React from 'react'

class IdCard extends React.Component {
    constructor() {
        super()
        this.state = {
            something: ''
        }
    }

    render() {
        return (
            <div className='idCard'>
                <img className='idImage' src={this.props.info.image} alt='Person of Interest'/>
                <p className='idName'>{this.props.info.name}</p>
            </div>
        )
    }
}

export default IdCard