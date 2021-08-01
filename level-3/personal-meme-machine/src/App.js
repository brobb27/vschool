import React from 'react'
import axios from 'axios'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      topText: '',
      topColor: '#000000',
      bottomText: '',
      bottomColor: '#000000',
      img: '',
      id: '',
      loading: false,
      memeList: [],
    }

    this.getImg = this.getImg.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  // Retreives a random image from the API
  getImg(e) {
    e.preventDefault();

    let randomNum = Math.floor(Math.random() * 100)

    axios.get('https://api.imgflip.com/get_memes')
    .then(res => {
        this.setState({
        img: res.data.data.memes[randomNum].url,
        id: res.data.data.memes[randomNum].id
      })
     }
    )
    .catch(err => console.log(err))
  }

  componentDidMount() {
    this.setState({
      loading: true
    })

    let randomNum = Math.floor(Math.random() * 100)

    axios.get('https://api.imgflip.com/get_memes')
    .then(res => {
        this.setState({
        loading: false,
        img: res.data.data.memes[randomNum].url,
        id: res.data.data.memes[randomNum].id
      })
     }
    )
    .catch(err => console.log(err))
  }

  // Handles the user input and changes state to display their text
  handleChange(event) {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })

  }


  render() {
    const topTextcolor = { color: this.state.topColor }
    const bottomTextColor = { color: this.state.bottomColor }
    
    if (this.state.loading === false) {
      return(
        <div>
          <div id='navBar'>
            <h1 id='title'>The Meme <br></br> Machine 2.0</h1>
          </div>
          <div id='creationContainer'>
            <div id='memeContainer'>
              <img src={this.state.img} alt='Meme'></img>
              <h2 id="topText" style={topTextcolor}>
                {this.state.topText}{'\u00A0'}
              </h2>
              <h2 id="bottomText" style={bottomTextColor}>
                {this.state.bottomText}{'\u00A0'}
              </h2>
              <button className='button' onClick={this.getImg}>
                Change Image
              </button>
            </div>

            <form id='memeForm'>
              <div>
                <label>
                  <input 
                    type='text'
                    name='topText'
                    className='inputBox'
                    value={this.state.topText}
                    maxLength='45'
                    placeholder='Top Text'
                    onChange={this.handleChange}
                  />
                </label>
                <label className='colorInput'>Top Color {' '}
                  <input 
                    type='color'
                    name='topColor'
                    value={this.state.topColor}
                    onChange={this.handleChange}
                  />
                </label>
              </div>

              <div>
                <label>
                  <input 
                    type='text'
                    name='bottomText'
                    className='inputBox'
                    value={this.state.bottomText}
                    maxLength='45'
                    placeholder='Bottom Text'
                    onChange={this.handleChange}
                  />
                </label>
                <label className='colorInput'>Bottom Color {' '}
                  <input 
                    type='color'
                    name='bottomColor'
                    value={this.state.bottomColor}
                    onChange={this.handleChange}
                  />
                </label>
              </div>

              <button className='button'>Save Meme</button>

            </form>
          </div>

          <div id='savedList'>
              <h1>Saved Memes</h1>
              <ul>

              </ul>
            </div>
        </div>
      )
    } else {
        return(
          <div>
          <div id='navBar'>
            <h1 id='title'>The Meme <br></br> Machine 2.0</h1>
          </div>
          <div id='creationContainer'>
            <div id='loadingMemeContainer'>
              <h1>Loading Image...</h1>
            </div>

            <form id='memeForm'>
              <div>
                <label>
                  <input 
                    type='text'
                    name='topText'
                    className='inputBox'
                    value={this.state.topText}
                    maxLength='45'
                    placeholder='Top Text'
                    onChange={this.handleChange}
                  />
                </label>
                <label className='colorInput'>Top Color {' '}
                  <input 
                    type='color'
                    name='topColor'
                    value={this.state.topColor}
                    onChange={this.handleChange}
                  />
                </label>
              </div>

              <div>
                <label>
                  <input 
                    type='text'
                    name='bottomText'
                    className='inputBox'
                    value={this.state.bottomText}
                    maxLength='45'
                    placeholder='Bottom Text'
                    onChange={this.handleChange}
                  />
                </label>
                <label className='colorInput'>Bottom Color {' '}
                  <input 
                    type='color'
                    name='bottomColor'
                    value={this.state.bottomColor}
                    onChange={this.handleChange}
                  />
                </label>
              </div>

              <button className='button'>Save Meme</button>

            </form>
          </div>

          <div id='savedList'>
              <h1>Saved Memes</h1>
              <ul>

              </ul>
            </div>
        </div>
        )
    }
  }
}


export default App