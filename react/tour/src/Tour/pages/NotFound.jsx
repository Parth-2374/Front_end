import React from 'react'
import { NavLink } from 'react-router-dom'

function NotFound() {
    return (
        <div>
            <main className="main">
                {/* Page Title */}
                <div className="page-title dark-background" data-aos="fade" style={{ backgroundImage: 'url(assets/img/travel/showcase-8.webp)' }}>
                    <div className="container position-relative">
                        <h1>404</h1>
                        {/* <p>Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat quibusdam quia assumenda numquam molestias.</p> */}
                        <nav className="breadcrumbs">
                            <ol>
                                <li><NavLink to="/">Home</NavLink></li>
                                <li className="current">404</li>
                            </ol>
                        </nav>
                    </div>
                </div>{/* End Page Title */}
                {/* Error 404 Section */}
                <section id="error-404" className="error-404 section">
                    <div className="container" data-aos="fade-up" data-aos-delay={100}>
                        <div className="error-wrapper">
                            <div className="row align-items-center">
                                <div className="col-lg-6" data-aos="fade-right" data-aos-delay={200}>
                                    <div className="error-illustration">
                                        <i className="bi bi-exclamation-triangle-fill" />
                                        <div className="circle circle-1" />
                                        <div className="circle circle-2" />
                                        <div className="circle circle-3" />
                                    </div>
                                </div>
                                <div className="col-lg-6" data-aos="fade-left" data-aos-delay={300}>
                                    <div className="error-content">
                                        <span className="error-badge" data-aos="zoom-in" data-aos-delay={400}>Error</span>
                                        <h1 className="error-code" data-aos="fade-up" data-aos-delay={500}>404</h1>
                                        <h2 className="error-title" data-aos="fade-up" data-aos-delay={600}>Page Not Found</h2>
                                        <p className="error-description" data-aos="fade-up" data-aos-delay={700}>
                                            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                                        </p>
                                        <div className="error-actions" data-aos="fade-up" data-aos-delay={800}>
                                            <a href="/" className="btn-home">
                                                <i className="bi bi-house-door" /> Back to Home
                                            </a>
                                            <a href="#" className="btn-help">
                                                <i className="bi bi-question-circle" /> Help Center
                                            </a>
                                        </div>
                                        <div className="error-suggestions" data-aos="fade-up" data-aos-delay={900}>
                                            <h3>You might want to:</h3>
                                            <ul>
                                                <li><a href="#"><i className="bi bi-arrow-right-circle" /> Check our sitemap</a></li>
                                                <li><a href="#"><i className="bi bi-arrow-right-circle" /> Contact support</a></li>
                                                <li><a href="#"><i className="bi bi-arrow-right-circle" /> Return to previous page</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>{/* /Error 404 Section */}
            </main>

        </div>
    )
}

export default NotFound
