import React from 'react'
import Haeder from '../Coman/Haeder'
import Footer from '../Coman/Footer'
import { NavLink } from 'react-router-dom'

function Faq() {
    return (
        <div>
            <Haeder />

            <main className="main">
                {/* Page Title */}
                <div className="page-title dark-background" data-aos="fade" style={{ backgroundImage: 'url(assets/img/travel/showcase-8.webp)' }}>
                    <div className="container position-relative">
                        <h1>Frequently Asked Questions</h1>
                        {/* <p>Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat quibusdam quia assumenda numquam molestias.</p> */}
                        <nav className="breadcrumbs">
                            <ol>
                                <li><NavLink to="/">Home</NavLink></li>
                                <li className="current">Frequently Asked Questions</li>
                            </ol>
                        </nav>
                    </div>
                </div>{/* End Page Title */}
                {/* Faq Section */}
                <section id="faq" className="faq section">
                    <div className="container" data-aos="fade-up" data-aos-delay={100}>
                        <div className="row align-items-start gy-4">
                            <div className="col-lg-5" data-aos="fade-up" data-aos-delay={200}>
                                <div className="faq-sidebar">
                                    <div className="faq-image">
                                        <img src="assets/img/illustration/illustration-5.webp" alt="FAQ Image" className="img-fluid" loading="lazy" />
                                    </div>
                                    <div className="contact-box">
                                        <h3><i className="bi bi-headset" /> Need Assistance?</h3>
                                        <p>Donec rutrum congue leo eget malesuada. Quisque velit nisi, pretium ut lacinia in, elementum id enim.</p>
                                        <a href="#" className="btn-contact">Connect with Support</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="faq-tabs">
                                    <ul className="nav nav-pills mb-4" id="faqTabs-faq" role="tablist" data-aos="fade-up" data-aos-delay={100}>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link active" id="general-tab-faq" data-bs-toggle="pill" data-bs-target="#general-faq-faq" type="button" role="tab" aria-controls="general-faq-faq" aria-selected="true">General Inquiries</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="account-tab-faq" data-bs-toggle="pill" data-bs-target="#account-faq-faq" type="button" role="tab" aria-controls="account-faq-faq" aria-selected="false">Account Services</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="payment-tab-faq" data-bs-toggle="pill" data-bs-target="#payment-faq-faq" type="button" role="tab" aria-controls="payment-faq-faq" aria-selected="false">Billing &amp; Payments</button>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="faqTabsContent-faq">
                                        <div className="tab-pane fade show active" id="general-faq-faq" role="tabpanel" aria-labelledby="general-tab-faq">
                                            <div className="accordion" id="generalAccordion-faq">
                                                <div className="faq-item" data-aos="fade-up" data-aos-delay={150}>
                                                    <h3>How do I create a new account?</h3>
                                                    <div className="faq-content">
                                                        <p>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Donec sollicitudin molestie malesuada. Vestibulum ac diam sit amet quam vehicula elementum. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</p>
                                                    </div>
                                                    <i className="bi bi-chevron-down faq-toggle" />
                                                </div>{/* End FAQ Item*/}
                                                <div className="faq-item" data-aos="fade-up" data-aos-delay={200}>
                                                    <h3>What are the system requirements?</h3>
                                                    <div className="faq-content">
                                                        <p>Vivamus suscipit tortor eget felis porttitor volutpat. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.</p>
                                                    </div>
                                                    <i className="bi bi-chevron-down faq-toggle" />
                                                </div>{/* End FAQ Item*/}
                                                <div className="faq-item" data-aos="fade-up" data-aos-delay={250}>
                                                    <h3>Can I access my data offline?</h3>
                                                    <div className="faq-content">
                                                        <p>Nulla quis lorem ut libero malesuada feugiat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla porttitor accumsan tincidunt. Quisque velit nisi, pretium ut lacinia in, elementum id enim.</p>
                                                    </div>
                                                    <i className="bi bi-chevron-down faq-toggle" />
                                                </div>{/* End FAQ Item*/}
                                                <div className="faq-item" data-aos="fade-up" data-aos-delay={300}>
                                                    <h3>How do I report a bug or issue?</h3>
                                                    <div className="faq-content">
                                                        <p>Pellentesque in ipsum id orci porta dapibus. Nulla quis lorem ut libero malesuada feugiat. Donec sollicitudin molestie malesuada. Sed porttitor lectus nibh.</p>
                                                    </div>
                                                    <i className="bi bi-chevron-down faq-toggle" />
                                                </div>{/* End FAQ Item*/}
                                                <div className="faq-item" data-aos="fade-up" data-aos-delay={350}>
                                                    <h3>What is your data privacy policy?</h3>
                                                    <div className="faq-content">
                                                        <p>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ac diam sit amet quam vehicula elementum. Sed porttitor lectus nibh.</p>
                                                    </div>
                                                    <i className="bi bi-chevron-down faq-toggle" />
                                                </div>{/* End FAQ Item*/}
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="account-faq-faq" role="tabpanel" aria-labelledby="account-tab-faq">
                                            <div className="accordion" id="accountAccordion-faq">
                                                <div className="faq-item" data-aos="fade-up" data-aos-delay={150}>
                                                    <h3>How do I reset my password?</h3>
                                                    <div className="faq-content">
                                                        <p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Nulla quis lorem ut libero malesuada feugiat.</p>
                                                    </div>
                                                    <i className="bi bi-chevron-down faq-toggle" />
                                                </div>{/* End FAQ Item*/}
                                                <div className="faq-item" data-aos="fade-up" data-aos-delay={200}>
                                                    <h3>How to update account information?</h3>
                                                    <div className="faq-content">
                                                        <p>Donec rutrum congue leo eget malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.</p>
                                                    </div>
                                                    <i className="bi bi-chevron-down faq-toggle" />
                                                </div>{/* End FAQ Item*/}
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="payment-faq-faq" role="tabpanel" aria-labelledby="payment-tab-faq">
                                            <div className="accordion" id="paymentAccordion-faq">
                                                <div className="faq-item" data-aos="fade-up" data-aos-delay={150}>
                                                    <h3>What payment methods are accepted?</h3>
                                                    <div className="faq-content">
                                                        <p>Pellentesque in ipsum id orci porta dapibus. Sed porttitor lectus nibh. Cras ultricies ligula sed magna dictum porta. Curabitur aliquet quam id dui posuere blandit. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.</p>
                                                    </div>
                                                    <i className="bi bi-chevron-down faq-toggle" />
                                                </div>{/* End FAQ Item*/}
                                                <div className="faq-item" data-aos="fade-up" data-aos-delay={200}>
                                                    <h3>When will my payment be processed?</h3>
                                                    <div className="faq-content">
                                                        <p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla porttitor accumsan tincidunt. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Quisque velit nisi, pretium ut lacinia in.</p>
                                                    </div>
                                                    <i className="bi bi-chevron-down faq-toggle" />
                                                </div>{/* End FAQ Item*/}
                                                <div className="faq-item" data-aos="fade-up" data-aos-delay={250}>
                                                    <h3>Can I get a refund for my purchase?</h3>
                                                    <div className="faq-content">
                                                        <p>Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Donec sollicitudin molestie malesuada.</p>
                                                    </div>
                                                    <i className="bi bi-chevron-down faq-toggle" />
                                                </div>{/* End FAQ Item*/}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>{/* /Faq Section */}
            </main>


            <Footer />
        </div>
    )
}

export default Faq
