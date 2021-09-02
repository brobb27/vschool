import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home';
import About from './About';
import Services from './Services';

function App() {
  return (
    <div>
      <Navbar />

      <Switch>
        <Route exact path='/'><Home /></Route>
        <Route path='/about'><About /></Route>
        <Route path='/services'><Services /></Route>
      </Switch>
    </div>
  );
}

export default App;
