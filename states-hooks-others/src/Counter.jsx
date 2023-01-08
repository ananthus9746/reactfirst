import React from 'react'

function Counter(props) { 

    const {data,count}=props

  return (
    <div>
       <h5>Counter from Counter and detstured jsx: {count} =={data}</h5> 
    </div>
  )
}

export default Counter