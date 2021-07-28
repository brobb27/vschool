import React from 'react'
import axios from 'axios'
import IdCard from './components/IdCard'
import Header from './components/Header'


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isloading: false,
      persons: []
    }
  }

  componentDidMount() {
    this.setState({
      isLoading: true
    })
    axios.get('https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json')
      .then(response => this.setState({
        isloading: false,
        persons: response.data
      }))
      .catch(error => console.log(error))
  }

  render() {
    const IdComponents = this.state.persons.map(person => <IdCard key={person.name} info={person} />)
    return(
      <div>
        <Header />
        <div id='main'>
          {IdComponents}
        </div>
      </div>
    )
  }
}

export default App;
