import React from 'react'

class SavedMeme extends React.Component {
    constructor() {
        super()
        this.state = {
            isEditing: false,
            newTopText: '',
            newBottomText: ''
        }
        
        this.handleEdit = this.handleEdit.bind(this)
        this.handleSaveChanges = this.handleSaveChanges.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    
    // Sets isEditing state to true to allow the user to edit
    handleEdit() {
        this.setState({
            isEditing: true
        })
    }

    // Saves users changes
    handleSaveChanges(e) {
        e.preventDefault()
        this.setState({
                isEditing: false,
        })
    }

    // Handles users new text
    handleChange(e) {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    render() {
        if (this.state.isEditing === false) {
            return (
                <div className='savedMemeItem'>
                    <img src={this.props.meme.img} alt='Meme'></img>
                    {/* top text conditional */}
                    {this.state.newTopText === '' ? 
                        (<h2 id="topText" style={{ color: this.props.meme.topColor}}>
                            {this.props.meme.topText}{'\u00A0'}
                        </h2>) : 
                        (<h2 id="topText" style={{ color: this.props.meme.topColor}}>
                            {this.state.newTopText}{'\u00A0'}
                        </h2>)
                    }
                    {/* bottom text conditional */}
                    {this.state.newBottomText === '' ?
                        (<h2 id="bottomText" style={{ color: this.props.meme.bottomColor }}>
                            {this.props.meme.bottomText}{'\u00A0'}
                        </h2>) :
                        (<h2 id="bottomText" style={{ color: this.props.meme.bottomColor }}>
                            {this.state.newBottomText}{'\u00A0'}
                        </h2>)
                    }
                    <div id='savedMemeButtons'>
                        <button className='button' onClick={this.handleEdit}>Edit</button>
                        <button className='button' onClick={() => this.props.delete(this.props.meme.id)}>Delete</button>
                    </div>
                </div>
            )
        } else {
            return (
                <div className='savedMemeItem'>
                    <img src={this.props.meme.img} alt='Meme'></img>
                    {/* top text conditional */}
                    {this.state.newTopText === '' ? 
                        (<h2 id="topText" style={{ color: this.props.meme.topColor}}>
                            {this.props.meme.topText}{'\u00A0'}
                        </h2>) : 
                        (<h2 id="topText" style={{ color: this.props.meme.topColor}}>
                            {this.state.newTopText}{'\u00A0'}
                        </h2>)
                    }
                    {/* bottom text conditional */}
                    {this.state.newBottomText === '' ?
                        (<h2 id="bottomText" style={{ color: this.props.meme.bottomColor }}>
                            {this.props.meme.bottomText}{'\u00A0'}
                        </h2>) :
                        (<h2 id="bottomText" style={{ color: this.props.meme.bottomColor }}>
                            {this.state.newBottomText}{'\u00A0'}
                        </h2>)
                    }
                    <form id='saveForm'>
                        <input 
                            type='text'
                            value={this.state.newTopText}
                            placeholder='New Top Text'
                            name='newTopText'
                            className='inputBox'
                            onChange= {this.handleChange}
                        />
                        <input 
                            type='text'
                            value={this.state.newBottomText}
                            placeholder='New Bottom Text'
                            name='newBottomText'
                            className='inputBox'
                            onChange={this.handleChange}
                        />
                        <button className='button' onClick={this.handleSaveChanges}>
                            Save Changes
                        </button>
                    </form>
                </div>
            )
            }
        }
}

export default SavedMeme