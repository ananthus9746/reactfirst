
import "./App.css";
import React, {useState } from "react";

import Contact from './components/Contact';
import Service from './components/Service';
import About from './components/About';
import Home from "./components/Home";

// WTHOUT USING ROUTER HOOK// and it is not extactly routing


function App() {

  const [state,setState]=useState('')

  let components

  if(state==='contact'){
    components= <Contact></Contact>
  }
  else if(state==='about'){
        components=  <About></About>

  }
  else if(state==='service'){
    components=  <Service></Service>

  }
  else{
    components=  <Home></Home>

  }
 

  return (

    <div className="home">

      <button onClick={()=>{
      setState('home')
     }}>Home</button> 

     <button onClick={()=>{
      setState('contact')
     }}>Conact</button> 

     <button onClick={()=>{
      setState('about')
     }}>About</button> 
     
     <button onClick={()=>{
      setState('service')
     }}>Service</button> 

     {components}
     
    </div>
  );
}

export default App;
