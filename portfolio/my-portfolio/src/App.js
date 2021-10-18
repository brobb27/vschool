import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import ContactFooter from './components/ContactFooter'

function App() {
  return (
    <div id="app">
      <Navbar />
      <Header />
      <AboutMe />
      <Projects />
      <ContactFooter />
    </div>
  );
}

export default App;
