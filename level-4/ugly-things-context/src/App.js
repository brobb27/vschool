import React from 'react'
import Header from './components/Header'
import Form from './components/Form'
import UglyList from './components/UglyList'

function App(props) {
  return (
    <div id='app'>
      <Header />
      <Form descriptionId='firstForm' />
      <UglyList />
    </div>
  );
}

export default App;
