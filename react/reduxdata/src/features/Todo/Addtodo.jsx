import React, { useState }  from 'react'
import { useDispatch } from 'react-redux'
import { AddData } from './todoSlice'

function Addtodo() {
    

    const [add,setadd]=useState("")
    const dispatch = useDispatch()

    const getdata = (e)=>{
        e.preventDefault() 

        dispatch(AddData(add))
    }
  return (
    <div>
      <form action="">
        <input type="text" value={add} onChange={(e)=>{setadd(e.target.value)}}  placeholder='Enter Your Name'/>
        <input type="submit" onClick={getdata} />
      </form>
    </div>
  )
}

export default Addtodo
