import React, { useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

function Haeder() {
    const redirect = useNavigate()
    useEffect(()=>{
        if(!localStorage.getItem("userid")){
            redirect("/userlogin")
        }
    })

    const logout =()=>{
        localStorage.removeItem("userid")
        localStorage.removeItem("username")
        console.log("log-Out");
        redirect("/userlogin")
        alert("Log-Out Successfully")
        
    }
    return (
        <div>

            <header id="header" className="header d-flex align-items-center fixed-top">
                <div className="header-container container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
                    <NavLink to="/" className="logo d-flex align-items-center me-auto me-xl-0">
                        {/* Uncomment the line below if you also wish to use an image logo */}
                        {/* <img src="assets/img/logo.webp" alt=""> */}
                        <h1 className="sitename">Tour</h1>
                    </NavLink>
                    <nav id="navmenu" className="navmenu">
                        <ul>
                            <li><NavLink to="/" className="active">Home</NavLink></li>
                            <li><NavLink to="/about" >About</NavLink></li>
                            <li><NavLink to="/destinations">Destinations</NavLink></li>
                            <li><NavLink to="/tours">Tours</NavLink></li>
                            <li><NavLink to="/gallery">Gallery</NavLink></li>
                            <li><NavLink to="/blog">Blog</NavLink></li>
                            <li className="dropdown"><a href="#"><span>Details Page</span> <i className="bi bi-chevron-down toggle-dropdown" /></a>
                                <ul>
                                    <li><NavLink to="/des-destination">Destination Details</NavLink></li>
                                    <li><NavLink to="/tour-details">Tour Details</NavLink></li>
                                    <li><NavLink to="/booking">Booking</NavLink></li>
                                    <li><NavLink to="/testimonials">Testimonials</NavLink></li>
                                    <li><NavLink to="/faq">Frequently Asked Questions</NavLink></li>
                                    <li><NavLink to="/blog-details">Blog Details</NavLink></li>
                                    <li><NavLink to="/terms">Terms</NavLink></li>
                                    <li><NavLink to="/privacy">Privacy</NavLink></li>
                                    
                                </ul>
                            </li>
                            {/* <li className="dropdown"><a href="#"><span>Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown" /></a>
                                <ul>
                                    <li><a href="#">Dropdown 1</a></li>
                                    <li className="dropdown"><a href="#"><span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown" /></a>
                                        <ul>
                                            <li><a href="#">Deep Dropdown 1</a></li>
                                            <li><a href="#">Deep Dropdown 2</a></li>
                                            <li><a href="#">Deep Dropdown 3</a></li>
                                            <li><a href="#">Deep Dropdown 4</a></li>
                                            <li><a href="#">Deep Dropdown 5</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Dropdown 2</a></li>
                                    <li><a href="#">Dropdown 3</a></li>
                                    <li><a href="#">Dropdown 4</a></li>
                                </ul>
                            </li> */}
                            <li><NavLink to="/contact">Contact</NavLink></li>
                            {(()=>{
                                if(localStorage.getItem("userid")){
                                    return(
                                        <li><Link to="/userdashbord">Hello ,{localStorage.getItem("username")}</Link></li>
                                    )
                                }
                            })()}
                            <li><NavLink onClick={logout} >log out</NavLink></li>
                        </ul>
                        <i className="mobile-nav-toggle d-xl-none bi bi-list" />
                    </nav>
                    {/* <NavLink className="btn-getstarted"to="/destinations">Get Started</NavLink> */}
                </div>
            </header>

        </div>
    )
}

export default Haeder
