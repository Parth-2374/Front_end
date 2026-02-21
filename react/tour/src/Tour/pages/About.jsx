import React from 'react'
import Haeder from '../Coman/Haeder'
import Footer from '../Coman/Footer'
import { NavLink } from 'react-router-dom'

function About() {
  return (
    <div>
      <Haeder />
      <main className="main">
  {/* Page Title */}
  <div className="page-title dark-background" data-aos="fade" style={{backgroundImage: 'url(assets/img/travel/showcase-8.webp)'}}>
    <div className="container position-relative">
      <h1>About</h1>
      {/* <p>Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat quibusdam quia assumenda numquam molestias.</p> */}
      <nav className="breadcrumbs">
        <ol>
          <li><NavLink to="/">Home</NavLink></li>
          <li className="current">About</li>
        </ol>
      </nav>
    </div>
  </div>{/* End Page Title */}
  {/* Travel About Section */}
  <section id="travel-about" className="travel-about section">
    <div className="container" data-aos="fade-up" data-aos-delay={100}>
      <div className="row">
        <div className="col-lg-8 mx-auto text-center mb-5">
          <div className="intro-content" data-aos="fade-up" data-aos-delay={200}>
            <h2>Redefining Travel,<br />One Adventure at a Time</h2>
            <p className="lead">Born from a love of exploration and discovery, we've spent the last decade turning wanderlust into life-changing experiences for adventurous souls around the globe.</p>
          </div>
        </div>
      </div>
      <div className="row align-items-center mb-5">
        <div className="col-lg-5" data-aos="zoom-in" data-aos-delay={300}>
          <div className="hero-image">
            <img src="assets/img/travel/showcase-7.webp" className="img-fluid" alt="Travel Adventure" />
            <div className="floating-stats">
              <div className="stat-item">
                <span className="number">50+</span>
                <span className="label">Countries</span>
              </div>
              <div className="stat-item">
                <span className="number">15K</span>
                <span className="label">Happy Travelers</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 offset-lg-1" data-aos="slide-left" data-aos-delay={400}>
          <div className="story-content">
            <div className="story-badge">
              <i className="bi bi-compass" />
              <span>Our Story</span>
            </div>
            <h3>Where Passion Meets Purpose</h3>
            <p>What started as weekend camping trips among college friends has evolved into a global network of travel enthusiasts dedicated to creating extraordinary journeys. We believe travel isn't just about seeing new places – it's about connecting with cultures, supporting communities, and discovering parts of yourself you never knew existed.</p>
            <p>Every expedition we craft is infused with respect for local traditions and a commitment to leaving places better than we found them. Our team of cultural ambassadors and adventure specialists work hand-in-hand with indigenous guides to offer you authentic experiences that most tourists never see.</p>
            <div className="mission-box">
              <div className="mission-icon">
                <i className="bi bi-globe-americas" />
              </div>
              <div className="mission-text">
                <h4>Our Vision</h4>
                <p>"To make the world more connected and compassionate, one meaningful journey at a time."</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="features-grid" data-aos="fade-up" data-aos-delay={200}>
            <div className="section-header text-center mb-5">
              <h3>What Makes Us Different</h3>
              <p>Six pillars that define every adventure we create</p>
            </div>
            <div className="row g-4">
              <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={300}>
                <div className="feature-card">
                  <div className="feature-front">
                    <div className="feature-icon">
                      <i className="bi bi-people" />
                    </div>
                    <h4>Local Partnerships</h4>
                    <p>Direct collaboration with indigenous communities</p>
                  </div>
                  <div className="feature-back">
                    <p>We work exclusively with local guides who are passionate storytellers and cultural ambassadors, ensuring authentic experiences while supporting local economies.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={400}>
                <div className="feature-card">
                  <div className="feature-front">
                    <div className="feature-icon">
                      <i className="bi bi-heart-pulse" />
                    </div>
                    <h4>Safety First</h4>
                    <p>Comprehensive safety protocols and emergency support</p>
                  </div>
                  <div className="feature-back">
                    <p>From pre-trip safety briefings to 24/7 emergency response teams, your wellbeing is our top priority on every single adventure.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={500}>
                <div className="feature-card">
                  <div className="feature-front">
                    <div className="feature-icon">
                      <i className="bi bi-recycle" />
                    </div>
                    <h4>Carbon Conscious</h4>
                    <p>Offsetting 150% of travel emissions</p>
                  </div>
                  <div className="feature-back">
                    <p>Through reforestation projects and renewable energy investments, we ensure every trip contributes positively to environmental restoration.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={300}>
                <div className="feature-card">
                  <div className="feature-front">
                    <div className="feature-icon">
                      <i className="bi bi-sliders" />
                    </div>
                    <h4>Tailored Itineraries</h4>
                    <p>Adventures designed around your interests</p>
                  </div>
                  <div className="feature-back">
                    <p>No cookie-cutter tours here. Every itinerary is customized based on your travel style, fitness level, and personal interests.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={400}>
                <div className="feature-card">
                  <div className="feature-front">
                    <div className="feature-icon">
                      <i className="bi bi-shield-check" />
                    </div>
                    <h4>Flexible Policies</h4>
                    <p>Life happens, we understand</p>
                  </div>
                  <div className="feature-back">
                    <p>Free cancellation up to 30 days before departure, easy date changes, and comprehensive travel insurance options give you peace of mind.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={500}>
                <div className="feature-card">
                  <div className="feature-front">
                    <div className="feature-icon">
                      <i className="bi bi-star" />
                    </div>
                    <h4>Lifetime Memories</h4>
                    <p>Experiences that transform perspectives</p>
                  </div>
                  <div className="feature-back">
                    <p>Our travelers often say their journey with us changed their outlook on life. We create moments that become treasured memories for years to come.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-lg-12">
          <div className="journey-timeline" data-aos="fade-up" data-aos-delay={200}>
            <div className="timeline-header text-center mb-5">
              <h3>Milestones in Our Adventure</h3>
              <p>Key moments that shaped who we are today</p>
            </div>
            <div className="timeline-container">
              <div className="timeline-track" />
              <div className="timeline-milestone" data-aos="slide-right" data-aos-delay={300}>
                <div className="milestone-marker">
                  <span className="year">2014</span>
                </div>
                <div className="milestone-content">
                  <h4>The Beginning</h4>
                  <p>Three university friends turned their passion for exploration into a mission to share hidden wonders with fellow adventurers across the continent.</p>
                </div>
              </div>
              <div className="timeline-milestone" data-aos="slide-left" data-aos-delay={400}>
                <div className="milestone-marker">
                  <span className="year">2017</span>
                </div>
                <div className="milestone-content">
                  <h4>Global Expansion</h4>
                  <p>Established partnerships with local guides in Southeast Asia and South America, bringing our authentic travel philosophy to new continents.</p>
                </div>
              </div>
              <div className="timeline-milestone" data-aos="slide-right" data-aos-delay={500}>
                <div className="milestone-marker">
                  <span className="year">2020</span>
                </div>
                <div className="milestone-content">
                  <h4>Community Impact</h4>
                  <p>Launched our sustainable tourism initiative, directly supporting over 200 local families through employment and fair trade partnerships.</p>
                </div>
              </div>
              <div className="timeline-milestone" data-aos="slide-left" data-aos-delay={600}>
                <div className="milestone-marker">
                  <span className="year">2024</span>
                </div>
                <div className="milestone-content">
                  <h4>Future Forward</h4>
                  <p>Achieved B-Corp certification and committed to becoming the first fully regenerative travel company by 2030.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-lg-12">
          <div className="cta-banner" data-aos="zoom-in" data-aos-delay={300}>
            <div className="cta-overlay">
              <div className="cta-content">
                <h3>Your Next Adventure Awaits</h3>
                <p>Join thousands of travelers who've discovered the difference authentic, responsible travel makes.</p>
                <div className="cta-buttons">
                  <a href="destinations.html" className="btn btn-primary me-3">Explore Destinations</a>
                  <a href="contact.html" className="btn btn-outline">Chat with an Expert</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>{/* /Travel About Section */}
</main>

      <Footer />
    </div>
  )
}

export default About
