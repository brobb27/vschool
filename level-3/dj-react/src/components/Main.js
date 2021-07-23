import React from 'react'
import Box from './Box'

class Main extends React.Component {
    constructor() {
        super()
        this.state = {
            color: ['black', 'black', 'black', 'black']
        }
        this.handleSmoll = this.handleSmoll.bind(this)
    }

    // Change boxes white if the first box isn't white else change all black
    handleSmoll() {
        this.setState(prevState => {
            if (prevState.color[0] !== 'white') {
                return {
                    color: ['white', 'white', 'white', 'white']
                }
            } else {
                return {
                    color: ['black', 'black', 'black', 'black']
                }
                }
        })
    }

    // Change the top two boxes purple
    handleParty() {
        this.setState(prevState => {
            return {
                color: ['purple', 'purple', prevState.color[2], prevState.color[3]]
            }
        })
    }

    // Change bottom left blue
    handleProOne() {
        this.setState(prevState => {
            return {
                color: [prevState.color[0], prevState.color[1], 'blue', prevState.color[3]]
            }
        })
    }

    // Change bottom right blue
    handleProTwo() {
        this.setState(prevState => {
            return {
                color: [prevState.color[0], prevState.color[1], prevState.color[2], 'blue']
            }
        })
    }

    // Change top left and bottom right aqua
    handleBigOne() {
        this.setState(prevState => {
            return {
                color: ['aqua', prevState.color[1], prevState.color[2], 'aqua']
            }
        })
    }

    // Change bottom left and top right to forest green
    handleBigTwo() {
        this.setState(prevState => {
            return {
                color: [prevState.color[0], 'forestGreen', 'forestGreen', prevState.color[3]]
            }
        })
    }

    // Swap those colors around
    handleBigThree() {
        this.setState(prevState => {
            return {
                color: [prevState.color[2], prevState.color[3], prevState.color[0], prevState.color[1]]
            }
        })
    }

    // Adds a block lol
    handleBigFour() {
        this.setState(prevState => {
            return {
                color: [prevState.color[0], prevState.color[1], prevState.color[2], prevState.color[3], prevState.color[1], prevState.color[0]]
            }
        })
    }

    render() {
        const boxComponents = this.state.color.map(backColor => <Box item={backColor}/>)

        return (
            <div>
                <div id='boxes'>
                    {boxComponents}
                </div>
                <div id='buttons'>
                    <button onClick={this.handleSmoll}>Smoll DJ</button>
                    <button onClick={() => this.handleParty()}>Party DJ</button>
                    <button onClick={() => this.handleProOne()}>Pro One DJ</button>
                    <button onClick={() => this.handleProTwo()}>Pro Two DJ</button>
                    <button onClick={() => this.handleBigOne()}>Big One DJ</button>
                    <button onClick={() => this.handleBigTwo()}>Big Two DJ</button>
                    <button onClick={() => this.handleBigThree()}>Big Three DJ</button>
                    <button onClick={() => this.handleBigFour()}>Big Four DJ</button>
                </div>
            </div>
        )
    }

}

export default Main
