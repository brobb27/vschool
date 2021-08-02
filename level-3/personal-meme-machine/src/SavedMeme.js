import React from 'react'

class SavedMeme extends React.Component {
    constructor() {
        super()
        this.state = {
            stuff: ''
        }
    }

    render() {
        return (
            <div className='savedMemeItem'>
              <img src={this.props.meme.img} alt='Meme'></img>
              <h2 id="topText" style={{ color: this.props.meme.topColor}}>
                {this.props.meme.topText}{'\u00A0'}
              </h2>
              <h2 id="bottomText" style={{ color: this.props.meme.bottomColor }}>
                {this.props.meme.bottomText}{'\u00A0'}
              </h2>
              <div id='savedMemeButtons'>
                <button className='button'>Edit</button>
                <button className='button' onClick={() => this.props.delete(this.props.meme.id)}>Delete</button>
              </div>
            </div>
        )
    }
}

export default SavedMeme