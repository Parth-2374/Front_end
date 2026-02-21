import React from 'react'
import D from './D'

function C({name,setname}) {
  return (
    <div>
       <h1>Hello C component</h1>
       <h1>C:-{name}</h1>
       <button onClick={()=>setname("Xyz")}>Change Name C</button>

       <D  name={name} setname={setname}/>
    </div>
  )
}

export default C
