import React from 'react'
import axios from 'axios'
import SavedMeme from './SavedMeme'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      meme: {
        topText: '',
        topColor: '#ffffff',
        bottomText: '',
        bottomColor: '#ffffff',
        img: '',
        id: '',
        isEditing: false
      },
      loading: false,
      memeList: []
    }

    this.getImg = this.getImg.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.saveMeme = this.saveMeme.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  // Retreives a random image from the API
  getImg(e) {
    e.preventDefault();

    let randomNum = Math.floor(Math.random() * 100)

    axios.get('https://api.imgflip.com/get_memes')
    .then(res => {
        this.setState(prevState => {
          return {
            meme: {
              ...prevState.meme,
              img: res.data.data.memes[randomNum].url,
              id: res.data.data.memes[randomNum].id
            }
          }
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
      this.setState(prevState => {
        return {
          loading: false,
          meme: {
            ...prevState.meme,
            img: res.data.data.memes[randomNum].url,
            id: res.data.data.memes[randomNum].id
          }
        }
    })
   }
  )
    .catch(err => console.log(err))
  }

  // Handles the user input and changes state to display their text
  handleChange(event) {
    const {name, value} = event.target
    this.setState(prevState => {
      return {
        meme: {
          ...prevState.meme,
          [name]: value
        }
      }
    })

  }

  // Allows the user to save the image to the list of saved memes
  saveMeme(e) {
    e.preventDefault();

    this.setState(prevState => {
      const updatedList = [...prevState.memeList, this.state.meme]
      return {
        meme: {
          topText: '',
          topColor: '#ffffff',
          bottomText: '',
          bottomColor: '#ffffff',
          img: '',
          id: ''
        },
        memeList: updatedList
      }
    })

    this.getImg(e)
  }

  // Delete method to remove the meme from the saved list
  handleDelete(id) {
    this.setState(prevState => {
      return {
        memeList: prevState.memeList.filter(item => item.id !== id)
      }
    })
  }
  

  render() {
    const topTextcolor = { color: this.state.meme.topColor }
    const bottomTextColor = { color: this.state.meme.bottomColor }
    const memeComponents = this.state.memeList.map(memeObject => 
      <SavedMeme 
        key={memeObject.id} 
        meme={memeObject} 
        delete={ this.handleDelete }
      />
      )
    
    if (this.state.loading === false) {
      return(
        <div>
          <div id='navBar'>
            <h1 id='title'>The Meme <br></br> Machine 2.0</h1>
          </div>
          <div id='creationContainer'>
            <div id='memeContainer'>
              <img src={this.state.meme.img} alt='Meme'></img>
              <h2 id="topText" style={topTextcolor}>
                {this.state.meme.topText}{'\u00A0'}
              </h2>
              <h2 id="bottomText" style={bottomTextColor}>
                {this.state.meme.bottomText}{'\u00A0'}
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
                    value={this.state.meme.topText}
                    maxLength='32'
                    placeholder='Top Text'
                    onChange={this.handleChange}
                  />
                </label>
                <label className='colorInput'>Top Color {' '}
                  <input 
                    type='color'
                    name='topColor'
                    value={this.state.meme.topColor}
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
                    value={this.state.meme.bottomText}
                    maxLength='32'
                    placeholder='Bottom Text'
                    onChange={this.handleChange}
                  />
                </label>
                <label className='colorInput'>Bottom Color {' '}
                  <input 
                    type='color'
                    name='bottomColor'
                    value={this.state.meme.bottomColor}
                    onChange={this.handleChange}
                  />
                </label>
              </div>
              <div>
                <button className='button' onClick={this.saveMeme}>Save Meme</button>
              </div>
            </form>
          </div>

          <div id='savedListContainer'>
              <h1>Saved Memes</h1>
              <ul id='savedList'>
                {memeComponents}
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
                    value={this.state.meme.topText}
                    maxLength='45'
                    placeholder='Top Text'
                    onChange={this.handleChange}
                  />
                </label>
                <label className='colorInput'>Top Color {' '}
                  <input 
                    type='color'
                    name='topColor'
                    value={this.state.meme.topColor}
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
                    value={this.state.meme.bottomText}
                    maxLength='45'
                    placeholder='Bottom Text'
                    onChange={this.handleChange}
                  />
                </label>
                <label className='colorInput'>Bottom Color {' '}
                  <input 
                    type='color'
                    name='bottomColor'
                    value={this.state.meme.bottomColor}
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