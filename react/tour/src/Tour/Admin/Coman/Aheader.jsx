import React, { useEffect } from 'react'
import { Link, NavLink, redirect, useNavigate } from 'react-router-dom'

function Aheader() {
    const redirect = useNavigate()
    useEffect(() => {
        if (!localStorage.getItem("aid")) {
            redirect("/alogin")
        }
    })
    const logout = () => {
        localStorage.removeItem("aid")
        localStorage.removeItem("aname")
        console.log("logout ")
        alert("Log-Out Succefully")
        redirect("/alogin")

    }
    return (
        <div>
            <header id="header" className="header d-flex align-items-center fixed-top ">
                <div className="header-container container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
                    <NavLink to="/dashbord" className="logo d-flex align-items-center me-auto me-xl-0">
                        {/* Uncomment the line below if you also wish to use an image logo */}
                        {/* <img src="assets/img/logo.webp" alt=""> */}
                        <h1 className="sitename">Tour</h1>
                    </NavLink>
                    <nav id="navmenu" className="navmenu">
                        <ul>
                            {/* <li><NavLink to="/dashbord" className="active">Home</NavLink></li> */}
                            <li className="dropdown"><Link to="/dashbord"><span>Home</span> <i className="bi bi-chevron-down toggle-dropdown" /></Link>
                                <ul>
                                    {/* <li><NavLink to="/agallery">Mange Gallery </NavLink></li> */}
                                    <li><NavLink to="/addfeatured">Add Featured Destinations </NavLink></li>
                                    <li><NavLink to="/addfeaturedright">Add Featured Destinations right side </NavLink></li>
                                    <li><NavLink to="/addfeatutretours">Add Featured Tours </NavLink></li>
                                    {/* <li><NavLink to="/lastminutedeals">Add lastminutedeals </NavLink></li> */}
                                    {/* <li><NavLink to="/alltours">Add All Tours </NavLink></li> */}

                                </ul>
                            </li>
                            <li><NavLink to="/Aabout">About</NavLink></li>
                            <li className="dropdown"><Link to="/Adestinations"><span>Destinations</span> <i className="bi bi-chevron-down toggle-dropdown" /></Link>
                                <ul>
                                    <li><NavLink to="/Adestinations">Mange Destinations </NavLink></li>
                                    <li><NavLink to="/Adddestinations">Add Destinations </NavLink></li>

                                </ul>
                            </li>
                            <li className="dropdown"><Link to="/toursmange"><span>Tours</span> <i className="bi bi-chevron-down toggle-dropdown" /></Link>
                                <ul>
                                    <li><NavLink to="/toursmange">Mange Tours </NavLink></li>
                                    <li><NavLink to="/toursadd">Add Tours </NavLink></li>
                                    <li><NavLink to="/lastminutedeals">Add lastminutedeals </NavLink></li>
                                    <li><NavLink to="/alltours">Add All Tours </NavLink></li>

                                </ul>
                            </li>
                            <li className="dropdown"><Link to="/agallery"><span>Gallery</span> <i className="bi bi-chevron-down toggle-dropdown" /></Link>
                                <ul>
                                    <li><NavLink to="/agallery">Mange Gallery </NavLink></li>
                                    <li><NavLink to="/addgallery">Add Gallery </NavLink></li>
                                    {/* <li><NavLink to="/lastminutedeals">Add lastminutedeals </NavLink></li> */}
                                    {/* <li><NavLink to="/alltours">Add All Tours </NavLink></li> */}

                                </ul>
                            </li>

                            {/* <li><NavLink href="gallery.html">Gallery</NavLink></li> */}
                            <li><a href="blog.html">Blog</a></li>
                            <li className="dropdown"><a href="#"><span> Pages</span> <i className="bi bi-chevron-down toggle-dropdown" /></a>
                                <ul>
                                <li className="dropdown"><Link to="/adel-detail"><span>Destination Details</span> <i className="bi bi-chevron-down toggle-dropdown" /></Link>
                                <ul>
                                    <li><NavLink to="/adel-detail">Mange Destination Details </NavLink></li>
                                    <li><NavLink to="/addmustvisitattractions">Add Must - Visit Attractions </NavLink></li>
                                    <li><NavLink to="/addavailabletour">Add Available Tours & Experiences </NavLink></li>
                                    {/* <li><NavLink to="/alltours">Add All Tours </NavLink></li> */}

                                </ul>
                            </li>
                                    {/* <li><NavLink to="/adel-detail">Destination Details</NavLink></li> */}
                                    <li><a href="tour-details.html">Tour Details</a></li>
                                    <li><a href="booking.html">Booking</a></li>
                                    <li><a href="testimonials">Testimonials</a></li>
                                    <li><a href="faq.html">Frequently Asked Questions</a></li>
                                    <li><a href="blog-details.html">Blog Details</a></li>
                                    <li><a href="terms.html">Terms</a></li>
                                    <li><a href="privacy.html">Privacy</a></li>
                                    <li><a href="404.html">404</a></li>
                                </ul>
                            </li>

                            <li><a href="contact.html">Contact</a></li>
                            {(() => {
                                        if(localStorage.getItem("aid")){
                                            return(
                                                <li><Link to="/admindashbord">Hello ,{localStorage.getItem("aname")}</Link></li>
                                            )
                                        }
                            })()}
                             <li><Link onClick={logout} >log out</Link></li>
                        </ul>
                        <i className="mobile-nav-toggle d-xl-none bi bi-list" />
                    </nav>
                    {/* <Link onClick={logout} >log out</Link> */}
                </div>
            </header>

        </div>
    )
}

export default Aheader
