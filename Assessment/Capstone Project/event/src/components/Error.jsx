import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div>
      <h1 className='text-center mt-4'>404 Error page Not Found</h1>
      <Link to="/"><div className='text-center border'>Home</div></Link>
    </div>
  )
}

export default Error
