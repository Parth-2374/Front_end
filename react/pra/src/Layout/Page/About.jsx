import React from 'react'
import Header from '../Coman/Header'
import Footer from '../Coman/Footer'
import { Link } from 'react-router'



function About() {
 
  return (
    <div>
      <Header />
      <div className="p-2 mb-2 bg-dark bg-gradient rounded-5">
      <Link to="/about/about1">
     <h4 className='text-white ms-5 '> About 1</h4>
      </Link>
      </div>
           
      <h1 className='bg-info p-5'>About Page</h1>
      <Footer />
     
    </div>
  )
}

export default About
