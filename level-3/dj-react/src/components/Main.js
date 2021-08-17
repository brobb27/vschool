import React, { useState } from 'react'
import Box from './Box'


function Main() {
    const [colors, changeColors] = useState(['black', 'black', 'black', 'black'])

    // If the first box isn't white, changes all boxes to white. Else changes all to black.
    function handleSmoll() {
        changeColors(prevColors => {
            if (prevColors[0] !== 'white') {
                return (
                    ['white', 'white', 'white', 'white']
                )
            } else {
                return (
                    ['black', 'black', 'black', 'black']
                )
            }
        })
    }

    // Changes the top two boxes to purple
    function handleParty() {
        changeColors(prevColors => ['purple', 'purple', prevColors[2], prevColors[3]])
    }

    // Changes bottom left box blue
    function handleProOne() {
        changeColors(prevColors => {
            return (
                [prevColors[0], prevColors[1], 'blue', prevColors[3]]
            )
        })
    }

    // Changes bottom right box blue
    function handleProTwo() {
        changeColors(prevColors => {
            return (
                [prevColors[0], prevColors[1], prevColors[2], 'blue']
            )
        })
    }

    // Change top left and bottom right aqua
    function handleBigOne() {
        changeColors(prevColors => {
            return (
                ['aqua', prevColors[1], prevColors[2], 'aqua']
            )
        })
    }

    // Change bottom left and top right to forest green
    function handleBigTwo() {
        changeColors(prevColors => {
            return (
                [prevColors[0], 'forestGreen', 'forestGreen', prevColors[3]]
            )
        })
    }

    // Swaps those colors around
    function handleBigThree() {
        changeColors(prevColors => {
            return (
                [prevColors[2], prevColors[3], prevColors[0], prevColors[1]]
            )
        })
    }

    // Pushes those colors to the right
    function handleBigFour() {
        changeColors(prevColors => {
            return (
                [prevColors[3], prevColors[0], prevColors[1], prevColors[2]]
            )
        })
    }


    // Maps through color state array
    const boxComponents = colors.map(backColor => <Box item={backColor} />)

    return (
        <div>
                <div id='boxes'>
                    {boxComponents}
                </div>
                <div id='buttons'>
                    <button onClick={handleSmoll}>Smoll DJ</button>
                    <button onClick={handleParty}>Party DJ</button>
                    <button onClick={handleProOne}>Pro One DJ</button>
                    <button onClick={handleProTwo}>Pro Two DJ</button>
                    <button onClick={handleBigOne}>Big One DJ</button>
                    <button onClick={handleBigTwo}>Big Two DJ</button>
                    <button onClick={handleBigThree}>Big Three DJ</button>
                    <button onClick={handleBigFour}>Big Four DJ</button>
                </div>
            </div>
    )
}

export default Main


// class Main extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             color: ['black', 'black', 'black', 'black']
//         }
//         this.handleSmoll = this.handleSmoll.bind(this)
//     }

//     // Change boxes white if the first box isn't white else change all black
//     handleSmoll() {
//         this.setState(prevColors => {
//             if (prevColors.color[0] !== 'white') {
//                 return {
//                     color: ['white', 'white', 'white', 'white']
//                 }
//             } else {
//                 return {
//                     color: ['black', 'black', 'black', 'black']
//                 }
//                 }
//         })
//     }

//     // Change the top two boxes purple
//     handleParty() {
//         this.setState(prevColors => {
//             return {
//                 color: ['purple', 'purple', prevColors.color[2], prevColors.color[3]]
//             }
//         })
//     }

//     // Change bottom left blue
//     handleProOne() {
//         this.setState(prevColors => {
//             return {
//                 color: [prevColors.color[0], prevColors.color[1], 'blue', prevColors.color[3]]
//             }
//         })
//     }

//     // Change bottom right blue
//     handleProTwo() {
//         this.setState(prevColors => {
//             return {
//                 color: [prevColors.color[0], prevColors.color[1], prevColors.color[2], 'blue']
//             }
//         })
//     }

//     // Change top left and bottom right aqua
//     handleBigOne() {
//         this.setState(prevColors => {
//             return {
//                 color: ['aqua', prevColors.color[1], prevColors.color[2], 'aqua']
//             }
//         })
//     }

//     // Change bottom left and top right to forest green
//     handleBigTwo() {
//         this.setState(prevColors => {
//             return {
//                 color: [prevColors.color[0], 'forestGreen', 'forestGreen', prevColors.color[3]]
//             }
//         })
//     }

//     // Swap those colors around
//     handleBigThree() {
//         this.setState(prevColors => {
//             return {
//                 color: [prevColors.color[2], prevColors.color[3], prevColors.color[0], prevColors.color[1]]
//             }
//         })
//     }

//     // Adds a block lol
//     handleBigFour() {
//         this.setState(prevColors => {
//             return {
//                 color: [prevColors.color[0], prevColors.color[1], prevColors.color[2], prevColors.color[3], prevColors.color[1], prevColors.color[0]]
//             }
//         })
//     }

//     render() {
//         const boxComponents = this.state.color.map(backColor => <Box item={backColor}/>)

//         return (
//             <div>
//                 <div id='boxes'>
//                     {boxComponents}
//                 </div>
//                 <div id='buttons'>
//                     <button onClick={this.handleSmoll}>Smoll DJ</button>
//                     <button onClick={() => this.handleParty()}>Party DJ</button>
//                     <button onClick={() => this.handleProOne()}>Pro One DJ</button>
//                     <button onClick={() => this.handleProTwo()}>Pro Two DJ</button>
//                     <button onClick={() => this.handleBigOne()}>Big One DJ</button>
//                     <button onClick={() => this.handleBigTwo()}>Big Two DJ</button>
//                     <button onClick={() => this.handleBigThree()}>Big Three DJ</button>
//                     <button onClick={() => this.handleBigFour()}>Big Four DJ</button>
//                 </div>
//             </div>
//         )
//     }

// }

