import React from 'react'
import Profile from './components/Profile';
import Contact from './components/Contact'
import About from './components/About'
import './App.css'
//npm i react-router-dom
import {BrowserRouter as Router} from 'react-router-dom'


function App() {
  return (
    <div className="App">

      <button>Profile</button>
      <button>Contact</button>
      <button>About</button>

      <h2>Welcome to React router Home page</h2>
      <Profile></Profile>
      <Contact></Contact>
      <About></About>

    </div>
  );
}

export default App;

