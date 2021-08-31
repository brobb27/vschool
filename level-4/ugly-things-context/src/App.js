import React from 'react'
import Header from './components/Header'
import Form from './components/Form'
import UglyList from './components/UglyList'
import Footer from './components/Footer'

function App() {
  return (
    <div id='app'>
      <Header />
      <Form descriptionId='firstForm' />
      <UglyList />
      <Footer />
    </div>
  );
}

export default App;
