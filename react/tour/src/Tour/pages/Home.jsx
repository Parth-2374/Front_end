import React, { useEffect, useState } from 'react'
import Haeder from '../Coman/Haeder'
import Footer from '../Coman/Footer'
import PureCounter from "@srexi/purecounterjs";
import axios from 'axios';


function Home() {
    useEffect(() => {
        new PureCounter();
      }, []);
    
      const [desti,setdesti]=useState()
      useEffect(()=>{
        getdata()
        getdataright()
        getdatatours()
      },[])

      const getdata = async()=>{
    
        try {
            const res = await axios.get("http://localhost:3000/FeaturedDestinations1")
            console.log(res.data);
            setdesti(res.data)
            
            
        } catch (error) {
            console.log("Api Not Found",error);
            
        }
      }
      const [destiright,setdestiright]=useState()
     
      const getdataright = async()=>{
    
        try {
            const res = await axios.get("http://localhost:3000/FeaturedDestinations2")
            console.log(res.data);
            setdestiright(res.data)
            
            
        } catch (error) {
            console.log("Api Not Found",error);
            
        }
      }
      const [tours,settours]=useState()
     
      const getdatatours = async()=>{
    
        try {
            const res = await axios.get("http://localhost:3000/FeaturedToursHome")
            console.log(res.data);
            settours(res.data)
            
            
        } catch (error) {
            console.log("Api Not Found",error);
            
        }
      }
    return (
        <div>
            <Haeder />
            <main className="main">
                {/* Travel Hero Section */}
                <section id="travel-hero" className="travel-hero section dark-background">
                    <div className="hero-background">
                        <video autoPlay muted loop>
                            <source src="assets/img/travel/video-2.mp4" type="video/mp4" />
                        </video>
                        <div className="hero-overlay" />
                    </div>
                    <div className="container position-relative">
                        <div className="row align-items-center">
                            <div className="col-lg-7">
                                <div className="hero-text" data-aos="fade-up" data-aos-delay={100}>
                                    <h1 className="hero-title">Discover Your Perfect Journey</h1>
                                    <p className="hero-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                                    <div className="hero-buttons">
                                        <a href="#" className="btn btn-primary me-3">Start Exploring</a>
                                        <a href="#" className="btn btn-outline">Browse Tours</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="booking-form-wrapper" data-aos="fade-left" data-aos-delay={200}>
                                    <div className="booking-form">
                                        <h3 className="form-title">Plan Your Adventure</h3>
                                        <form action className>
                                            <div className="form-group mb-3">
                                                <label htmlFor="destination">Destination</label>
                                                <select name="destination" id="destination" className="form-select" required>
                                                    <option value>Choose your destination</option>
                                                    <option value="oceania">India</option>
                                                    <option value="europe">Europe</option>
                                                    <option value="asia">Asia</option>
                                                    <option value="america">America</option>
                                                    <option value="africa">Africa</option>
                                                    <option value="oceania">Oceania</option>
                                                </select>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group mb-3">
                                                        <label htmlFor="checkin">Departure Date</label>
                                                        <input type="date" name="checkin" id="checkin" className="form-control" required />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group mb-3">
                                                        <label htmlFor="checkout">Return Date</label>
                                                        <input type="date" name="checkout" id="checkout" className="form-control" required />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group mb-3">
                                                        <label htmlFor="adults">Adults</label>
                                                        <select name="adults" id="adults" className="form-select" required>
                                                            <option value={1}>1 Adult</option>
                                                            <option value={2}>2 Adults</option>
                                                            <option value={3}>3 Adults</option>
                                                            <option value={4}>4 Adults</option>
                                                            <option value={5}>5 Adults</option>
                                                            <option value={6}>6 Adults</option>
                                                            <option value={7}>7 Adults</option>
                                                            <option value={8}>8 Adults</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group mb-3">
                                                        <label htmlFor="children">Children</label>
                                                        <select name="children" id="children" className="form-select">
                                                            <option value={0}>No Child</option>
                                                            <option value={1}>1 Child</option>
                                                            <option value={2}>2 Child</option>
                                                            <option value={3}>3 Child</option>
                                                            <option value={4}>4 Child</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group mb-3">
                                                <label htmlFor="tour-type">Tour Type</label>
                                                <select name="tour_type" id="tour-type" className="form-select" required>
                                                    <option value>Select tour type</option>
                                                    <option value="adventure">Adventure</option>
                                                    <option value="cultural">Cultural</option>
                                                    <option value="relaxation">Relaxation</option>
                                                    <option value="family">Family</option>
                                                    <option value="luxury">Luxury</option>
                                                </select>
                                            </div>
                                            <button type="submit" className="btn btn-primary w-100">Find Your Perfect Trip</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>{/* /Travel Hero Section */}
                {/* Why Us Section */}
                <section id="why-us" className="why-us section">
                    <div className="container" data-aos="fade-up" data-aos-delay={100}>
                        {/* About Us Content */}
                        <div className="row align-items-center mb-5">
                            <div className="col-lg-6" data-aos="fade-right" data-aos-delay={200}>
                                <div className="content">
                                    <h3>Explore the World with Confidence</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    <div className="stats-row">
                                        <div className="stat-item">
                                            <span data-purecounter-start={0} data-purecounter-end={1200} data-purecounter-duration={2} className="purecounter">0</span>
                                            <div className="stat-label">Happy Travelers</div>
                                        </div>
                                        <div className="stat-item">
                                            <span data-purecounter-start={0} data-purecounter-end={85} data-purecounter-duration={2} className="purecounter">0</span>
                                            <div className="stat-label">Countries Covered</div>
                                        </div>
                                        <div className="stat-item">
                                            <span data-purecounter-start={0} data-purecounter-end={15} data-purecounter-duration={2} className="purecounter">0</span>
                                            <div className="stat-label">Years Experience</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6" data-aos="fade-left" data-aos-delay={300}>
                                <div className="about-image">
                                    <img src="assets/img/travel/showcase-8.webp" alt="Travel Experience" className="img-fluid rounded-4" />
                                    <div className="experience-badge">
                                        <div className="experience-number">15+</div>
                                        <div className="experience-text">Years of Excellence</div>
                                    </div>
                                </div>
                            </div>
                        </div>{/* End About Us Content */}
                        {/* Why Choose Us */}
                        <div className="why-choose-section">
                            <div className="row justify-content-center">
                                <div className="col-lg-8 text-center mb-5" data-aos="fade-up" data-aos-delay={100}>
                                    <h3>Why Choose Us for Your Next Adventure</h3>
                                    <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                                </div>
                            </div>
                            <div className="row g-4">
                                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={200}>
                                    <div className="feature-card">
                                        <div className="feature-icon">
                                            <i className="bi bi-people-fill" />
                                        </div>
                                        <h4>Local Experts</h4>
                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={250}>
                                    <div className="feature-card">
                                        <div className="feature-icon">
                                            <i className="bi bi-shield-check" />
                                        </div>
                                        <h4>Safe &amp; Secure</h4>
                                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={300}>
                                    <div className="feature-card">
                                        <div className="feature-icon">
                                            <i className="bi bi-cash" />
                                        </div>
                                        <h4>Best Prices</h4>
                                        <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet consectetur adipisci velit.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={350}>
                                    <div className="feature-card">
                                        <div className="feature-icon">
                                            <i className="bi bi-headset" />
                                        </div>
                                        <h4>24/7 Support</h4>
                                        <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam nisi.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={400}>
                                    <div className="feature-card">
                                        <div className="feature-icon">
                                            <i className="bi bi-geo-alt-fill" />
                                        </div>
                                        <h4>Global Destinations</h4>
                                        <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={450}>
                                    <div className="feature-card">
                                        <div className="feature-icon">
                                            <i className="bi bi-star-fill" />
                                        </div>
                                        <h4>Premium Experience</h4>
                                        <p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim.</p>
                                    </div>
                                </div>
                            </div>{/* End Features Grid */}
                        </div>{/* End Why Choose Us */}
                    </div>
                </section>{/* /Why Us Section */}
                {/* Featured Destinations Section */}
                <section id="featured-destinations" className="featured-destinations section">
                    {/* Section Title */}
                    <div className="container section-title" data-aos="fade-up">
                        <h2>Featured Destinations</h2>
                        <div><span>Check Our</span> <span className="description-title">Featured Destinations</span></div>
                    </div>{/* End Section Title */}
                    <div className="container" data-aos="fade-up" data-aos-delay={100}>
                        <div className="row">
                            <div className="col-lg-6" data-aos="zoom-in" data-aos-delay={200}>
                                {
                                    desti && desti.map((data,index)=>{
                                        return(
                                            <div className="featured-destination">
                                    <div className="destination-overlay">
                                        <img src={data.img} alt="Tropical Paradise" className="img-fluid" />
                                        <div className="destination-info">
                                            <span className="destination-tag">{data.tag} </span>
                                            <h3>{data.name}</h3>
                                            <p className="location"><i className="bi bi-geo-alt-fill" />{data.location}</p>
                                            <p className="description">{data.type}</p>
                                            <div className="destination-meta">
                                                <div className="tours-count">
                                                    <i className="bi bi-collection" />
                                                    <span>{data.Packages} Packages</span>
                                                </div>
                                                <div className="rating">
                                                    <i className="bi bi-star-fill" />
                                                    <span>{data.rating} ({data.chekrating})</span>
                                                </div>
                                            </div>
                                            <div className="price-info">
                                                <span className="starting-from">Starting from</span>
                                                <span className="amount">$ {data.price}</span>
                                            </div>
                                            <a href="destination-details.html" className="explore-btn">
                                                <span>Explore Now</span>
                                                <i className="bi bi-arrow-right" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                        )
                                    })
                                }
                                {/* <div className="featured-destination">
                                    <div className="destination-overlay">
                                        <img src="assets/img/travel/destination-3.webp" alt="Tropical Paradise" className="img-fluid" />
                                        <div className="destination-info">
                                            <span className="destination-tag">Popular Choice</span>
                                            <h3>Tropical Paradise</h3>
                                            <p className="location"><i className="bi bi-geo-alt-fill" /> Maldives</p>
                                            <p className="description">Pristine beaches, crystal-clear waters, and luxury overwater villas await in this tropical paradise destination.</p>
                                            <div className="destination-meta">
                                                <div className="tours-count">
                                                    <i className="bi bi-collection" />
                                                    <span>22 Packages</span>
                                                </div>
                                                <div className="rating">
                                                    <i className="bi bi-star-fill" />
                                                    <span>4.9 (412)</span>
                                                </div>
                                            </div>
                                            <div className="price-info">
                                                <span className="starting-from">Starting from</span>
                                                <span className="amount">$2,150</span>
                                            </div>
                                            <a href="destination-details.html" className="explore-btn">
                                                <span>Explore Now</span>
                                                <i className="bi bi-arrow-right" />
                                            </a>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                            <div className="col-lg-6">
                                <div className="row g-3">
                                    {
                                        destiright && destiright.map((data,index)=>{
                                            return(
                                                <div className="col-12" data-aos="fade-left" data-aos-delay={300}>
                                                <div className="compact-destination">
                                                    <div className="destination-image">
                                                        <img src={data.img} alt="Mountain Adventure" className="img-fluid" />
                                                        {/* <div className="badge-offer">Best Value</div> */}
                                                    </div>
                                                    <div className="destination-details">
                                                        <h4> {data.name} </h4>
                                                        <p className="location"><i className="bi bi-geo-alt" />  {data.name} </p>
                                                        <p className="brief"> {data.name} </p>
                                                        <div className="stats-row">
                                                            <span className="tour-count"><i className="bi bi-calendar-check" />  {data.tours}  Tours</span>
                                                            <span className="rating"><i className="bi bi-star-fill" />  {data.rating} </span>
                                                            <span className="price">from $ {data.price} </span>
                                                        </div>
                                                        <a href="destination-details.html" className="quick-link">View Details <i className="bi bi-chevron-right" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                            )
                                        })
                                    }
                                    {/* <div className="col-12" data-aos="fade-left" data-aos-delay={300}>
                                        <div className="compact-destination">
                                            <div className="destination-image">
                                                <img src="assets/img/travel/destination-7.webp" alt="Mountain Adventure" className="img-fluid" />
                                                <div className="badge-offer">Best Value</div>
                                            </div>
                                            <div className="destination-details">
                                                <h4>Mountain Adventure</h4>
                                                <p className="location"><i className="bi bi-geo-alt" /> Nepal</p>
                                                <p className="brief">Breathtaking Himalayan peaks and ancient Buddhist temples create an unforgettable spiritual journey.</p>
                                                <div className="stats-row">
                                                    <span className="tour-count"><i className="bi bi-calendar-check" /> 16 Tours</span>
                                                    <span className="rating"><i className="bi bi-star-fill" /> 4.8</span>
                                                    <span className="price">from $1,420</span>
                                                </div>
                                                <a href="destination-details.html" className="quick-link">View Details <i className="bi bi-chevron-right" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12" data-aos="fade-left" data-aos-delay={400}>
                                        <div className="compact-destination">
                                            <div className="destination-image">
                                                <img src="assets/img/travel/destination-11.webp" alt="Cultural Heritage" className="img-fluid" />
                                            </div>
                                            <div className="destination-details">
                                                <h4>Cultural Heritage</h4>
                                                <p className="location"><i className="bi bi-geo-alt" /> Peru</p>
                                                <p className="brief">Discover ancient civilizations, colorful markets, and archaeological wonders in the heart of South America.</p>
                                                <div className="stats-row">
                                                    <span className="tour-count"><i className="bi bi-calendar-check" /> 9 Expeditions</span>
                                                    <span className="rating"><i className="bi bi-star-fill" /> 4.7</span>
                                                    <span className="price">from $980</span>
                                                </div>
                                                <a href="destination-details.html" className="quick-link">View Details <i className="bi bi-chevron-right" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12" data-aos="fade-left" data-aos-delay={500}>
                                        <div className="compact-destination">
                                            <div className="destination-image">
                                                <img src="assets/img/travel/destination-16.webp" alt="Safari Experience" className="img-fluid" />
                                                <div className="badge-offer limited">Limited Spots</div>
                                            </div>
                                            <div className="destination-details">
                                                <h4>Safari Experience</h4>
                                                <p className="location"><i className="bi bi-geo-alt" /> Kenya</p>
                                                <p className="brief">Witness the Big Five and experience the great migration in Africa's most spectacular wildlife reserves.</p>
                                                <div className="stats-row">
                                                    <span className="tour-count"><i className="bi bi-calendar-check" /> 11 Safaris</span>
                                                    <span className="rating"><i className="bi bi-star-fill" /> 4.9</span>
                                                    <span className="price">from $2,750</span>
                                                </div>
                                                <a href="destination-details.html" className="quick-link">View Details <i className="bi bi-chevron-right" /></a>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>{/* /Featured Destinations Section */}
                {/* Featured Tours Section */}
                <section id="featured-tours" className="featured-tours section">
                    {/* Section Title */}
                    <div className="container section-title" data-aos="fade-up">
                        <h2>Featured Tours</h2>
                        <div><span>Check Our</span> <span className="description-title">Featured Tours</span></div>
                    </div>{/* End Section Title */}
                    <div className="container" data-aos="fade-up" data-aos-delay={100}>
                        <div className="row gy-4">
                            {
                                tours && tours.map((data,index)=>{
                                    return(
                                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={200}>
                                <div className="tour-card">
                                    <div className="tour-image">
                                        <img src={data.img} alt="Serene Beach Retreat" className="img-fluid" loading="lazy" />
                                        <div className="tour-badge">{data.tag}</div>
                                        <div className="tour-price">${data.price}</div>
                                    </div>
                                    <div className="tour-content">
                                        <h4>{data.name}</h4>
                                        <div className="tour-meta">
                                            <span className="duration"><i className="bi bi-clock" /> {data.days} Days</span>
                                            <span className="group-size"><i className="bi bi-people" /> Max {data.maxperson}</span>
                                        </div>
                                        <p>{data.type}</p>
                                        <div className="tour-highlights">
                                            <span>{data.tourhighlights1}</span>
                                            <span>{data.tourhighlights2}</span>
                                            <span>{data.tourhighlights3}</span>
                                        </div>
                                        <div className="tour-action">
                                            <a href="booking.html" className="btn-book">Book Now</a>
                                            <div className="tour-rating">
                                                <i className="bi bi-star-fill" />
                                                <i className="bi bi-star-fill" />
                                                <i className="bi bi-star-fill" />
                                                <i className="bi bi-star-fill" />
                                                <i className="bi bi-star-half" />
                                                <span>{data.rating} ({data.chekrating})</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                    )
                                })
                            }
                            {/* <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={200}>
                                <div className="tour-card">
                                    <div className="tour-image">
                                        <img src="assets/img/travel/tour-1.webp" alt="Serene Beach Retreat" className="img-fluid" loading="lazy" />
                                        <div className="tour-badge">Top Rated</div>
                                        <div className="tour-price">$2,150</div>
                                    </div>
                                    <div className="tour-content">
                                        <h4>Serene Beach Retreat</h4>
                                        <div className="tour-meta">
                                            <span className="duration"><i className="bi bi-clock" /> 8 Days</span>
                                            <span className="group-size"><i className="bi bi-people" /> Max 6</span>
                                        </div>
                                        <p>Mauris ipsum neque, cursus ac ipsum at, iaculis facilisis ligula. Suspendisse non sapien vel enim cursus semper.</p>
                                        <div className="tour-highlights">
                                            <span>Maldives</span>
                                            <span>Seychelles</span>
                                            <span>Bora Bora</span>
                                        </div>
                                        <div className="tour-action">
                                            <a href="booking.html" className="btn-book">Book Now</a>
                                            <div className="tour-rating">
                                                <i className="bi bi-star-fill" />
                                                <i className="bi bi-star-fill" />
                                                <i className="bi bi-star-fill" />
                                                <i className="bi bi-star-fill" />
                                                <i className="bi bi-star-half" />
                                                <span>4.8 (95)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={300}>
                                <div className="tour-card">
                                    <div className="tour-image">
                                        <img src="assets/img/travel/tour-2.webp" alt="Arctic Expedition" className="img-fluid" loading="lazy" />
                                        <div className="tour-badge limited">Only 3 Spots!</div>
                                        <div className="tour-price">$5,700</div>
                                    </div>
                                    <div className="tour-content">
                                        <h4>Arctic Wilderness Expedition</h4>
                                        <div className="tour-meta">
                                            <span className="duration"><i className="bi bi-clock" /> 10 Days</span>
                                            <span className="group-size"><i className="bi bi-people" /> Max 8</span>
                                        </div>
                                        <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec dictum non massa nec fermentum.</p>
                                        <div className="tour-highlights">
                                            <span>Greenland</span>
                                            <span>Iceland</span>
                                            <span>Norway</span>
                                        </div>
                                        <div className="tour-action">
                                            <a href="booking.html" className="btn-book">Book Now</a>
                                            <div className="tour-rating">
                                                <i className="bi bi-star-fill" />
                                                <i className="bi bi-star-fill" />
                                                <i className="bi bi-star-fill" />
                                                <i className="bi bi-star-fill" />
                                                <i className="bi bi-star" />
                                                <span>4.6 (55)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={400}>
                                <div className="tour-card">
                                    <div className="tour-image">
                                        <img src="assets/img/travel/tour-4.webp" alt="Desert Safari" className="img-fluid" loading="lazy" />
                                        <div className="tour-badge new">Newly Added</div>
                                        <div className="tour-price">$1,400</div>
                                    </div>
                                    <div className="tour-content">
                                        <h4>Sahara Desert Discovery</h4>
                                        <div className="tour-meta">
                                            <span className="duration"><i className="bi bi-clock" /> 5 Days</span>
                                            <span className="group-size"><i className="bi bi-people" /> Max 10</span>
                                        </div>
                                        <p>Pellentesque euismod tincidunt turpis ac tristique. Phasellus vitae lacus in enim mollis facilisis vel quis ex. In hac habitasse platea dictumst.</p>
                                        <div className="tour-highlights">
                                            <span>Morocco</span>
                                            <span>Egypt</span>
                                            <span>Dubai</span>
                                        </div>
                                        <div className="tour-action">
                                            <a href="booking.html" className="btn-book">Book Now</a>
                                            <div className="tour-rating">
                                                <i className="bi bi-star-fill" />
                                                <i className="bi bi-star-fill" />
                                                <i className="bi bi-star-fill" />
                                                <i className="bi bi-star-fill" />
                                                <i className="bi bi-star-fill" />
                                                <span>4.9 (72)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={200}>
                                <div className="tour-card">
                                    <div className="tour-image">
                                        <img src="assets/img/travel/tour-5.webp" alt="Coastal Explorer" className="img-fluid" loading="lazy" />
                                        <div className="tour-badge">Popular Choice</div>
                                        <div className="tour-price">$1,980</div>
                                    </div>
                                    <div className="tour-content">
                                        <h4>Mediterranean Coastal Cruise</h4>
                                        <div className="tour-meta">
                                            <span className="duration"><i className="bi bi-clock" /> 9 Days</span>
                                            <span className="group-size"><i className="bi bi-people" /> Max 15</span>
                                        </div>
                                        <p>Nullam lacinia justo eget ex sodales, vel finibus orci aliquet. Donec auctor, elit ut molestie gravida, magna mi molestie nisi.</p>
                                        <div className="tour-highlights">
                                            <span>Greece</span>
                                            <span>Croatia</span>
                                            <span>Italy</span>
                                        </div>
                                        <div className="tour-action">
                                            <a href="booking.html" className="btn-book">Book Now</a>
                                            <div className="tour-rating">
                                                <i className="bi bi-star-fill" />
                                                <i className="bi bi-star-fill" />
                                                <i className="bi bi-star-fill" />
                                                <i className="bi bi-star-fill" />
                                                <i className="bi bi-star-half" />
                                                <span>4.7 (110)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={300}>
                                <div className="tour-card">
                                    <div className="tour-image">
                                        <img src="assets/img/travel/tour-6.webp" alt="Rainforest Trek" className="img-fluid" loading="lazy" />
                                        <div className="tour-badge cultural">Eco-Friendly</div>
                                        <div className="tour-price">$2,650</div>
                                    </div>
                                    <div className="tour-content">
                                        <h4>Amazon Rainforest Trek</h4>
                                        <div className="tour-meta">
                                            <span className="duration"><i className="bi bi-clock" /> 12 Days</span>
                                            <span className="group-size"><i className="bi bi-people" /> Max 10</span>
                                        </div>
                                        <p>Quisque dictum felis eu tortor mollis, quis tincidunt arcu pharetra. A pellentesque sit amet, consectetur adipiscing elit.</p>
                                        <div className="tour-highlights">
                                            <span>Brazil</span>
                                            <span>Ecuador</span>
                                            <span>Peru</span>
                                        </div>
                                        <div className="tour-action">
                                            <a href="booking.html" className="btn-book">Book Now</a>
                                            <div className="tour-rating">
                                                <i className="bi bi-star-fill" />
                                                <i className="bi bi-star-fill" />
                                                <i className="bi bi-star-fill" />
                                                <i className="bi bi-star-fill" />
                                                <i className="bi bi-star" />
                                                <span>4.5 (88)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={400}>
                                <div className="tour-card">
                                    <div className="tour-image">
                                        <img src="assets/img/travel/tour-8.webp" alt="Patagonian Peaks" className="img-fluid" loading="lazy" />
                                        <div className="tour-badge adventure">Adventure Seekers</div>
                                        <div className="tour-price">$3,950</div>
                                    </div>
                                    <div className="tour-content">
                                        <h4>Patagonian Peaks &amp; Glaciers</h4>
                                        <div className="tour-meta">
                                            <span className="duration"><i className="bi bi-clock" /> 14 Days</span>
                                            <span className="group-size"><i className="bi bi-people" /> Max 10</span>
                                        </div>
                                        <p>Vivamus eget semper neque. Ut porttitor mi at odio egestas, non vestibulum est malesuada. Nunc facilisis in felis eget efficitur.</p>
                                        <div className="tour-highlights">
                                            <span>Argentina</span>
                                            <span>Chile</span>
                                            <span>Ushuaia</span>
                                        </div>
                                        <div className="tour-action">
                                            <a href="booking.html" className="btn-book">Book Now</a>
                                            <div className="tour-rating">
                                                <i className="bi bi-star-fill" />
                                                <i className="bi bi-star-fill" />
                                                <i className="bi bi-star-fill" />
                                                <i className="bi bi-star-fill" />
                                                <i className="bi bi-star-fill" />
                                                <span>4.9 (60)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                        <div className="text-center mt-5" data-aos="fade-up" data-aos-delay={500}>
                            <a href="tours.html" className="btn-view-all">View All Tours</a>
                        </div>
                    </div>
                </section>{/* /Featured Tours Section */}
                {/* Testimonials Home Section */}
                <section id="testimonials-home" className="testimonials-home section">
                    {/* Section Title */}
                    <div className="container section-title" data-aos="fade-up">
                        <h2>Testimonials</h2>
                        <div><span>What Our Customers</span> <span className="description-title">Are Saying</span></div>
                    </div>{/* End Section Title */}
                    <div className="container" data-aos="fade-up" data-aos-delay={100}>
                        <div className="swiper init-swiper">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="testimonial-item">
                                        <p>
                                            <i className="bi bi-quote quote-icon-left" />
                                            <span>Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.</span>
                                            <i className="bi bi-quote quote-icon-right" />
                                        </p>
                                        <img src="assets/img/person/person-m-9.webp" className="testimonial-img" alt />
                                        <h3>Saul Goodman</h3>
                                        <h4>Ceo &amp; Founder</h4>
                                    </div>
                                </div>{/* End testimonial item */}
                                <div className="swiper-slide">
                                    <div className="testimonial-item">
                                        <p>
                                            <i className="bi bi-quote quote-icon-left" />
                                            <span>Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.</span>
                                            <i className="bi bi-quote quote-icon-right" />
                                        </p>
                                        <img src="assets/img/person/person-f-5.webp" className="testimonial-img" alt />
                                        <h3>Sara Wilsson</h3>
                                        <h4>Designer</h4>
                                    </div>
                                </div>{/* End testimonial item */}
                                <div className="swiper-slide">
                                    <div className="testimonial-item">
                                        <p>
                                            <i className="bi bi-quote quote-icon-left" />
                                            <span>Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.</span>
                                            <i className="bi bi-quote quote-icon-right" />
                                        </p>
                                        <img src="assets/img/person/person-f-12.webp" className="testimonial-img" alt />
                                        <h3>Jena Karlis</h3>
                                        <h4>Store Owner</h4>
                                    </div>
                                </div>{/* End testimonial item */}
                                <div className="swiper-slide">
                                    <div className="testimonial-item">
                                        <p>
                                            <i className="bi bi-quote quote-icon-left" />
                                            <span>Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.</span>
                                            <i className="bi bi-quote quote-icon-right" />
                                        </p>
                                        <img src="assets/img/person/person-m-12.webp" className="testimonial-img" alt />
                                        <h3>Matt Brandon</h3>
                                        <h4>Freelancer</h4>
                                    </div>
                                </div>{/* End testimonial item */}
                                <div className="swiper-slide">
                                    <div className="testimonial-item">
                                        <p>
                                            <i className="bi bi-quote quote-icon-left" />
                                            <span>Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.</span>
                                            <i className="bi bi-quote quote-icon-right" />
                                        </p>
                                        <img src="assets/img/person/person-m-13.webp" className="testimonial-img" alt />
                                        <h3>John Larson</h3>
                                        <h4>Entrepreneur</h4>
                                    </div>
                                </div>{/* End testimonial item */}
                            </div>
                            <div className="swiper-pagination" />
                        </div>
                    </div>
                </section>{/* /Testimonials Home Section */}
                {/* Call To Action Section */}
                <section id="call-to-action" className="call-to-action section light-background">
                    <div className="container" data-aos="fade-up" data-aos-delay={100}>
                        <div className="hero-content" data-aos="zoom-in" data-aos-delay={200}>
                            <div className="content-wrapper">
                                <div className="badge-wrapper">
                                    <span className="promo-badge">Limited Time Offer</span>
                                </div>
                                <h2>Discover Your Next Adventure</h2>
                                <p>Unlock incredible destinations with our specially curated travel packages. From exotic beaches to mountain peaks, your perfect getaway awaits.</p>
                                <div className="action-section">
                                    <div className="main-actions">
                                        <a href="destinations.html" className="btn btn-explore">
                                            <i className="bi bi-compass" />
                                            Explore Now
                                        </a>
                                        <a href="deals.html" className="btn btn-deals">
                                            <i className="bi bi-percent" />
                                            View Deals
                                        </a>
                                    </div>
                                    <div className="quick-contact">
                                        <span className="contact-label">Need help choosing?</span>
                                        <a href="tel:+1555123456" className="contact-link">
                                            <i className="bi bi-telephone" />
                                            Call +1 (555) 123-456
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="visual-element">
                                <img src="assets/img/travel/showcase-3.webp" alt="Travel Adventure" className="hero-image" loading="lazy" />
                                <div className="image-overlay">
                                    <div className="stat-item">
                                        <span className="stat-number">500+</span>
                                        <span className="stat-label">Destinations</span>
                                    </div>
                                    <div className="stat-item">
                                        <span className="stat-number">10K+</span>
                                        <span className="stat-label">Happy Travelers</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="newsletter-section" data-aos="fade-up" data-aos-delay={300}>
                            <div className="newsletter-card">
                                <div className="newsletter-content">
                                    <div className="newsletter-icon">
                                        <i className="bi bi-envelope-heart" />
                                    </div>
                                    <div className="newsletter-text">
                                        <h3>Stay in the Loop</h3>
                                        <p>Get exclusive travel deals and destination guides delivered to your inbox</p>
                                    </div>
                                </div>
                                <form className="php-email-form newsletter-form" action="forms/newsletter.php" method="post">
                                    <div className="form-wrapper">
                                        <input type="email" name="email" className="email-input" placeholder="Your email address" required />
                                        <button type="submit" className="subscribe-btn">
                                            <i className="bi bi-arrow-right" />
                                        </button>
                                    </div>
                                    <div className="loading">Loading</div>
                                    <div className="error-message" />
                                    <div className="sent-message">Welcome aboard! Check your email for exclusive offers.</div>
                                    <div className="trust-indicators">
                                        <i className="bi bi-lock" />
                                        <span>We protect your privacy. Unsubscribe anytime.</span>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="benefits-showcase" data-aos="fade-up" data-aos-delay={400}>
                            <div className="benefits-header">
                                <h3>Why Choose Our Adventures</h3>
                                <p>Experience the difference with our premium travel services</p>
                            </div>
                            <div className="benefits-grid">
                                <div className="benefit-card" data-aos="flip-left" data-aos-delay={450}>
                                    <div className="benefit-visual">
                                        <div className="benefit-icon-wrap">
                                            <i className="bi bi-geo-alt" />
                                        </div>
                                        <div className="benefit-pattern" />
                                    </div>
                                    <div className="benefit-content">
                                        <h4>Handpicked Destinations</h4>
                                        <p>Every location is carefully selected by our travel experts for authentic experiences</p>
                                    </div>
                                </div>
                                <div className="benefit-card" data-aos="flip-left" data-aos-delay={500}>
                                    <div className="benefit-visual">
                                        <div className="benefit-icon-wrap">
                                            <i className="bi bi-award" />
                                        </div>
                                        <div className="benefit-pattern" />
                                    </div>
                                    <div className="benefit-content">
                                        <h4>Award-Winning Service</h4>
                                        <p>Recognized for excellence with 5-star ratings and industry awards</p>
                                    </div>
                                </div>
                                <div className="benefit-card" data-aos="flip-left" data-aos-delay={550}>
                                    <div className="benefit-visual">
                                        <div className="benefit-icon-wrap">
                                            <i className="bi bi-heart" />
                                        </div>
                                        <div className="benefit-pattern" />
                                    </div>
                                    <div className="benefit-content">
                                        <h4>Personalized Care</h4>
                                        <p>Tailored itineraries designed around your preferences and travel style</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>{/* /Call To Action Section */}
            </main>


            <Footer />
        </div>
    )
}

export default Home
