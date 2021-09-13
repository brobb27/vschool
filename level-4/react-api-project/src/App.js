import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home';
import Navbar from './components/Navbar';
import DetailPage from './components/DetailPage';
import Favorites from './components/Favorites';


function App() {
  return (
    <div id='main'>
      <Navbar />
      
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/detail/:venueId'>
          <DetailPage />
        </Route>
        <Route path='/favorites'>
          <Favorites />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
