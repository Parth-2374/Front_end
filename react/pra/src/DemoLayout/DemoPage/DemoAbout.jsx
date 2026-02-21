import React from 'react'
import DemoAbouthe from '../DemoComan/DemoAbouthe'
import DemoFooter from '../DemoComan/DemoFooter'
import { Link } from 'react-router'
import About1 from '../../Layout/Page/About1'

function DemoAbout() {
  return (
  <div>
    <DemoAbouthe />
    <h1 className='p-5 bg-info'>Aboutpage</h1>
    <Link to="/about/about1" ></Link>
    <Link to="/about/about2" ></Link>
   
    <DemoFooter />
  </div>
  )
}

export default DemoAbout
