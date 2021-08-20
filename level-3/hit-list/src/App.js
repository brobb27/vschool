import React, { useState, useEffect } from 'react'
import axios from 'axios'
import IdCard from './components/IdCard'
import Header from './components/Header'

function App() {
  const [, setLoading] = useState('false')
  const [personList, setPersonList] = useState([{name: 'Tony', image: 'data:image/jpeg;base64,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'}])


  function getHitList() {
    axios.get('https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json')
      .then(res => {
        setLoading(() => 'false')
        setPersonList((prevList) => [...prevList, ...res.data])
      })
      .catch(err => console.log(err))
      
  }

  useEffect(() => {
    setLoading(() => 'true')

    getHitList()

  }, [])

  const IdComponents = personList.map(person => <IdCard key={person.name} info={person} />)

  return (
    <div>
      <Header />
      <div id='main'>
        {IdComponents}
      </div>
    </div>
  )
}

export default App;

// class App extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       isloading: false,
//       persons: []
//     }
//   }

//   componentDidMount() {
//     this.setState({
//       isLoading: true
//     })
//     axios.get('https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json')
//       .then(response => this.setState({
//         isloading: false,
//         persons: response.data
//       }))
//       .catch(error => console.log(error))
//   }

//   render() {
//     const IdComponents = this.state.persons.map(person => <IdCard key={person.name} info={person} />)
//     return(
//       <div>
//         <Header />
//         <div id='main'>
//           {IdComponents}
//         </div>
//       </div>
//     )
//   }
// }

// export default App;
