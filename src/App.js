import React from 'react';
import './App.css';
import Home from './components/react-router/home/Home';
// import CountryApi from './components/rest-country-api/CountryApi';
// import User from './components/practice-project/user/User';
// import UseApi from '../src/components/UseApi.jsx'
// import MovieCounter from '../src/components/MovieCounter.jsx'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NotFound from './components/react-router/notfound/NotFound';
import FriendDetails from './components/react-router/friendDetails/FriendDetails';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
        <Switch>
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
   




       {/* <User/>
       <CountryApi/> 
       <UseApi/>  */}

       </header>

    </div>
  );
}




export default App;
