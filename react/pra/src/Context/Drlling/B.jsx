import React from 'react'
import C from './C'
import D from './D'

function B({name,setname}) {
  return (
    <div>
       <h1>Hello B component</h1>
       <h1>B:-{name}</h1>
    <button onClick={()=>setname("Hello")}>Change name</button>

    <C  name={name} setname={setname}/>
    
    </div>
  )
}

export default B
