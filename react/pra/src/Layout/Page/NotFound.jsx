import React from 'react'
import { Link, useNavigate } from 'react-router'

function NotFound() {
    const re =useNavigate()

        const getdata =()=>{
            re("/")
        }
  return (
    <div>
       <h1 className='bg-danger text-light p-5'>Hello this 404 Not Found Pages</h1>
       <Link to="/" >return To Home Page</Link>     
       <button onClick={getdata}>Home Page</button>  
    </div>
  )
}

export default NotFound
