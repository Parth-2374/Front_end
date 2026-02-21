import React, { useEffect, useState } from 'react'
import Haeder from '../Coman/Haeder'
import Footer from '../Coman/Footer'
import { Link, NavLink } from 'react-router-dom'
import 'swiper/css'
import 'swiper/css/pagination'
import axios from 'axios'
import { data } from 'isotope-layout'

function Tours() {
    const [tours, settours] = useState()
    useEffect(() => {
        toursgetapi()
    }, [])
    const toursgetapi = async () => {
        try {
            const res = await axios.get("http://localhost:3000/FeaturedTours")
            settours(res.data)


        } catch (error) {
            console.log("Api Not found", error);


        }
    }

    // last deals start
    useEffect(() => {
        LastMinuteDeals()
    }, [])
    const [deals, setdeals] = useState()

    const LastMinuteDeals = async () => {
        try {
            const res = await axios.get("http://localhost:3000/LastMinuteDeals")
            console.log(res.data);
            setdeals(res.data)

        } catch (error) {
            console.log("Api Not Found", error);

        }
    }

    // All Tours Start

    const [alltours,setalltours]=useState()
    useEffect(()=>{
        alltoursadd()
    },[])
    const alltoursadd = async ()=>{
        const res = await axios.get("http://localhost:3000/Alltours")
        console.log(res.data);
        setalltours(res.data)
        
    }
    useEffect(() => {
        if (!window.Swiper)
            return

        const swiper = new window.Swiper('.featured-tours-slider', {
            slidesPerView: 3,
            spaceBetween: 30,
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            breakpoints: {
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
            },
        })

        return () => {
            if (swiper && swiper.destroy) swiper.destroy()
        }
    }, [])

    return (
        <div>
            <Haeder />

            <main className="main">
                {/* Page Title */}
                <div className="page-title dark-background" data-aos="fade" style={{ backgroundImage: 'url(assets/img/travel/showcase-8.webp)' }}>
                    <div className="container position-relative">
                        <h1>Tours</h1>
                        {/* <p>Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat quibusdam quia assumenda numquam molestias.</p> */}
                        <nav className="breadcrumbs">
                            <ol>
                                <li><NavLink to="/">Home</NavLink></li>
                                <li className="current">Tours</li>
                            </ol>
                        </nav>
                    </div>
                </div>{/* End Page Title */}
                {/* Travel Tours Section */}
                <section id="travel-tours" className="travel-tours section">
                    <div className="container" data-aos="fade-up" data-aos-delay={100}>
                        <div className="row">
                            <div className="col-lg-8 mx-auto text-center mb-5">
                                <h2>Find Your Perfect Tour</h2>
                                <p>Discover unforgettable travel experiences with our curated collection of tours. Explore by destination, travel style, or date to find the adventure that's perfect for you.</p>
                            </div>
                        </div>
                        {/* Tour Filters */}
                        <div className="row mb-5" data-aos="fade-up" data-aos-delay={200}>
                            <div className="col-12">
                                <div className="tour-filters">
                                    <div className="row">
                                        <div className="col-lg-3 col-md-6 mb-3">
                                            <select className="form-select">
                                                <option value>Select Destination</option>
                                                <option value="paris">Paris</option>
                                                <option value="bali">Bali</option>
                                                <option value="tokyo">Tokyo</option>
                                                <option value="rome">Rome</option>
                                                <option value="thailand">Thailand</option>
                                            </select>
                                        </div>
                                        <div className="col-lg-3 col-md-6 mb-3">
                                            <select className="form-select">
                                                <option value>Tour Type</option>
                                                <option value="adventure">Adventure</option>
                                                <option value="luxury">Luxury</option>
                                                <option value="family">Family</option>
                                                <option value="cultural">Cultural</option>
                                                <option value="beach">Beach</option>
                                            </select>
                                        </div>
                                        <div className="col-lg-3 col-md-6 mb-3">
                                            <select className="form-select">
                                                <option value>Duration</option>
                                                <option value="1-3">1-3 Days</option>
                                                <option value="4-7">4-7 Days</option>
                                                <option value="8-14">8-14 Days</option>
                                                <option value="15+">15+ Days</option>
                                            </select>
                                        </div>
                                        <div className="col-lg-3 col-md-6 mb-3">
                                            <select className="form-select">
                                                <option value>Price Range</option>
                                                <option value="0-500">$0 - $500</option>
                                                <option value="500-1000">$500 - $1,000</option>
                                                <option value="1000-2000">$1,000 - $2,000</option>
                                                <option value="2000+">$2,000+</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Featured Tours Slider */}
                        <div className="row mb-5" data-aos="fade-up" data-aos-delay={300}>
                            <div className="col-12">
                                <h3 className="section-subtitle mb-4">Featured Tours</h3>

                                <div className="featured-tours-slider swiper init-swiper">
                                    <div className="swiper-wrapper">
                                        {
                                            tours && tours.map((data, index) => {
                                                return (
                                                    <div className="swiper-slide" key={index}>
                                                        <div className="featured-tour-card">
                                                            <div className="tour-image">
                                                                <img src={data.img} alt="Patagonia Trek" className="img-fluid" />
                                                                <div className="tour-badge">{data.tag}</div>
                                                            </div>
                                                            <div className="tour-content">
                                                                <h4>{data.name}</h4>
                                                                <p>{data.type.slice(0, 37)}....</p>
                                                                <div className="tour-meta">
                                                                    <span className="duration"><i className="bi bi-clock" /> {data.days} Days</span>
                                                                    <span className="price">From ${data.price}</span>
                                                                </div>
                                                                <Link to="/tour-details" className="btn btn-primary">View Details</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                    <div className="swiper-pagination" />
                                </div>
                            </div>
                        </div>
                        {/* Tour Categories */}
                        <div className="row mb-5" data-aos="fade-up" data-aos-delay={400}>
                            <div className="col-12">
                                <h3 className="section-subtitle mb-4">Browse by Category</h3>
                                <div className="row">
                                    <div className="col-lg-2 col-md-4 col-6 mb-3">
                                        <div className="category-card">
                                            <div className="category-icon">
                                                <i className="bi bi-compass" />
                                            </div>
                                            <h5>Adventure</h5>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-6 mb-3">
                                        <div className="category-card">
                                            <div className="category-icon">
                                                <i className="bi bi-gem" />
                                            </div>
                                            <h5>Luxury</h5>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-6 mb-3">
                                        <div className="category-card">
                                            <div className="category-icon">
                                                <i className="bi bi-people" />
                                            </div>
                                            <h5>Family</h5>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-6 mb-3">
                                        <div className="category-card">
                                            <div className="category-icon">
                                                <i className="bi bi-palette" />
                                            </div>
                                            <h5>Cultural</h5>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-6 mb-3">
                                        <div className="category-card">
                                            <div className="category-icon">
                                                <i className="bi bi-sun" />
                                            </div>
                                            <h5>Beach</h5>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-6 mb-3">
                                        <div className="category-card">
                                            <div className="category-icon">
                                                <i className="bi bi-building" />
                                            </div>
                                            <h5>City</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Special Offers */}
                        <div className="row mb-5" data-aos="fade-up" data-aos-delay={500}>
                            <div className="col-12">
                                <div className="special-offers">
                                    <h3 className="section-subtitle mb-4">Last-Minute Deals</h3>
                                    <div className="row">
                                        {
                                            deals && deals.map((data, index) => {
                                                return (
                                                    <div className="col-lg-6 mb-4" key={index}>
                                                        <div className="offer-banner">
                                                            <div className="offer-content">
                                                                <div className="discount-badge">{data.pr}% OFF</div>
                                                                <h4>{data.name}</h4>
                                                                <p>{data.type.slice(0,27)} <br/>learn More...</p>
                                                                <span className="urgency">{data.days}</span>
                                                                <Link to="/booking" className="btn btn-accent">Book Now</Link>
                                                            </div>
                                                            <div className="offer-image" style={{width:"200px" ,height:"320px" ,overflow:"hidden"}}>
                                                                <img src={data.img}  style={{ width:"100%",height:"100%",objectFit:"cover"}} alt="Cruise" className="img-fluid" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Tour Grid */}
                        <div className="row" data-aos="fade-up" data-aos-delay={600}>
                            <div className="col-12">
                                <h3 className="section-subtitle mb-4">All Tours</h3>
                                <div className="row">
                                    {
                                        alltours && alltours.map((data,index)=>{
                                            return(
                                                <div className="col-lg-4 col-md-6 mb-4"key={index}>
                                                <div className="tour-card">
                                                    <div className="tour-image">
                                                        <img src={data.img} alt="Australia" className="img-fluid" />
                                                        <div className="tour-price">${data.price}</div>
                                                    </div>
                                                    <div className="tour-content">
                                                        <h4> {data.name} </h4>
                                                        <p>{data.type} </p>
                                                        <div className="tour-details">
                                                            <span><i className="bi bi-clock" /> {data.days} Days</span>
                                                            <span><i className="bi bi-star-fill" /> {data.rating} ({data.reviews} reviews)</span>
                                                        </div>
                                                        <a href="#" className="btn btn-outline-primary">View Tour</a>
                                                    </div>
                                                </div>
                                            </div>
                                            )
                                        })
                                    }
                                    {/* <div className="col-lg-4 col-md-6 mb-4">
                                        <div className="tour-card">
                                            <div className="tour-image">
                                                <img src="assets/img/travel/tour-13.webp" alt="Australia" className="img-fluid" />
                                                <div className="tour-price">$1799</div>
                                            </div>
                                            <div className="tour-content">
                                                <h4>Australia Highlights</h4>
                                                <p>Explore Sydney, Melbourne, and the Great Barrier Reef in this comprehensive tour.</p>
                                                <div className="tour-details">
                                                    <span><i className="bi bi-clock" /> 14 Days</span>
                                                    <span><i className="bi bi-star-fill" /> 4.8 (95 reviews)</span>
                                                </div>
                                                <a href="#" className="btn btn-outline-primary">View Tour</a>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        {/* CTA Section */}
                        <div className="row" data-aos="fade-up" data-aos-delay={700}>
                            <div className="col-12">
                                <div className="cta-section text-center">
                                    <h3>Not Sure What to Choose?</h3>
                                    <p>Our travel experts are here to help you find the perfect tour based on your preferences and budget.</p>
                                    <div className="cta-buttons">
                                        <a href="#" className="btn btn-primary me-3">Contact Our Experts</a>
                                        <a href="#" className="btn btn-outline-primary">Take Our Travel Quiz</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>{/* /Travel Tours Section */}
            </main>

            <Footer />
        </div>
    )
}

export default Tours
