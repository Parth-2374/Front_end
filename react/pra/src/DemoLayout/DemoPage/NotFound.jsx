import React from 'react'
import { useNavigate } from 'react-router'

function NotFound() {
    const re =useNavigate()
     
    const getdata=()=>{
        re("/")
    }
  return (
    <div>
      <h4 className='p-5 bg-danger' >404Not Found</h4>
      <button onClick={getdata}>Back to Home page</button>
    </div>
  )
}

export default NotFound
