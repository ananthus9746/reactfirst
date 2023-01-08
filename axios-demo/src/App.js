import './App.css';
import {useState} from  'react'
import axios from 'axios'
import React from 'react';


function App() {

 const [state,setState]=useState([])

  return (
    <div className="App">
      <h1>Axios</h1>
      <p>Get some sample json data from server</p>
      <button onClick={()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts').then((response)=>{
          setState(response.data)
          console.log("response...",response.data)
        })
      }} >Click here to get Data</button>


      {
          state.map((obj,index)=>{
            return(
              <div>
            <h1>{index+1},{obj.title}</h1>
            <p>{obj.body}</p>
            </div>
            )
          })
      }
    </div>
  );
}

export default App;
