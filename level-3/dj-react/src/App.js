import React from 'react'
import Main from './components/Main'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            color: ['white', 'white', 'white', 'white']
        }
    }

    render() {
        return (
            <Main />
        )
    }
}

export default App