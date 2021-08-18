import React, { useState } from 'react'
import Badge from './Badge'

function App() {
  const [badge, setBadge] = useState(
    {
      firstName: '',
      lastName: '',
      email: '',
      birthPlace: '',
      phone: '',
      favFood: '',
      aboutYou: '',
      randomColor: ''
    }
  )
  const [badgeList, setBadgeList] = useState([])
  
  // Handles any change made on the badge to reflect the user input
  function handleChange(e) {
    const {name, value} = e.target

    setBadge(prevBadge => {
      return {
        ...prevBadge,
        [name]: value
      }
    })
  }

  // Handles form submition and adds the badge to the list
  function handleSubmit(e) {
    e.preventDefault()
    
    setBadgeList(prevBadgeList => {
      return (
        [...prevBadgeList, badge]
      )
    })

    setBadge({
      firstName: '',
      lastName: '',
      email: '',
      birthPlace: '',
      phone: '',
      favFood: '',
      aboutYou: '',
      randomColor: ''
    })

  }

  const badgeComponents = badgeList.map(badge => <Badge key={badge.phone} info={badge} />)

  return (
    <div id='main'>
      <div id='badgeForm'>
        <form onSubmit={handleSubmit}>
          <div id='basicInfo'>
            <input
              type='text'
              name='firstName'
              value={badge.firstName}
              placeholder='First Name'
              minLength='3'
              required
              onChange={handleChange}
            />

            <input
              type='text'
              name='lastName'
              value={badge.lastName}
              placeholder='Last Name'
              minLength='3'
              required
              onChange={handleChange}
            />

            <input
              type='email'
              name='email'
              value={badge.email}
              placeholder='Email'
              minLength='3'
              required
              onChange={handleChange}
            />

            <input
              type='text'
              name='birthPlace'
              value={badge.birthPlace}
              placeholder='Place of Birth'
              minLength='3'
              required
              onChange={handleChange}
            />

            <input
              type='tel'
              name='phone'
              pattern="[0-9]{10}"
              value={badge.phone}
              placeholder='Phone'
              minLength='10'
              required
              onChange={handleChange}
            />

            <input
              type='text'
              name='favFood'
              value={badge.favFood}
              placeholder='Favorite Food'
              minLength='3'
              required
              onChange={handleChange}
            />
          </div>

          <textarea
              id="aboutYou"
              type='textArea'
              name='aboutYou'
              value={badge.aboutYou}
              placeholder='Tell us about yourself'
              minLength='3'
              required
              onChange={handleChange}
          />
          <br />

          <button>Submit</button>
          
        </form>
      </div>
      {badgeComponents}
    </div>
  )

}

export default App



// Class based component

// class App extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       badge: {
//         firstName: '',
//         lastName: '',
//         email: '',
//         birthPlace: '',
//         phone: '',
//         favFood: '',
//         aboutYou: '',
//         randomColor: ''
//       },
//       badgeList: []
//     }
//     this.handleChange = this.handleChange.bind(this)
//     this.handleSubmit = this.handleSubmit.bind(this)
//   }

//   handleChange(event) {
//     const {name, value} = event.target
//     this.setState(prevState => {
//       return {
//         badge: {
//           ...prevState.badge,
//           [name]: value
//         }
//       }
//     })
//   }

//   handleSubmit(event) {
//     event.preventDefault()
    
//     this.setState(prevState => {
//       const updatedList = [...prevState.badgeList, this.state.badge]

//       return {
//         badge: {
//           firstName: '',
//           lastName: '',
//           email: '',
//           birthPlace: '',
//           phone: '',
//           favFood: '',
//           aboutYou: '',
//           randomColor: ''
//         },
//         badgeList: updatedList,
//       }
//     })
// }


//   render() {
//     const badgeComponents = this.state.badgeList.map(badge => <Badge key={badge.phone} info={badge} />)
//     return (
//       <div id='main'>
//         <div id='badgeForm'>
//           <form onSubmit={this.handleSubmit}>
//             <div id='basicInfo'>
//               <input
//                 type='text'
//                 name='firstName'
//                 value={this.state.badge.firstName}
//                 placeholder='First Name'
//                 minLength='3'
//                 required
//                 onChange={this.handleChange}
//               />

//               <input
//                 type='text'
//                 name='lastName'
//                 value={this.state.badge.lastName}
//                 placeholder='Last Name'
//                 minLength='3'
//                 required
//                 onChange={this.handleChange}
//               />

//               <input
//                 type='email'
//                 name='email'
//                 value={this.state.badge.email}
//                 placeholder='Email'
//                 minLength='3'
//                 required
//                 onChange={this.handleChange}
//               />

//               <input
//                 type='text'
//                 name='birthPlace'
//                 value={this.state.badge.birthPlace}
//                 placeholder='Place of Birth'
//                 minLength='3'
//                 required
//                 onChange={this.handleChange}
//               />

//               <input
//                 type='tel'
//                 name='phone'
//                 pattern="[0-9]{10}"
//                 value={this.state.badge.phone}
//                 placeholder='Phone'
//                 minLength='10'
//                 required
//                 onChange={this.handleChange}
//               />

//               <input
//                 type='text'
//                 name='favFood'
//                 value={this.state.badge.favFood}
//                 placeholder='Favorite Food'
//                 minLength='3'
//                 required
//                 onChange={this.handleChange}
//               />
//             </div>

//             <textarea
//                 id="aboutYou"
//                 type='textArea'
//                 name='aboutYou'
//                 value={this.state.badge.aboutYou}
//                 placeholder='Tell us about yourself'
//                 minLength='3'
//                 required
//                 onChange={this.handleChange}
//             />
//             <br />

//             <button>Submit</button>
            
//           </form>
//         </div>
//           {badgeComponents}
//       </div>
//     )
//   }

// }


// export default App;
