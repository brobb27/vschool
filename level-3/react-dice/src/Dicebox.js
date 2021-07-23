import React from 'react'

class Dicebox extends React.Component {
    constructor() {
        super()
        function random() {
            return Math.floor(Math.random() * 6 + 1)
        }
        this.state = {
            num1: random(),
            num2: random(),
            num3: random(),
            num4: random(),
            num5: random(),
        }
        this.handleRoll = this.handleRoll.bind(this)
    }

    handleRoll() {
        this.setState(() => {
            function random() {
                return Math.floor(Math.random() * 6 + 1)
            }
            return {
                num1: random(),
                num2: random(),
                num3: random(),
                num4: random(),
                num5: random()
            }
        })
    }

    render() {
        return(
            <div>
                <div id= 'diceBox'>
                    <div>
                        {this.state.num1}
                    </div>
                    <div>
                        {this.state.num2}
                    </div>
                    <div>
                        {this.state.num3}
                    </div>
                    <div>
                        {this.state.num4}
                    </div>
                    <div>
                        {this.state.num5}
                    </div>
                </div>
                <button id='rollButton' onClick={() => this.handleRoll()}>Roll</button>
            </div>

        )
    }
}

export default Dicebox