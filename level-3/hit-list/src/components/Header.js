import React from 'react'

class Header extends React.Component {
    constructor() {
        super()
        this.state = {
            something: ''
        }
    }

    render() {
        return (
            <div id='header'>
                <h1>The Hit List</h1>
            </div>
        )
    }
}

export default Header