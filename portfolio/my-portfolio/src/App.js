import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'

function App() {
  return (
    <div id="app">
      <Navbar />
      <Header />
      <AboutMe />
      <Projects />
      <h1>Projects</h1>
      <h1>Contact Info/Resume</h1>
      <h1>Footer</h1>
    </div>
  );
}

export default App;
