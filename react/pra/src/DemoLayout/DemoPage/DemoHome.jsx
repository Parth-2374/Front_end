import React from 'react'
import DemoHeader from '../DemoComan/DemoHeader'
import DemoFooter from '../DemoComan/DemoFooter'

function DemoHome() {
  return (
    <div>
      <DemoHeader />
      <h1 className='p-5 bg-success'>Home Page</h1>
      <DemoFooter />
    </div>
  )
}

export default DemoHome
