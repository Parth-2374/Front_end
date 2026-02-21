import React, { useEffect, useState } from 'react'
import Haeder from '../Coman/Haeder'
import Footer from '../Coman/Footer'
import { Link, NavLink } from 'react-router-dom'

import Swiper from 'swiper'
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules'
import axios from 'axios'
import { data } from 'isotope-layout'



function Gallery() {
    const [gallery,setgallery]=useState([])
    useEffect(()=>{
        getgallery()
    },[])

    const getgallery = async ()=>{
        const res = await axios.get("http://localhost:3000/Gallery")
        console.log(res.data);
        
        setgallery(res.data)
    }

    // Swiper
    useEffect(() => {
        if (gallery.length === 0) return;
      
        const swiper = new Swiper('.gallery-slider .swiper', {
          modules: [Navigation, Pagination, Autoplay, EffectCoverflow],
          loop: true,
          speed: 800,
      
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
      
          effect: 'coverflow',
          grabCursor: true,
          centeredSlides: true,
          slidesPerView: 'auto',
      
          coverflowEffect: {
            rotate: 30,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: false,
          },
      
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
      
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        });
      
        return () => swiper.destroy();
      }, [gallery]);
      
    return (


        <div>

            <Haeder /> 
            <main className="main">
                {/* Page Title */}
                <div className="page-title dark-background" data-aos="fade" style={{ backgroundImage: 'url(assets/img/travel/showcase-8.webp)' }}>
                    <div className="container position-relative">
                        <h1>Gallery</h1>
                        {/* <p>Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat quibusdam quia assumenda numquam molestias.</p> */}
                        <nav className="breadcrumbs">
                            <ol>
                                <li><NavLink to="/">Home</NavLink></li>
                                <li className="current">Gallery</li>
                            </ol>
                        </nav>
                    </div>
                </div>{/* End Page Title */}
                {/* Gallery Slider Section */}
                <section id="gallery-slider" className="gallery-slider section">
                    <div className="container" data-aos="fade-up" data-aos-delay={100}>
                        <div className="gallery-container">
                            <div className="swiper init-swiper">
                                <div className="swiper-wrapper">
                                    {
                                        gallery && gallery.map((data,index)=>{
                                            return(
                                                <div className="swiper-slide" key={index}>
                                                <div className="gallery-item">
                                                    <div className="gallery-img">
                                                        <a className="glightbox" data-gallery="images-gallery" href={data.img}>
                                                            <img src={data.img} className="img-fluid" alt />
                                                            <div className="gallery-overlay">
                                                                <i className="bi bi-plus-circle" />
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            )
                                        })
                                    }
                                    {/* <div className="swiper-slide">
                                        <div className="gallery-item">
                                            <div className="gallery-img">
                                                <a className="glightbox" data-gallery="images-gallery" href="assets/img/gallery/gallery-3.webp">
                                                    <img src="assets/img/gallery/gallery-3.webp" className="img-fluid" alt />
                                                    <div className="gallery-overlay">
                                                        <i className="bi bi-plus-circle" />
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="gallery-item">
                                            <div className="gallery-img">
                                                <a className="glightbox" data-gallery="images-gallery" href="assets/img/gallery/gallery-1.webp">
                                                    <img src="assets/img/gallery/gallery-1.webp" className="img-fluid" alt />
                                                    <div className="gallery-overlay">
                                                        <i className="bi bi-plus-circle" />
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="gallery-item">
                                            <div className="gallery-img">
                                                <a className="glightbox" data-gallery="images-gallery" href="assets/img/gallery/gallery-5.webp">
                                                    <img src="assets/img/gallery/gallery-5.webp" className="img-fluid" alt />
                                                    <div className="gallery-overlay">
                                                        <i className="bi bi-plus-circle" />
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="gallery-item">
                                            <div className="gallery-img">
                                                <a className="glightbox" data-gallery="images-gallery" href="assets/img/gallery/gallery-7.webp">
                                                    <img src="assets/img/gallery/gallery-7.webp" className="img-fluid" alt />
                                                    <div className="gallery-overlay">
                                                        <i className="bi bi-plus-circle" />
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="gallery-item">
                                            <div className="gallery-img">
                                                <a className="glightbox" data-gallery="images-gallery" href="assets/img/gallery/gallery-2.webp">
                                                    <img src="assets/img/gallery/gallery-2.webp" className="img-fluid" alt />
                                                    <div className="gallery-overlay">
                                                        <i className="bi bi-plus-circle" />
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="gallery-item">
                                            <div className="gallery-img">
                                                <a className="glightbox" data-gallery="images-gallery" href="assets/img/gallery/gallery-4.webp">
                                                    <img src="assets/img/gallery/gallery-4.webp" className="img-fluid" alt />
                                                    <div className="gallery-overlay">
                                                        <i className="bi bi-plus-circle" />
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="gallery-item">
                                            <div className="gallery-img">
                                                <a className="glightbox" data-gallery="images-gallery" href="assets/img/gallery/gallery-6.webp">
                                                    <img src="assets/img/gallery/gallery-6.webp" className="img-fluid" alt />
                                                    <div className="gallery-overlay">
                                                        <i className="bi bi-plus-circle" />
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="gallery-item">
                                            <div className="gallery-img">
                                                <a className="glightbox" data-gallery="images-gallery" href="assets/img/gallery/gallery-8.webp">
                                                    <img src="assets/img/gallery/gallery-8.webp" className="img-fluid" alt />
                                                    <div className="gallery-overlay">
                                                        <i className="bi bi-plus-circle" />
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                                <div className="swiper-pagination" />
                                <div className="swiper-button-next" />
                                <div className="swiper-button-prev" />
                            </div>
                        </div>
                    </div>
                </section>{/* /Gallery Slider Section */}
                {/* Gallery Section */}
                <section id="gallery" className="gallery section">
                    <div className="container" data-aos="fade-up" data-aos-delay={100}>
                        <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">
                            <ul className="gallery-filters isotope-filters" data-aos="fade-up" data-aos-delay={200}>
                                {/* <li data-filter="*" className="filter-active">All</li> */}
                                {/* <li data-filter=".filter-nature">Nature</li> */}
                                {/* <li data-filter=".filter-architecture">Architecture</li> */}
                                {/* <li data-filter=".filter-people">People</li> */}
                            </ul>
                            <div className="row gallery-grid isotope-container" data-aos="fade-up" data-aos-delay={300}>
                                {
                                    gallery && gallery.map((data,index)=>{
                                        return(
                                            <div key={index} className="col-xl-3 col-md-4 col-sm-6 gallery-item isotope-item filter-nature">
                                            <div className="gallery-card">
                                                <div className="gallery-image">
                                                    <img src={data.img} className="img-fluid" alt />
                                                </div>
                                                <div className="gallery-overlay">
                                                    <h4>{data.name}</h4>
                                                    <p>{data.type}</p>
                                                    <div className="gallery-actions">
                                                        <a href={data.img} title="View Image" className="glightbox"><i className="bi bi-eye" /></a>
                                                        <Link ><i className="bi bi-info-circle" /></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        )
                                    })
                                }
                                {/* <div className="col-xl-3 col-md-4 col-sm-6 gallery-item isotope-item filter-nature">
                                    <div className="gallery-card">
                                        <div className="gallery-image">
                                            <img src="assets/img/gallery/gallery-1.webp" className="img-fluid" alt />
                                        </div>
                                        <div className="gallery-overlay">
                                            <h4>Natural Beauty</h4>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                            <div className="gallery-actions">
                                                <a href="assets/img/gallery/gallery-1.webp" title="View Image" className="glightbox"><i className="bi bi-eye" /></a>
                                                <a href="gallery-details.html"><i className="bi bi-info-circle" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-4 col-sm-6 gallery-item isotope-item filter-architecture">
                                    <div className="gallery-card">
                                        <div className="gallery-image">
                                            <img src="assets/img/gallery/gallery-2.webp" className="img-fluid" alt />
                                        </div>
                                        <div className="gallery-overlay">
                                            <h4>Urban Landscape</h4>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                            <div className="gallery-actions">
                                                <a href="assets/img/gallery/gallery-2.webp" title="View Image" className="glightbox"><i className="bi bi-eye" /></a>
                                                <a href="gallery-details.html"><i className="bi bi-info-circle" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-4 col-sm-6 gallery-item isotope-item filter-people">
                                    <div className="gallery-card">
                                        <div className="gallery-image">
                                            <img src="assets/img/gallery/gallery-3.webp" className="img-fluid" alt />
                                        </div>
                                        <div className="gallery-overlay">
                                            <h4>Candid Moments</h4>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                            <div className="gallery-actions">
                                                <a href="assets/img/gallery/gallery-3.webp" title="View Image" className="glightbox"><i className="bi bi-eye" /></a>
                                                <a href="gallery-details.html"><i className="bi bi-info-circle" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-4 col-sm-6 gallery-item isotope-item filter-nature">
                                    <div className="gallery-card">
                                        <div className="gallery-image">
                                            <img src="assets/img/gallery/gallery-4.webp" className="img-fluid" alt />
                                        </div>
                                        <div className="gallery-overlay">
                                            <h4>Wilderness</h4>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                            <div className="gallery-actions">
                                                <a href="assets/img/gallery/gallery-4.webp" title="View Image" className="glightbox"><i className="bi bi-eye" /></a>
                                                <a href="gallery-details.html"><i className="bi bi-info-circle" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-4 col-sm-6 gallery-item isotope-item filter-architecture">
                                    <div className="gallery-card">
                                        <div className="gallery-image">
                                            <img src="assets/img/gallery/gallery-5.webp" className="img-fluid" alt />
                                        </div>
                                        <div className="gallery-overlay">
                                            <h4>Modern Design</h4>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                            <div className="gallery-actions">
                                                <a href="assets/img/gallery/gallery-5.webp" title="View Image" className="glightbox"><i className="bi bi-eye" /></a>
                                                <a href="gallery-details.html"><i className="bi bi-info-circle" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-4 col-sm-6 gallery-item isotope-item filter-people">
                                    <div className="gallery-card">
                                        <div className="gallery-image">
                                            <img src="assets/img/gallery/gallery-6.webp" className="img-fluid" alt />
                                        </div>
                                        <div className="gallery-overlay">
                                            <h4>Portrait Studies</h4>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                            <div className="gallery-actions">
                                                <a href="assets/img/gallery/gallery-6.webp" title="View Image" className="glightbox"><i className="bi bi-eye" /></a>
                                                <a href="gallery-details.html"><i className="bi bi-info-circle" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-4 col-sm-6 gallery-item isotope-item filter-nature">
                                    <div className="gallery-card">
                                        <div className="gallery-image">
                                            <img src="assets/img/gallery/gallery-7.webp" className="img-fluid" alt />
                                        </div>
                                        <div className="gallery-overlay">
                                            <h4>Serene Waters</h4>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                            <div className="gallery-actions">
                                                <a href="assets/img/gallery/gallery-7.webp" title="View Image" className="glightbox"><i className="bi bi-eye" /></a>
                                                <a href="gallery-details.html"><i className="bi bi-info-circle" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-4 col-sm-6 gallery-item isotope-item filter-architecture">
                                    <div className="gallery-card">
                                        <div className="gallery-image">
                                            <img src="assets/img/gallery/gallery-8.webp" className="img-fluid" alt />
                                        </div>
                                        <div className="gallery-overlay">
                                            <h4>Historical Places</h4>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                            <div className="gallery-actions">
                                                <a href="assets/img/gallery/gallery-8.webp" title="View Image" className="glightbox"><i className="bi bi-eye" /></a>
                                                <a href="gallery-details.html"><i className="bi bi-info-circle" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </section>{/* /Gallery Section */}
            </main>

            <Footer />
        </div>
    )
}

export default Gallery
