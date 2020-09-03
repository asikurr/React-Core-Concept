import React from 'react';
import './App.css';
import Home from './components/react-router/home/Home';
import CountryApi from './components/rest-country-api/CountryApi';
import User from './components/practice-project/user/User';
import UseApi from '../src/components/UseApi.jsx'
import MovieCounter from '../src/components/MovieCounter.jsx'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NotFound from './components/react-router/notfound/NotFound';
import FriendDetails from './components/react-router/friendDetails/FriendDetails';
import NavBar from './components/NavBar/NavBar';
import StateIndex from './components/statePractice/StateIndex';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
      <NavBar/>
      
        <Switch>
        <Route path='/state'>
             <StateIndex/>
          </Route>
        <Route path='/country'>
             <CountryApi/>
          </Route>
          <Route path='/user'>
             <User/>
          </Route>
          <Route path='/useapi'>
             <UseApi/>
          </Route>
          <Route path='/movicounter'>
            <MovieCounter/>
          </Route>
          
          <Route path='/home'>
             <Home/>
          </Route>
          <Route path='/friends/:friendId'>
             <FriendDetails/>
          </Route>
          <Route exact path='/'>
             <Home/>
          </Route>
          <Route path='*'>
             <NotFound/>
          </Route>
        </Switch>
      </Router>
  

       </header>

    </div>
  );
}




export default App;
