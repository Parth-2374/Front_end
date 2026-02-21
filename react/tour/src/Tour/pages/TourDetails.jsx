import React from 'react'
import Haeder from '../Coman/Haeder'
import Footer from '../Coman/Footer'
import { NavLink } from 'react-router-dom'

function TourDetails() {
    return (
        <div>
            <Haeder />
            <main className="main">
                {/* Page Title */}
                <div className="page-title dark-background" data-aos="fade" style={{ backgroundImage: 'url(assets/img/travel/showcase-8.webp)' }}>
                    <div className="container position-relative">
                        <h1>Tour Details</h1>
                        {/* <p>Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat quibusdam quia assumenda numquam molestias.</p> */}
                        <nav className="breadcrumbs">
                            <ol>
                                <li><NavLink to="/">Home</NavLink></li>
                                <li className="current">Tour Details</li>
                            </ol>
                        </nav>
                    </div>
                </div>{/* End Page Title */}
                {/* Travel Tour Details Section */}
                <section id="travel-tour-details" className="travel-tour-details section">
                    <div className="container" data-aos="fade-up" data-aos-delay={100}>
                        {/* Hero Section */}
                        <div className="tour-hero">
                            <div className="hero-image-wrapper">
                                <img src="assets/img/travel/showcase-9.webp" alt="Mediterranean Adventure Tour" className="img-fluid w-100" />
                                <div className="hero-overlay">
                                    <div className="hero-content">
                                        <h1>Mediterranean Adventure</h1>
                                        <div className="hero-meta">
                                            <span className="duration"><i className="bi bi-calendar" /> 12 Days</span>
                                            <span className="destination"><i className="bi bi-geo-alt" /> Italy, Greece &amp; Turkey</span>
                                            <span className="rating"><i className="bi bi-star-fill" /> 4.8 (124 reviews)</span>
                                        </div>
                                        <p className="hero-tagline">Experience ancient wonders, pristine beaches, and vibrant cultures across three magnificent countries</p>
                                        <a href="#booking" className="btn-book">Check Availability</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Tour Overview */}
                        <div className="tour-overview" data-aos="fade-up" data-aos-delay={200}>
                            <div className="row">
                                <div className="col-lg-8">
                                    <h2>Tour Overview</h2>
                                    <p>Embark on an unforgettable journey through the heart of the Mediterranean, where ancient civilizations left their mark on stunning landscapes. This comprehensive tour takes you from the romantic canals of Venice to the sun-soaked islands of Santorini, culminating in the magical city of Istanbul where East meets West.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                                <div className="col-lg-4">
                                    <div className="tour-highlights">
                                        <h3>Tour Highlights</h3>
                                        <ul>
                                            <li><i className="bi bi-check-circle" /> 4-Star Boutique Hotels</li>
                                            <li><i className="bi bi-check-circle" /> Expert Local Guides</li>
                                            <li><i className="bi bi-check-circle" /> Daily Breakfast Included</li>
                                            <li><i className="bi bi-check-circle" /> Small Group (Max 16)
                                            </li>
                                            <li><i className="bi bi-check-circle" /> UNESCO World Heritage Sites</li>
                                            <li><i className="bi bi-check-circle" /> Cultural Experiences</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Itinerary */}
                        <div className="tour-itinerary" data-aos="fade-up" data-aos-delay={300}>
                            <h2>Day-by-Day Itinerary</h2>
                            <div className="itinerary-timeline">
                                <div className="itinerary-item">
                                    <div className="day-number">Day 1</div>
                                    <div className="day-content">
                                        <h4>Arrival in Venice</h4>
                                        <p>Welcome to the enchanting city of canals. Upon arrival, check into your waterfront hotel and enjoy a welcome dinner featuring fresh seafood and local Venetian specialties.</p>
                                        <div className="day-details">
                                            <span className="accommodation"><i className="bi bi-building" /> Hotel Palazzo Vitturi</span>
                                            <span className="meals"><i className="bi bi-cup-hot" /> Welcome Dinner</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="itinerary-item">
                                    <div className="day-number">Day 2</div>
                                    <div className="day-content">
                                        <h4>Venice City Tour</h4>
                                        <p>Explore St. Mark's Square, visit the magnificent Basilica, and take a gondola ride through the romantic canals. Afternoon visit to Murano Island to see traditional glassblowing demonstrations.</p>
                                        <div className="day-details">
                                            <span className="accommodation"><i className="bi bi-building" /> Hotel Palazzo Vitturi</span>
                                            <span className="meals"><i className="bi bi-cup-hot" /> Breakfast</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="itinerary-item">
                                    <div className="day-number">Day 3</div>
                                    <div className="day-content">
                                        <h4>Florence Discovery</h4>
                                        <p>Travel to Florence, the cradle of Renaissance. Visit the Uffizi Gallery, admire Michelangelo's David, and climb to the top of the Duomo for breathtaking city views.</p>
                                        <div className="day-details">
                                            <span className="accommodation"><i className="bi bi-building" /> Hotel Davanzati</span>
                                            <span className="meals"><i className="bi bi-cup-hot" /> Breakfast</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="itinerary-item">
                                    <div className="day-number">Days 4-5</div>
                                    <div className="day-content">
                                        <h4>Rome Exploration</h4>
                                        <p>Two full days in the Eternal City. Visit the Colosseum, Roman Forum, Vatican City with the Sistine Chapel, and enjoy an authentic cooking class with a local Roman family.</p>
                                        <div className="day-details">
                                            <span className="accommodation"><i className="bi bi-building" /> Hotel Artemide</span>
                                            <span className="meals"><i className="bi bi-cup-hot" /> Breakfast, Cooking Class</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="itinerary-item">
                                    <div className="day-number">Days 6-8</div>
                                    <div className="day-content">
                                        <h4>Santorini Paradise</h4>
                                        <p>Flight to Greece and arrival in Santorini. Three days to explore the iconic blue-domed churches, stunning sunsets in Oia, wine tasting, and relaxation on unique volcanic beaches.</p>
                                        <div className="day-details">
                                            <span className="accommodation"><i className="bi bi-building" /> Canaves Oia Hotel</span>
                                            <span className="meals"><i className="bi bi-cup-hot" /> Breakfast Daily</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="itinerary-item">
                                    <div className="day-number">Days 9-11</div>
                                    <div className="day-content">
                                        <h4>Istanbul Adventure</h4>
                                        <p>Fly to Istanbul for three incredible days exploring where Europe meets Asia. Visit Hagia Sophia, Blue Mosque, Grand Bazaar, and enjoy a Bosphorus cruise at sunset.</p>
                                        <div className="day-details">
                                            <span className="accommodation"><i className="bi bi-building" /> Four Seasons Sultanahmet</span>
                                            <span className="meals"><i className="bi bi-cup-hot" /> Breakfast, Farewell Dinner</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="itinerary-item">
                                    <div className="day-number">Day 12</div>
                                    <div className="day-content">
                                        <h4>Departure</h4>
                                        <p>Transfer to Istanbul Airport for your departure flight. Take home memories of an incredible Mediterranean adventure that will last a lifetime.</p>
                                        <div className="day-details">
                                            <span className="meals"><i className="bi bi-cup-hot" /> Breakfast</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Inclusions */}
                        <div className="tour-inclusions" data-aos="fade-up" data-aos-delay={400}>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="included-section">
                                        <h3><i className="bi bi-check-circle-fill" /> What's Included</h3>
                                        <ul className="inclusion-list included">
                                            <li><i className="bi bi-check" /> Round-trip flights between destinations</li>
                                            <li><i className="bi bi-check" /> 11 nights accommodation (4-star hotels)</li>
                                            <li><i className="bi bi-check" /> Daily breakfast at all hotels</li>
                                            <li><i className="bi bi-check" /> Professional English-speaking guides</li>
                                            <li><i className="bi bi-check" /> All entrance fees to attractions</li>
                                            <li><i className="bi bi-check" /> Private transportation</li>
                                            <li><i className="bi bi-check" /> Welcome and farewell dinners</li>
                                            <li><i className="bi bi-check" /> Gondola ride in Venice</li>
                                            <li><i className="bi bi-check" /> Wine tasting in Santorini</li>
                                            <li><i className="bi bi-check" /> Bosphorus cruise in Istanbul</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="excluded-section">
                                        <h3><i className="bi bi-x-circle-fill" /> What's Not Included</h3>
                                        <ul className="inclusion-list excluded">
                                            <li><i className="bi bi-x" /> International flights to/from departure city</li>
                                            <li><i className="bi bi-x" /> Lunch and dinner (except specified)</li>
                                            <li><i className="bi bi-x" /> Personal expenses and shopping</li>
                                            <li><i className="bi bi-x" /> Travel insurance (recommended)</li>
                                            <li><i className="bi bi-x" /> Tips for guides and drivers</li>
                                            <li><i className="bi bi-x" /> Optional activities and excursions</li>
                                            <li><i className="bi bi-x" /> Alcoholic beverages (except wine tasting)</li>
                                            <li><i className="bi bi-x" /> Visa fees if required</li>
                                            <li><i className="bi bi-x" /> Single supplement for solo travelers</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Pricing */}
                        <div className="tour-pricing" data-aos="fade-up" data-aos-delay={500}>
                            <h2>Pricing &amp; Dates</h2>
                            <div className="pricing-table">
                                <div className="pricing-header">
                                    <div className="price-item">
                                        <h3>Starting from</h3>
                                        <div className="price-amount">$3,299</div>
                                        <p>per person (double occupancy)</p>
                                    </div>
                                </div>
                                <div className="pricing-details">
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <div className="price-type">
                                                <h4>Double Occupancy</h4>
                                                <div className="price">$3,299</div>
                                                <p>per person</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="price-type">
                                                <h4>Single Supplement</h4>
                                                <div className="price">+$899</div>
                                                <p>additional</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="price-type">
                                                <h4>Group Discount</h4>
                                                <div className="price">-$200</div>
                                                <p>for 6+ people</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="available-dates">
                                    <h3>2024 Departure Dates</h3>
                                    <div className="dates-grid">
                                        <div className="date-option">
                                            <div className="date">May 15-26</div>
                                            <div className="availability">6 spots left</div>
                                        </div>
                                        <div className="date-option">
                                            <div className="date">June 12-23</div>
                                            <div className="availability">Available</div>
                                        </div>
                                        <div className="date-option">
                                            <div className="date">July 10-21</div>
                                            <div className="availability">Almost full</div>
                                        </div>
                                        <div className="date-option">
                                            <div className="date">August 14-25</div>
                                            <div className="availability">Available</div>
                                        </div>
                                        <div className="date-option">
                                            <div className="date">September 18-29</div>
                                            <div className="availability">Available</div>
                                        </div>
                                        <div className="date-option">
                                            <div className="date">October 9-20</div>
                                            <div className="availability">11 spots left</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Booking Form */}
                        <div className="booking-section" id="booking" data-aos="fade-up" data-aos-delay={600}>
                            <div className="booking-card">
                                <h2>Book This Tour</h2>
                                <form action="forms/tour-booking.php" method="post" className="php-email-form">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <label htmlFor="travel-date">Preferred Travel Date</label>
                                                <select name="date" id="travel-date" className="form-control" required>
                                                    <option value>Select a date</option>
                                                    <option value="May 15-26">May 15-26, 2024</option>
                                                    <option value="June 12-23">June 12-23, 2024</option>
                                                    <option value="July 10-21">July 10-21, 2024</option>
                                                    <option value="August 14-25">August 14-25, 2024</option>
                                                    <option value="September 18-29">September 18-29, 2024</option>
                                                    <option value="October 9-20">October 9-20, 2024</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <label htmlFor="travelers">Number of Travelers</label>
                                                <select name="travelers" id="travelers" className="form-control" required>
                                                    <option value>Select travelers</option>
                                                    <option value={1}>1 Traveler</option>
                                                    <option value={2}>2 Travelers</option>
                                                    <option value={3}>3 Travelers</option>
                                                    <option value={4}>4 Travelers</option>
                                                    <option value={5}>5 Travelers</option>
                                                    <option value="6+">6+ Travelers</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <label htmlFor="name">Full Name</label>
                                                <input type="text" name="name" id="name" className="form-control" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <label htmlFor="email">Email Address</label>
                                                <input type="email" name="email" id="email" className="form-control" required />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="phone">Phone Number</label>
                                        <input type="tel" name="phone" id="phone" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="message">Special Requests or Questions</label>
                                        <textarea name="message" id="message" rows={4} className="form-control" placeholder="Any dietary restrictions, accessibility needs, or special occasions..." defaultValue={""} />
                                    </div>
                                    <div className="loading">Loading</div>
                                    <div className="error-message" />
                                    <div className="sent-message">Your booking request has been sent. We'll contact you within 24 hours!</div>
                                    <button type="submit" className="btn-submit">Send Booking Request</button>
                                </form>
                            </div>
                        </div>
                        {/* Gallery */}
                        <div className="tour-gallery" data-aos="fade-up" data-aos-delay={700}>
                            <h2>Photo Gallery</h2>
                            <div className="gallery-grid">
                                <div className="gallery-item">
                                    <a href="assets/img/travel/destination-1.webp" className="glightbox">
                                        <img src="assets/img/travel/destination-1.webp" alt="Venice Canals" className="img-fluid" loading="lazy" />
                                    </a>
                                </div>
                                <div className="gallery-item">
                                    <a href="assets/img/travel/destination-2.webp" className="glightbox">
                                        <img src="assets/img/travel/destination-2.webp" alt="Florence Cathedral" className="img-fluid" loading="lazy" />
                                    </a>
                                </div>
                                <div className="gallery-item">
                                    <a href="assets/img/travel/destination-3.webp" className="glightbox">
                                        <img src="assets/img/travel/destination-3.webp" alt="Roman Colosseum" className="img-fluid" loading="lazy" />
                                    </a>
                                </div>
                                <div className="gallery-item">
                                    <a href="assets/img/travel/destination-4.webp" className="glightbox">
                                        <img src="assets/img/travel/destination-4.webp" alt="Santorini Sunset" className="img-fluid" loading="lazy" />
                                    </a>
                                </div>
                                <div className="gallery-item">
                                    <a href="assets/img/travel/destination-5.webp" className="glightbox">
                                        <img src="assets/img/travel/destination-5.webp" alt="Hagia Sophia" className="img-fluid" loading="lazy" />
                                    </a>
                                </div>
                                <div className="gallery-item">
                                    <a href="assets/img/travel/destination-6.webp" className="glightbox">
                                        <img src="assets/img/travel/destination-6.webp" alt="Mediterranean Cuisine" className="img-fluid" loading="lazy" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* Final CTA */}
                        <div className="final-cta" data-aos="fade-up" data-aos-delay={1000}>
                            <div className="cta-content">
                                <h2>Ready for Your Mediterranean Adventure?</h2>
                                <p>Limited spots available for 2024 departures. Book now to secure your place on this incredible journey.</p>
                                <div className="cta-actions">
                                    <a href="booking.html" className="btn-primary">Book Now</a>
                                    <a href="tel:+1-555-123-4567" className="btn-secondary">Call Us: +1 (555) 123-4567</a>
                                </div>
                                <div className="urgency-banner">
                                    <i className="bi bi-clock" />
                                    <span>Next departure in 45 days - Only 6 spots remaining!</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>{/* /Travel Tour Details Section */}
            </main>

            <Footer />
        </div>
    )
}

export default TourDetails
