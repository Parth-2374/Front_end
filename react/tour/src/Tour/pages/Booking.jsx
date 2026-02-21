import React from 'react'
import Haeder from '../Coman/Haeder'
import Footer from '../Coman/Footer'
import { NavLink } from 'react-router-dom'

function Booking() {
    return (
        <div>
            <Haeder />
            <main className="main">
                {/* Page Title */}
                <div className="page-title dark-background" data-aos="fade" style={{ backgroundImage: 'url(assets/img/travel/showcase-8.webp)' }}>
                    <div className="container position-relative">
                        <h1>Booking</h1>
                        {/* <p>Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat quibusdam quia assumenda numquam molestias.</p> */}
                        <nav className="breadcrumbs">
                            <ol>
                                <li><NavLink to="/">Home</NavLink></li>
                                <li className="current">Booking</li>
                            </ol>
                        </nav>
                    </div>
                </div>{/* End Page Title */}
                {/* Travel Booking Section */}
                <section id="travel-booking" className="travel-booking section">
                    <div className="container" data-aos="fade-up" data-aos-delay={100}>
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="booking-form-container">
                                    {/* Progress Steps */}
                                    <div className="booking-progress nav nav-tabs" data-aos="fade-up" data-aos-delay={200}>
                                        <button className="step nav-link active" data-bs-toggle="tab" data-bs-target="#travel-booking-step-1" aria-current="page">
                                            <span className="step-number">1</span>
                                            <span className="step-title">Tour &amp; Dates</span>
                                        </button>
                                        <button className="step nav-link" data-bs-toggle="tab" data-bs-target="#travel-booking-step-2">
                                            <span className="step-number">2</span>
                                            <span className="step-title">Travelers</span>
                                        </button>
                                        <button className="step nav-link" data-bs-toggle="tab" data-bs-target="#travel-booking-step-3">
                                            <span className="step-number">3</span>
                                            <span className="step-title">Add-ons</span>
                                        </button>
                                        <button className="step nav-link" data-bs-toggle="tab" data-bs-target="#travel-booking-step-4">
                                            <span className="step-number">4</span>
                                            <span className="step-title">Payment</span>
                                        </button>
                                    </div>{/* End Progress Steps */}
                                    {/* Booking Form */}
                                    <form action method="post" className="booking-form" data-aos="fade-up" data-aos-delay={300}>
                                        <div className="tab-content" id="bookingTabContent">
                                            {/* Step 1: Tour & Dates */}
                                            <div className="form-step tab-pane fade show active" id="travel-booking-step-1" role="tabpanel">
                                                <h4>Select Your Tour &amp; Travel Dates</h4>
                                                <div className="row gy-4">
                                                    <div className="col-md-6">
                                                        <label htmlFor="tour-select">Choose Tour Package</label>
                                                        <select name="tour_package" id="tour-select" className="form-select" required>
                                                            <option value>Select a tour...</option>
                                                            <option value="amazing-bali-adventure">Amazing Bali Adventure - 7 Days</option>
                                                            <option value="thailand-explorer">Thailand Explorer - 10 Days</option>
                                                            <option value="vietnam-highlights">Vietnam Highlights - 8 Days</option>
                                                            <option value="cambodia-discovery">Cambodia Discovery - 6 Days</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label htmlFor="tour-duration">Duration</label>
                                                        <input type="text" name="tour_duration" id="tour-duration" className="form-control" defaultValue="7 Days / 6 Nights" readOnly />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label htmlFor="departure-date">Departure Date</label>
                                                        <input type="date" name="departure_date" id="departure-date" className="form-control" required />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label htmlFor="return-date">Return Date</label>
                                                        <input type="date" name="return_date" id="return-date" className="form-control" required />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <label htmlFor="adults">Adults</label>
                                                        <select name="adults" id="adults" className="form-select" required>
                                                            <option value={1}>1 Adult</option>
                                                            <option value={2}>2 Adults</option>
                                                            <option value={3}>3 Adults</option>
                                                            <option value={4}>4 Adults</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <label htmlFor="children">Children (2-12)</label>
                                                        <select name="children" id="children" className="form-select">
                                                            <option value={0}>0 Children</option>
                                                            <option value={1}>1 Child</option>
                                                            <option value={2}>2 Children</option>
                                                            <option value={3}>3 Children</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <label htmlFor="infants">Infants (0-2)</label>
                                                        <select name="infants" id="infants" className="form-select">
                                                            <option value={0}>0 Infants</option>
                                                            <option value={1}>1 Infant</option>
                                                            <option value={2}>2 Infants</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>{/* End Step 1 */}
                                            {/* Step 2: Traveler Information */}
                                            <div className="form-step tab-pane fade" id="travel-booking-step-2" role="tabpanel">
                                                <h4>Traveler Information</h4>
                                                <div className="traveler-info">
                                                    <h5>Lead Traveler</h5>
                                                    <div className="row gy-3">
                                                        <div className="col-md-6">
                                                            <label htmlFor="first-name">First Name</label>
                                                            <input type="text" name="first_name" id="first-name" className="form-control" required />
                                                        </div>
                                                        <div className="col-md-6">
                                                            <label htmlFor="last-name">Last Name</label>
                                                            <input type="text" name="last_name" id="last-name" className="form-control" required />
                                                        </div>
                                                        <div className="col-md-6">
                                                            <label htmlFor="email">Email Address</label>
                                                            <input type="email" name="email" id="email" className="form-control" required />
                                                        </div>
                                                        <div className="col-md-6">
                                                            <label htmlFor="phone">Phone Number</label>
                                                            <input type="tel" name="phone" id="phone" className="form-control" required />
                                                        </div>
                                                        <div className="col-md-6">
                                                            <label htmlFor="nationality">Nationality</label>
                                                            <select name="nationality" id="nationality" className="form-select" required>
                                                                <option value>Select nationality...</option>
                                                                <option value="US">United States</option>
                                                                <option value="CA">Canada</option>
                                                                <option value="UK">United Kingdom</option>
                                                                <option value="AU">Australia</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="special-requirements">
                                                    <h5>Special Requirements</h5>
                                                    <div className="row gy-3">
                                                        <div className="col-12">
                                                            <label htmlFor="dietary">Dietary Restrictions</label>
                                                            <textarea name="dietary" id="dietary" className="form-control" rows={3} placeholder="Please mention any dietary restrictions or food allergies..." defaultValue={""} />
                                                        </div>
                                                        <div className="col-12">
                                                            <label htmlFor="special-requests">Special Requests</label>
                                                            <textarea name="special_requests" id="special-requests" className="form-control" rows={3} placeholder="Any special requests or accessibility needs..." defaultValue={""} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>{/* End Step 2 */}
                                            {/* Step 3: Add-ons & Extras */}
                                            <div className="form-step tab-pane fade" id="travel-booking-step-3" role="tabpanel">
                                                <h4>Enhance Your Experience</h4>
                                                <div className="addon-options">
                                                    <div className="addon-item">
                                                        <div className="addon-details">
                                                            <div className="addon-check">
                                                                <input type="checkbox" name="travel_insurance" id="travel-insurance" defaultValue="yes" />
                                                                <label htmlFor="travel-insurance">
                                                                    <h5>Travel Insurance</h5>
                                                                    <p>Comprehensive coverage for your trip including medical emergencies and cancellations.</p>
                                                                </label>
                                                            </div>
                                                            <div className="addon-price">
                                                                <span className="price">$89</span>
                                                                <span className="period">per person</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="addon-item">
                                                        <div className="addon-details">
                                                            <div className="addon-check">
                                                                <input type="checkbox" name="airport_transfer" id="airport-transfer" defaultValue="yes" />
                                                                <label htmlFor="airport-transfer">
                                                                    <h5>Airport Transfer</h5>
                                                                    <p>Private pickup and drop-off service from/to the airport with comfortable vehicle.</p>
                                                                </label>
                                                            </div>
                                                            <div className="addon-price">
                                                                <span className="price">$45</span>
                                                                <span className="period">per trip</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="addon-item">
                                                        <div className="addon-details">
                                                            <div className="addon-check">
                                                                <input type="checkbox" name="extra_nights" id="extra-nights" defaultValue="yes" />
                                                                <label htmlFor="extra-nights">
                                                                    <h5>Extra Hotel Nights</h5>
                                                                    <p>Extend your stay with additional nights at premium hotels before or after your tour.</p>
                                                                </label>
                                                            </div>
                                                            <div className="addon-price">
                                                                <span className="price">$120</span>
                                                                <span className="period">per night</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="addon-item">
                                                        <div className="addon-details">
                                                            <div className="addon-check">
                                                                <input type="checkbox" name="local_guide" id="local-guide" defaultValue="yes" />
                                                                <label htmlFor="local-guide">
                                                                    <h5>Private Local Guide</h5>
                                                                    <p>Personal guide for exclusive insights and customized exploration of hidden gems.</p>
                                                                </label>
                                                            </div>
                                                            <div className="addon-price">
                                                                <span className="price">$199</span>
                                                                <span className="period">per day</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>{/* End Step 3 */}
                                            {/* Step 4: Payment Information */}
                                            <div className="form-step tab-pane fade" id="travel-booking-step-4" role="tabpanel">
                                                <h4>Payment Information</h4>
                                                <div className="payment-methods">
                                                    <div className="method-selector">
                                                        <input type="radio" name="payment_method" id="credit-card" defaultValue="credit_card" defaultChecked />
                                                        <label htmlFor="credit-card"><i className="bi bi-credit-card" /> Credit Card</label>
                                                    </div>
                                                    <div className="method-selector">
                                                        <input type="radio" name="payment_method" id="paypal" defaultValue="paypal" />
                                                        <label htmlFor="paypal"><i className="bi bi-paypal" /> PayPal</label>
                                                    </div>
                                                    <div className="method-selector">
                                                        <input type="radio" name="payment_method" id="bank-transfer" defaultValue="bank_transfer" />
                                                        <label htmlFor="bank-transfer"><i className="bi bi-bank" /> Bank Transfer</label>
                                                    </div>
                                                </div>
                                                <div className="payment-details">
                                                    <div className="row gy-3">
                                                        <div className="col-12">
                                                            <label htmlFor="card-name">Cardholder Name</label>
                                                            <input type="text" name="card_name" id="card-name" className="form-control" required />
                                                        </div>
                                                        <div className="col-md-8">
                                                            <label htmlFor="card-number">Card Number</label>
                                                            <input type="text" name="card_number" id="card-number" className="form-control" placeholder="1234 5678 9012 3456" required />
                                                        </div>
                                                        <div className="col-md-4">
                                                            <label htmlFor="card-cvv">CVV</label>
                                                            <input type="text" name="card_cvv" id="card-cvv" className="form-control" placeholder={123} required />
                                                        </div>
                                                        <div className="col-md-6">
                                                            <label htmlFor="card-expiry-month">Expiry Month</label>
                                                            <select name="card_expiry_month" id="card-expiry-month" className="form-select" required>
                                                                <option value>Month</option>
                                                                <option value={1}>01</option>
                                                                <option value={2}>02</option>
                                                                <option value={3}>03</option>
                                                                <option value={4}>04</option>
                                                                <option value={5}>05</option>
                                                                <option value={6}>06</option>
                                                                <option value={7}>07</option>
                                                                <option value={8}>08</option>
                                                                <option value={9}>09</option>
                                                                <option value={10}>10</option>
                                                                <option value={11}>11</option>
                                                                <option value={12}>12</option>
                                                            </select>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <label htmlFor="card-expiry-year">Expiry Year</label>
                                                            <select name="card_expiry_year" id="card-expiry-year" className="form-select" required>
                                                                <option value>Year</option>
                                                                <option value={2024}>2024</option>
                                                                <option value={2025}>2025</option>
                                                                <option value={2026}>2026</option>
                                                                <option value={2027}>2027</option>
                                                                <option value={2028}>2028</option>
                                                                <option value={2029}>2029</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="secure-payment">
                                                        <i className="bi bi-shield-check" />
                                                        <span>Your payment information is secure and encrypted</span>
                                                    </div>
                                                </div>
                                                <div className="terms-agreement">
                                                    <div className="form-check">
                                                        <input type="checkbox" name="terms_agreement" id="terms-agreement" className="form-check-input" required />
                                                        <label htmlFor="terms-agreement" className="form-check-label">
                                                            I agree to the <a href="#">Terms &amp; Conditions</a> and <a href="#">Privacy Policy</a>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="form-navigation">
                                                    <button type="submit" className="btn btn-book">Complete Booking</button>
                                                </div>
                                            </div>{/* End Step 4 */}
                                        </div>{/* End Tab Content */}
                                    </form>{/* End Booking Form */}
                                </div>
                            </div>
                            {/* Booking Summary Sidebar */}
                            <div className="col-lg-4">
                                <div className="booking-summary" data-aos="fade-up" data-aos-delay={400}>
                                    <div className="summary-header">
                                        <h4>Booking Summary</h4>
                                    </div>
                                    <div className="selected-tour">
                                        <img src="assets/img/travel/tour-15.webp" alt="Selected Tour" className="img-fluid" />
                                        <div className="tour-info">
                                            <h5>Amazing Bali Adventure</h5>
                                            <p><i className="bi bi-calendar" /> 7 Days / 6 Nights</p>
                                            <p><i className="bi bi-geo-alt" /> Bali, Indonesia</p>
                                        </div>
                                    </div>
                                    <div className="booking-details">
                                        <div className="detail-item">
                                            <span className="label">Departure:</span>
                                            <span className="value">Select dates</span>
                                        </div>
                                        <div className="detail-item">
                                            <span className="label">Travelers:</span>
                                            <span className="value">2 Adults</span>
                                        </div>
                                        <div className="detail-item">
                                            <span className="label">Duration:</span>
                                            <span className="value">7 Days</span>
                                        </div>
                                    </div>
                                    <div className="price-breakdown">
                                        <div className="price-item">
                                            <span className="description">Base Price (2 Adults)</span>
                                            <span className="amount">$1,899</span>
                                        </div>
                                        <div className="price-item">
                                            <span className="description">Travel Insurance</span>
                                            <span className="amount">$178</span>
                                        </div>
                                        <div className="price-item">
                                            <span className="description">Airport Transfer</span>
                                            <span className="amount">$90</span>
                                        </div>
                                        <div className="price-item tax-item">
                                            <span className="description">Taxes &amp; Fees</span>
                                            <span className="amount">$156</span>
                                        </div>
                                        <div className="price-total">
                                            <span className="description">Total Amount</span>
                                            <span className="amount">$2,323</span>
                                        </div>
                                    </div>
                                    <div className="help-section">
                                        <h5>Need Help?</h5>
                                        <p>Our travel experts are here to assist you</p>
                                        <div className="contact-info">
                                            <p><i className="bi bi-telephone" /> +1 (555) 123-4567</p>
                                            <p><i className="bi bi-envelope" /> support@example.com</p>
                                        </div>
                                        <div className="support-hours">
                                            <small>Available 24/7</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>{/* /Travel Booking Section */}
            </main>

            <Footer />
        </div>
    )
}

export default Booking
