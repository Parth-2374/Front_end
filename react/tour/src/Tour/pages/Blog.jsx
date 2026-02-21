import React from 'react'
import Haeder from '../Coman/Haeder'
import Footer from '../Coman/Footer'
import { NavLink } from 'react-router-dom'

function Blog() {
    return (
        <div>
            <Haeder />
            <main className="main">
                {/* Page Title */}
                <div className="page-title dark-background" data-aos="fade" style={{ backgroundImage: 'url(assets/img/travel/showcase-8.webp)' }}>
                    <div className="container position-relative">
                        <h1>Blog</h1>
                        {/* <p>Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat quibusdam quia assumenda numquam molestias.</p> */}
                        <nav className="breadcrumbs">
                            <ol>
                                <li><NavLink to="/">Home</NavLink></li>
                                <li className="current">Blog</li>
                            </ol>
                        </nav>
                    </div>
                </div>{/* End Page Title */}
                {/* Blog Hero Section */}
                <section id="blog-hero" className="blog-hero section">
                    <div className="container" data-aos="fade-up" data-aos-delay={100}>
                        <div className="blog-grid">
                            {/* Main Featured Post */}
                            <article className="blog-item main-feature" data-aos="fade-up">
                                <img src="assets/img/blog/blog-post-9.webp" alt="Blog Image" className="img-fluid" />
                                <div className="blog-content">
                                    <div className="post-meta">
                                        <span className="date">Apr. 14th, 2022</span>
                                        <span className="category">Technology</span>
                                    </div>
                                    <h2 className="post-title">
                                        <a href="blog-details.html" title="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</a>
                                    </h2>
                                    <p className="post-excerpt">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </article>{/* End Main Featured Post */}
                            {/* Secondary Featured Posts */}
                            <div className="secondary-features">
                                <article className="blog-item" data-aos="fade-up" data-aos-delay={100}>
                                    <img src="assets/img/blog/blog-post-portrait-1.webp" alt="Blog Image" className="img-fluid" />
                                    <div className="blog-content">
                                        <div className="post-meta">
                                            <span className="date">Apr. 13th, 2022</span>
                                            <span className="category">Business</span>
                                        </div>
                                        <h3 className="post-title">
                                            <a href="blog-details.html" title="Ut enim ad minim veniam quis nostrud exercitation">Ut enim ad minim veniam quis nostrud exercitation</a>
                                        </h3>
                                    </div>
                                </article>
                                <article className="blog-item" data-aos="fade-up" data-aos-delay={200}>
                                    <img src="assets/img/blog/blog-post-portrait-2.webp" alt="Blog Image" className="img-fluid" />
                                    <div className="blog-content">
                                        <div className="post-meta">
                                            <span className="date">Apr. 12th, 2022</span>
                                            <span className="category">Lifestyle</span>
                                        </div>
                                        <h3 className="post-title">
                                            <a href="blog-details.html" title="Duis aute irure dolor in reprehenderit in voluptate">Duis aute irure dolor in reprehenderit in voluptate</a>
                                        </h3>
                                    </div>
                                </article>
                            </div>{/* End Secondary Features */}
                            {/* Regular Posts Grid */}
                            <div className="regular-posts">
                                <article className="blog-item" data-aos="fade-up" data-aos-delay={300}>
                                    <img src="assets/img/blog/blog-post-9.webp" alt="Blog Image" className="img-fluid" />
                                    <div className="blog-content">
                                        <div className="post-meta">
                                            <span className="date">Apr. 11th, 2022</span>
                                            <span className="category">Tech</span>
                                        </div>
                                        <h3 className="post-title">
                                            <a href="blog-details.html" title="Excepteur sint occaecat cupidatat non proident">Excepteur sint occaecat cupidatat non proident</a>
                                        </h3>
                                    </div>
                                </article>
                                <article className="blog-item" data-aos="fade-up" data-aos-delay={400}>
                                    <img src="assets/img/blog/blog-post-3.webp" alt="Blog Image" className="img-fluid" />
                                    <div className="blog-content">
                                        <div className="post-meta">
                                            <span className="date">Apr. 10th, 2022</span>
                                            <span className="category">Sports</span>
                                        </div>
                                        <h3 className="post-title">
                                            <a href="blog-details.html" title="Sunt in culpa qui officia deserunt mollit anim">Sunt in culpa qui officia deserunt mollit anim</a>
                                        </h3>
                                    </div>
                                </article>
                                <article className="blog-item" data-aos="fade-up" data-aos-delay={500}>
                                    <img src="assets/img/blog/blog-post-6.webp" alt="Blog Image" className="img-fluid" />
                                    <div className="blog-content">
                                        <div className="post-meta">
                                            <span className="date">Apr. 9th, 2022</span>
                                            <span className="category">Culture</span>
                                        </div>
                                        <h3 className="post-title">
                                            <a href="blog-details.html" title="Id est laborum et dolorum fuga et harum quidem">Id est laborum et dolorum fuga et harum quidem</a>
                                        </h3>
                                    </div>
                                </article>
                            </div>{/* End Regular Posts */}
                        </div>
                    </div>
                </section>{/* /Blog Hero Section */}
                {/* Blog Posts Section */}
                <section id="blog-posts" className="blog-posts section">
                    <div className="container" data-aos="fade-up" data-aos-delay={100}>
                        <div className="row gy-4">
                            <div className="col-lg-4">
                                <article>
                                    <div className="post-img">
                                        <img src="assets/img/blog/blog-post-1.webp" alt className="img-fluid" />
                                    </div>
                                    <p className="post-category">Politics</p>
                                    <h2 className="title">
                                        <a href="blog-details.html">Dolorum optio tempore voluptas dignissimos</a>
                                    </h2>
                                    <div className="d-flex align-items-center">
                                        <img src="assets/img/person/person-f-12.webp" alt className="img-fluid post-author-img" />
                                        <div className="post-meta">
                                            <p className="post-author">Maria Doe</p>
                                            <p className="post-date">
                                                <time dateTime="2022-01-01">Jan 1, 2022</time>
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            </div>{/* End post list item */}
                            <div className="col-lg-4">
                                <article>
                                    <div className="post-img">
                                        <img src="assets/img/blog/blog-post-2.webp" alt className="img-fluid" />
                                    </div>
                                    <p className="post-category">Sports</p>
                                    <h2 className="title">
                                        <a href="blog-details.html">Nisi magni odit consequatur autem nulla dolorem</a>
                                    </h2>
                                    <div className="d-flex align-items-center">
                                        <img src="assets/img/person/person-f-13.webp" alt className="img-fluid post-author-img" />
                                        <div className="post-meta">
                                            <p className="post-author">Allisa Mayer</p>
                                            <p className="post-date">
                                                <time dateTime="2022-01-01">Jun 5, 2022</time>
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            </div>{/* End post list item */}
                            <div className="col-lg-4">
                                <article>
                                    <div className="post-img">
                                        <img src="assets/img/blog/blog-post-3.webp" alt className="img-fluid" />
                                    </div>
                                    <p className="post-category">Entertainment</p>
                                    <h2 className="title">
                                        <a href="blog-details.html">Possimus soluta ut id suscipit ea ut in quo quia et soluta</a>
                                    </h2>
                                    <div className="d-flex align-items-center">
                                        <img src="assets/img/person/person-m-10.webp" alt className="img-fluid post-author-img" />
                                        <div className="post-meta">
                                            <p className="post-author">Mark Dower</p>
                                            <p className="post-date">
                                                <time dateTime="2022-01-01">Jun 22, 2022</time>
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            </div>{/* End post list item */}
                            <div className="col-lg-4">
                                <article>
                                    <div className="post-img">
                                        <img src="assets/img/blog/blog-post-4.webp" alt className="img-fluid" />
                                    </div>
                                    <p className="post-category">Sports</p>
                                    <h2 className="title">
                                        <a href="blog-details.html">Non rem rerum nam cum quo minus olor distincti</a>
                                    </h2>
                                    <div className="d-flex align-items-center">
                                        <img src="assets/img/person/person-f-14.webp" alt className="img-fluid post-author-img" />
                                        <div className="post-meta">
                                            <p className="post-author">Lisa Neymar</p>
                                            <p className="post-date">
                                                <time dateTime="2022-01-01">Jun 30, 2022</time>
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            </div>{/* End post list item */}
                            <div className="col-lg-4">
                                <article>
                                    <div className="post-img">
                                        <img src="assets/img/blog/blog-post-5.webp" alt className="img-fluid" />
                                    </div>
                                    <p className="post-category">Politics</p>
                                    <h2 className="title">
                                        <a href="blog-details.html">Accusamus quaerat aliquam qui debitis facilis consequatur</a>
                                    </h2>
                                    <div className="d-flex align-items-center">
                                        <img src="assets/img/person/person-m-11.webp" alt className="img-fluid post-author-img" />
                                        <div className="post-meta">
                                            <p className="post-author">Denis Peterson</p>
                                            <p className="post-date">
                                                <time dateTime="2022-01-01">Jan 30, 2022</time>
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            </div>{/* End post list item */}
                            <div className="col-lg-4">
                                <article>
                                    <div className="post-img">
                                        <img src="assets/img/blog/blog-post-6.webp" alt className="img-fluid" />
                                    </div>
                                    <p className="post-category">Entertainment</p>
                                    <h2 className="title">
                                        <a href="blog-details.html">Distinctio provident quibusdam numquam aperiam aut</a>
                                    </h2>
                                    <div className="d-flex align-items-center">
                                        <img src="assets/img/person/person-f-15.webp" alt className="img-fluid post-author-img" />
                                        <div className="post-meta">
                                            <p className="post-author">Mika Lendon</p>
                                            <p className="post-date">
                                                <time dateTime="2022-01-01">Feb 14, 2022</time>
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            </div>{/* End post list item */}
                        </div>
                    </div>
                </section>{/* /Blog Posts Section */}
                {/* Pagination 2 Section */}
                <section id="pagination-2" className="pagination-2 section">
                    <div className="container">
                        <div className="d-flex justify-content-center">
                            <ul>
                                <li><a href="#"><i className="bi bi-chevron-left" /></a></li>
                                <li><a href="#">1</a></li>
                                <li><a href="#" className="active">2</a></li>
                                <li><a href="#">3</a></li>
                                <li><a href="#">4</a></li>
                                <li>...</li>
                                <li><a href="#">10</a></li>
                                <li><a href="#"><i className="bi bi-chevron-right" /></a></li>
                            </ul>
                        </div>
                    </div>
                </section>{/* /Pagination 2 Section */}
            </main>

            <Footer />
        </div>
    )
}

export default Blog
