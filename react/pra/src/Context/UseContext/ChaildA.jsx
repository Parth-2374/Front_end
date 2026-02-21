import React, { createContext, useState } from 'react'
import ChaildB from './ChaildB'

export const Data=createContext()

function ChaildA() {
    const [name,setname]=useState("Abc")
    const[form,setform]=useState({
        name:"Abc",
        count:0
    })
  return (
    <div>
      <h1>Hello A Component</h1>
      <h1>Name:-{name}</h1>

      <Data.Provider value={{name,setname,form,setform}} >
        <ChaildB />
        </Data.Provider>

    </div>
  )
}

export default ChaildA
