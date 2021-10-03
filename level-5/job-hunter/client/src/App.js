import React from "react"
import BountyList from "./components/JobList";
import Header from './components/Header'
import Form from './components/Form'

function App() {
  return (
    <div id="app">
      <Header />
      <div id='contentWrap'>
        <div id='topSection'>
          <div id='titleSection'>
            <h1>It's Time To Get The New Job You've Always Wanted!</h1>
            <p>Unfortunately, we aren't here to give it to you... But we are here to help you keep track of all the jobs on your raidar and the pros and cons of each one so you can make the best decision! Simply fill out the form below for each job you want!</p>
          </div>
          <Form class='mainForm' isEditing={false}/>
        </div>
        <BountyList />
      </div>
      <h1 id='footer'>Footer</h1>
    </div>
  );
}

export default App;
