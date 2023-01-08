
import React from 'react'
import { useState,useEffect } from 'react'

function Counter() {  

  const [count,setCount]=useState(0);


  useEffect (()=>{
    console.log("mounting..")
    return()=>{
      console.log("Unmoting")
    }
  },[])
  
  return (
    <div>
      <button onClick={()=>{setCount(count+1)}} >count</button>
        <h1 >Counter:{count}</h1>
    </div>
  )
}

export default Counter