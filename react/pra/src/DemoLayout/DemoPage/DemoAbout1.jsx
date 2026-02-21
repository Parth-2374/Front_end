import React from 'react'
import DemoAbouthe from '../DemoComan/DemoAbouthe'
import DemoFooter from '../DemoComan/DemoFooter'

function DemoAbout1() {
  return (
    <div>
    <DemoAbouthe />
      <h1 className='p-5' style={{backgroundColor:"green", color:"white"}}>About 1 page</h1>
      <DemoFooter />
    </div>
  )
}

export default DemoAbout1
