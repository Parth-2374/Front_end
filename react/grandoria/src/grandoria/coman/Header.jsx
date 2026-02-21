import React, { useEffect } from 'react'
import { Link } from 'react-router'
import { NavLink, useNavigate } from 'react-router'


function Header() {
    const redirect =useNavigate()
    useEffect (()=>{
        if (!localStorage.getItem("userid")) {
            redirect("/userlogin")
        }
    })
    const logout = () => {
        localStorage.removeItem("userid")
        localStorage.removeItem("username")
        redirect("/userlogin")
        console.log("Log Out Successfully")
    }
  return (
    <div>
      
          <header id="header" className="header sticky-top">
              <div className="topbar d-flex align-items-center dark-background">
                  <div className="container d-flex justify-content-center justify-content-md-between">
                      <div className="contact-info d-flex align-items-center">
                          <i className="bi bi-envelope d-flex align-items-center"><a href="mailto:contact@example.com">contact@example.com</a></i>
                          <i className="bi bi-phone d-flex align-items-center ms-4"><span>+1 5589 55488 55</span></i>
                      </div>
                      <div className="social-links d-none d-md-flex align-items-center">
                          <a href="#" className="twitter"><i className="bi bi-twitter-x" /></a>
                          <a href="#" className="facebook"><i className="bi bi-facebook" /></a>
                          <a href="#" className="instagram"><i className="bi bi-instagram" /></a>
                          <a href="#" className="linkedin"><i className="bi bi-linkedin" /></a>
                      </div>
                  </div>
              </div>{/* End Top Bar */}
              <div className="branding d-flex align-items-cente">
                  <div className="container position-relative d-flex align-items-center justify-content-between">
                      <NavLink to='/' className="logo d-flex align-items-center">
                          {/* Uncomment the line below if you also wish to use an image logo */}
                          {/* <img src="assets/img/logo.webp" alt=""> */}
                          <h1 className="sitename">Grandoria</h1>
                      </NavLink>
                      <nav id="navmenu" className="navmenu">
                          <ul>
                              <li><NavLink to="/" >Home</NavLink></li>
                              <li><NavLink to="/about">About</NavLink></li>
                              <li><NavLink to='/rooms'>Rooms</NavLink></li>
                              <li><NavLink to='/amenities' >Amenities</NavLink></li>
                              <li><NavLink to="/loction">Location</NavLink></li>
                              <li className="dropdown"><a href="#"><span>Pages</span> <i className="bi bi-chevron-down toggle-dropdown" /></a>
                                  <ul>
                                      <li><NavLink to="/room-details">Room Details</NavLink></li>
                                      <li><NavLink to="/restaurant">Restaurant</NavLink></li>
                                      <li><NavLink to="/offers" >Offers</NavLink></li>
                                      <li><NavLink to="/events">Events</NavLink></li>
                                      <li><NavLink to="/gallery">Gallery</NavLink></li>
                                      <li><NavLink to="/booking">Booking</NavLink></li>
                                      <li><NavLink to="/terms">Terms Page</NavLink></li>
                                      <li><NavLink to="/privacy">Privacy Page</NavLink></li>
                                      <li><NavLink to="/starter-page">Starter Page</NavLink></li>
                                  </ul>
                              </li>
                              <li><NavLink to="/contact">Contact</NavLink></li>
                              
                              {(() => {
                                    if (localStorage.getItem("userid")) {
                                        return (
                                            <li><Link to="/userdetails">{localStorage.getItem("username")}</Link></li>
                                        )
                                    }
                                })()}
                                {(() => {
                                    if (localStorage.getItem("userid")) {
                                        return (
                                            <li className='text-white ' onClick={logout} ><Link>Log Out</Link></li>
                                        )
                                    }
                                })()}
                          </ul>
                          <i className="mobile-nav-toggle d-xl-none bi bi-list" />
                      </nav>
                  </div>
              </div>
          </header>


    </div>
  )
}

export default Header
