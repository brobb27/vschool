import React from 'react'

class Box extends React.Component {
    render() {
        return (
            <div style={{backgroundColor: this.props.item}}></div>
        )
    }
}

export default Box