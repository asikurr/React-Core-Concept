import React from 'react';
import logo from './logo.svg';
import './App.css';
import UseApi from '../src/components/UseApi.jsx'
import MovieCounter from '../src/components/MovieCounter.jsx'

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <p>I am react person</p>
       <MovieCounter/>
       <UseApi/>

      
      </header> 
    </div>
  );
}




export default App;
