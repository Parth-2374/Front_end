import React, { useEffect, useState } from 'react'
import Haeder from '../Coman/Haeder'
import Footer from '../Coman/Footer'
import { NavLink } from 'react-router-dom'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Swiper from 'swiper';
import { Pagination, Autoplay } from 'swiper/modules';
import axios from 'axios';
import AllTours from '../Admin/Apages/AllTours';


function DesDeatil() {
    useEffect(()=>{
        getvisit()
    },[])
    const getvisit =async()=>{
        const res = await axios.get("http://localhost:3000/visitattractions")
        console.log(res.data)
        setvisit(res.data)
    }
    
    const [visit,setvisit]= useState()

    
     {/*  AllTours  */}
     const gettours = async()=>{
        const res = await axios.get("http://localhost:3000/availabletour")
        console.log(res.data);
        settours(res.data)
        
     }
     useEffect(()=>{
        gettours()
     },[])
     const[tours,settours]= useState()
    useEffect(() => {
        const swiper = new Swiper('.gallery-slider.swiper', {
          modules: [Pagination, Autoplay],
          loop: true,
          slidesPerView: 1,
          spaceBetween: 20,
      
          autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
      
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
        });
      
        return () => swiper.destroy();
      }, []);
    return (
        <div>
            <Haeder />
            <main className="main">
                {/* Page Title */}
                <div className="page-title dark-background" data-aos="fade" style={{ backgroundImage: 'url(assets/img/travel/showcase-8.webp)' }}>
                    <div className="container position-relative">
                        <h1>Destination Details</h1>
                        {/* <p>Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat quibusdam quia assumenda numquam molestias.</p> */}
                        <nav className="breadcrumbs">
                            <ol>
                                <li><NavLink to="/">Home</NavLink></li>
                                <li className="current">Destination Details</li>
                            </ol>
                        </nav>
                    </div>
                </div>{/* End Page Title */}
                {/* Travel Destination Details Section */}
                <section id="travel-destination-details" className="travel-destination-details section">
                    <div className="container" data-aos="fade-up" data-aos-delay={100}>
                        {/* Hero Section */}
                        <div className="destination-hero" data-aos="fade-up" data-aos-delay={100}>
                            <div className="hero-image">
                                <img src="assets/img/travel/destination-3.webp" alt="Santorini" className="img-fluid" />
                                <div className="hero-overlay">
                                    <div className="hero-content">
                                        <h1>Santorini, Greece</h1>
                                        <p className="hero-tagline">The Crown Jewel of the Aegean Sea</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Overview Section */}
                        <div className="destination-overview" data-aos="fade-up" data-aos-delay={200}>
                            <div className="row">
                                <div className="col-lg-8 mx-auto">
                                    <h2>Discover the Magic</h2>
                                    <p>Perched on volcanic cliffs overlooking the deep blue Aegean Sea, Santorini captivates visitors with its iconic white-washed buildings, stunning sunsets, and rich ancient history. This enchanting Greek island offers a perfect blend of relaxation and adventure, from exploring archaeological sites to savoring world-class wines in dramatic clifftop settings.</p>
                                </div>
                            </div>
                        </div>
                        {/* Attractions Section */}
                        <div className="attractions-section" data-aos="fade-up" data-aos-delay={300}>
                            <div className="section-header">
                                <h2>Must-Visit Attractions</h2>
                                <p>Experience the best of what Santorini has to offer</p>
                            </div>
                            <div className="row gy-4">
                                {
                                    visit && visit.map((data,index)=>{
                                        return(
                                            <div className="col-lg-4 col-md-6" key={index} data-aos="zoom-in" data-aos-delay={100}>
                                            <div className="attraction-item">
                                                <div className="attraction-image">
                                                    <img src={data.img} alt="Oia Village" className="img-fluid" />
                                                </div>
                                                <div className="attraction-content">
                                                    <h4> {data.name}</h4>
                                                    <p> {data.type} </p>
                                                </div>
                                            </div>
                                        </div>
                                        )
                                    })
                                }
                                {/* <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay={100}>
                                    <div className="attraction-item">
                                        <div className="attraction-image">
                                            <img src="assets/img/travel/destination-3.webp" alt="Oia Village" className="img-fluid" />
                                        </div>
                                        <div className="attraction-content">
                                            <h4>Oia Village</h4>
                                            <p>Famous for its breathtaking sunsets and traditional Cycladic architecture with blue-domed churches.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay={200}>
                                    <div className="attraction-item">
                                        <div className="attraction-image">
                                            <img src="assets/img/travel/destination-7.webp" alt="Red Beach" className="img-fluid" />
                                        </div>
                                        <div className="attraction-content">
                                            <h4>Red Beach</h4>
                                            <p>A unique volcanic beach with dramatic red cliffs and crystal-clear waters perfect for swimming.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay={300}>
                                    <div className="attraction-item">
                                        <div className="attraction-image">
                                            <img src="assets/img/travel/destination-12.webp" alt="Akrotiri Ruins" className="img-fluid" />
                                        </div>
                                        <div className="attraction-content">
                                            <h4>Akrotiri Archaeological Site</h4>
                                            <p>Explore the well-preserved ruins of an ancient Minoan settlement frozen in time by volcanic ash.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay={100}>
                                    <div className="attraction-item">
                                        <div className="attraction-image">
                                            <img src="assets/img/travel/destination-15.webp" alt="Fira Town" className="img-fluid" />
                                        </div>
                                        <div className="attraction-content">
                                            <h4>Fira Town</h4>
                                            <p>The vibrant capital offering shopping, dining, and spectacular views of the caldera.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay={200}>
                                    <div className="attraction-item">
                                        <div className="attraction-image">
                                            <img src="assets/img/travel/destination-18.webp" alt="Wine Tasting" className="img-fluid" />
                                        </div>
                                        <div className="attraction-content">
                                            <h4>Santo Wines Winery</h4>
                                            <p>Sample exceptional local wines while enjoying panoramic views of the volcanic landscape.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay={300}>
                                    <div className="attraction-item">
                                        <div className="attraction-image">
                                            <img src="assets/img/travel/destination-9.webp" alt="Volcano Tour" className="img-fluid" />
                                        </div>
                                        <div className="attraction-content">
                                            <h4>Nea Kameni Volcano</h4>
                                            <p>Take a boat trip to the active volcano crater and natural hot springs in the caldera.</p>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                        {/* Tours Available Section */}
                        <div className="tours-section" data-aos="fade-up" data-aos-delay={400}>
                            <div className="section-header">
                                <h2>Available Tours &amp; Experiences</h2>
                                <p>Choose from our carefully curated selection of Santorini adventures</p>
                            </div>
                            <div className="row gy-4">
                                {
                                    tours && tours.map((data,index)=>{
                                        return(
                                            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={100}>
                                            <div className="tour-card">
                                                <div className="tour-image">
                                                    <img src={data.img} alt="Sunset Cruise" className="img-fluid" />
                                                    <div className="tour-price">
                                                        <span>${data.price}</span>
                                                    </div>
                                                </div>
                                                <div className="tour-content">
                                                    <div className="tour-meta">
                                                        <span className="duration"><i className="bi bi-clock" /> {data.hours} hours</span>
                                                        <span className="rating"><i className="bi bi-star-fill" /> {data.rating}</span>
                                                    </div>
                                                    <h4> {data.name} </h4>
                                                    <p> {data.type} </p>
                                                    <a href="#" className="btn-tour">Book Now</a>
                                                </div>
                                            </div>
                                        </div>
                                        )
                                    })
                                }
                                {/* <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={100}>
                                    <div className="tour-card">
                                        <div className="tour-image">
                                            <img src="assets/img/travel/tour-5.webp" alt="Sunset Cruise" className="img-fluid" />
                                            <div className="tour-price">
                                                <span>$129</span>
                                            </div>
                                        </div>
                                        <div className="tour-content">
                                            <div className="tour-meta">
                                                <span className="duration"><i className="bi bi-clock" /> 5 hours</span>
                                                <span className="rating"><i className="bi bi-star-fill" /> 4.8</span>
                                            </div>
                                            <h4>Santorini Sunset Cruise</h4>
                                            <p>Sail around the caldera while enjoying a magnificent sunset, with dinner and wine included.</p>
                                            <a href="#" className="btn-tour">Book Now</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={200}>
                                    <div className="tour-card">
                                        <div className="tour-image">
                                            <img src="assets/img/travel/tour-12.webp" alt="Wine Tour" className="img-fluid" />
                                            <div className="tour-price">
                                                <span>$95</span>
                                            </div>
                                        </div>
                                        <div className="tour-content">
                                            <div className="tour-meta">
                                                <span className="duration"><i className="bi bi-clock" /> 6 hours</span>
                                                <span className="rating"><i className="bi bi-star-fill" /> 4.9</span>
                                            </div>
                                            <h4>Wine Tasting &amp; Cultural Tour</h4>
                                            <p>Discover the unique terroir of Santorini with visits to traditional wineries and historical sites.</p>
                                            <a href="#" className="btn-tour">Book Now</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={300}>
                                    <div className="tour-card">
                                        <div className="tour-image">
                                            <img src="assets/img/travel/tour-18.webp" alt="Photography Tour" className="img-fluid" />
                                            <div className="tour-price">
                                                <span>$155</span>
                                            </div>
                                        </div>
                                        <div className="tour-content">
                                            <div className="tour-meta">
                                                <span className="duration"><i className="bi bi-clock" /> 4 hours</span>
                                                <span className="rating"><i className="bi bi-star-fill" /> 4.7</span>
                                            </div>
                                            <h4>Photography Walking Tour</h4>
                                            <p>Capture the most photogenic spots of Oia and Fira with a professional photographer guide.</p>
                                            <a href="#" className="btn-tour">Book Now</a>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                        {/* Interactive Map Section */}
                        <div className="map-section" data-aos="fade-up" data-aos-delay={500}>
                            <div className="section-header">
                                <h2>Explore the Island</h2>
                                <p>Interactive map with key attractions and tour meeting points</p>
                            </div>
                            <div className="map-container">
                                <div className="map-embed">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50234.23984454287!2d25.375799!3d36.393156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1499ce86adfd9ff7%3A0xb2a761f740d68afc!2sSantorini%2C%20Greece!5e0!3m2!1sen!2sus!4v1647887432123!5m2!1sen!2sus" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                                </div>
                                <div className="map-points">
                                    <div className="point-item">
                                        <i className="bi bi-geo-alt-fill" />
                                        <span>Oia Village - Main Square</span>
                                    </div>
                                    <div className="point-item">
                                        <i className="bi bi-geo-alt-fill" />
                                        <span>Fira Port - Ferry Terminal</span>
                                    </div>
                                    <div className="point-item">
                                        <i className="bi bi-geo-alt-fill" />
                                        <span>Akrotiri Site - Entrance</span>
                                    </div>
                                    <div className="point-item">
                                        <i className="bi bi-geo-alt-fill" />
                                        <span>Red Beach - Parking Area</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Practical Information Section */}
                        <div className="practical-info" data-aos="fade-up" data-aos-delay={600}>
                            <div className="section-header">
                                <h2>Essential Travel Information</h2>
                                <p>Everything you need to know for your Santorini adventure</p>
                            </div>
                            <div className="row gy-4">
                                <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay={100}>
                                    <div className="info-item">
                                        <div className="info-icon">
                                            <i className="bi bi-calendar-event" />
                                        </div>
                                        <h4>Best Time to Visit</h4>
                                        <p>April to November for warm weather. Peak season: June-August. Shoulder seasons offer fewer crowds and lower prices.</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay={200}>
                                    <div className="info-item">
                                        <div className="info-icon">
                                            <i className="bi bi-thermometer-sun" />
                                        </div>
                                        <h4>Weather &amp; Climate</h4>
                                        <p>Mediterranean climate with hot, dry summers (75-85°F) and mild winters. Sea breeze provides natural cooling.</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay={300}>
                                    <div className="info-item">
                                        <div className="info-icon">
                                            <i className="bi bi-currency-euro" />
                                        </div>
                                        <h4>Currency &amp; Language</h4>
                                        <p>Euro (EUR) is the official currency. Greek is the primary language, though English is widely spoken in tourist areas.</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay={400}>
                                    <div className="info-item">
                                        <div className="info-icon">
                                            <i className="bi bi-passport" />
                                        </div>
                                        <h4>Visa Requirements</h4>
                                        <p>EU citizens need only an ID card. US, Canada, Australia citizens need valid passport for stays up to 90 days.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="travel-tips" data-aos="fade-up" data-aos-delay={500}>
                                <h3>Local Tips &amp; Cultural Insights</h3>
                                <div className="row">
                                    <div className="col-md-6">
                                        <ul className="tips-list">
                                            <li><i className="bi bi-check-circle" /> Book sunset dinner reservations well in advance</li>
                                            <li><i className="bi bi-check-circle" /> Wear comfortable walking shoes for cobblestone streets</li>
                                            <li><i className="bi bi-check-circle" /> Carry sun protection - the Aegean sun can be intense</li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6">
                                        <ul className="tips-list">
                                            <li><i className="bi bi-check-circle" /> Respect local customs and dress codes at religious sites</li>
                                            <li><i className="bi bi-check-circle" /> Try local specialties: fava beans, cherry tomatoes, and Assyrtiko wine</li>
                                            <li><i className="bi bi-check-circle" /> Use public transportation or rent ATVs for island exploration</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Photo Gallery Section */}
                        <div className="gallery-section" data-aos="fade-up" data-aos-delay={700}>
                            <div className="section-header">
                                <h2>Gallery</h2>
                                <p>Immerse yourself in the beauty of Santorini</p>
                            </div>
                            <div className="gallery-slider swiper init-swiper">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <div className="gallery-item">
                                            <img src="assets/img/travel/misc-5.webp" alt="Santorini View" className="img-fluid" />
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="gallery-item">
                                            <img src="assets/img/travel/misc-12.webp" alt="Santorini Architecture" className="img-fluid" />
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="gallery-item">
                                            <img src="assets/img/travel/misc-8.webp" alt="Santorini Sunset" className="img-fluid" />
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="gallery-item">
                                            <img src="assets/img/travel/misc-15.webp" alt="Santorini Beach" className="img-fluid" />
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="gallery-item">
                                            <img src="assets/img/travel/misc-3.webp" alt="Santorini Culture" className="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-pagination" />
                            </div>
                        </div>
                        {/* Call to Action Section */}
                        <div className="cta-section" data-aos="fade-up" data-aos-delay={800}>
                            <div className="row">
                                <div className="col-lg-8 mx-auto text-center">
                                    <h2>Ready to Experience Santorini?</h2>
                                    <p>Let our travel experts help you create the perfect Santorini itinerary tailored to your interests and budget.</p>
                                    <div className="cta-buttons">
                                        <a href="#" className="btn btn-primary">View All Tours</a>
                                        <a href="#" className="btn btn-outline">Contact Travel Expert</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>{/* /Travel Destination Details Section */}
            </main>


            <Footer />
        </div>
    )
}

export default DesDeatil
