import React, { useContext } from 'react'
import { Data } from './ChaildA'


function ChaildB() {
  const{form,setform}=useContext(Data)
  return (
    <div>
      <h1>Hello A Component</h1>
      <h1>B:-{form.name}</h1>


    </div>
  )
}

export default ChaildB
