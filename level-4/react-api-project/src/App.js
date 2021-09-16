import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import DetailPage from './components/DetailPage';
import FavoritesList from './components/FavoritesList';


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
          <FavoritesList />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
