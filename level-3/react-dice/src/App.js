import React from 'react'
import Dicebox from './Dicebox'

class App extends React.Component {
    constructor () {
        super()
        this.state = {
            name: 'app'
        }
    }

    render() {
        return (
            <div>
                <h1 id='header'>Roll 'em</h1>
                <Dicebox />
            </div>
        )
    }

}

export default App