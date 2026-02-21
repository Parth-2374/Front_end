import React, { useEffect, useState } from 'react'
import Haeder from '../Coman/Haeder'
import Footer from '../Coman/Footer'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

function Des() {
    const [des, setdes] = useState([])
    useEffect(() => {
        desapidata()
    }, [])

    const desapidata = async () => {
        try {
            const res = await axios.get("http://localhost:3000/Destination")
            console.log(res.data)

            setdes(res.data)
        } catch (error) {
            console.log("Api Not Fond", error);

        }
    }

    useEffect(() => {

        const iso = new window.Isotope('.isotope-container', {
            itemSelector: '.isotope-item',
            layoutMode: 'masonry'
        })

        const filters = document.querySelectorAll('.isotope-filters li')

        filters.forEach(btn => {
            btn.addEventListener('click', function () {

                filters.forEach(el => el.classList.remove('filter-active'))
                this.classList.add('filter-active')

                const filterValue = this.getAttribute('data-filter')
                iso.arrange({ filter: filterValue })
            })
        })

        return () => {
            iso.destroy()
        }

    }, [des])

    return (
        <div>
            <Haeder />
            <main className="main">
                {/* Page Title */}
                <div className="page-title dark-background" data-aos="fade" style={{ backgroundImage: 'url(assets/img/travel/showcase-8.webp)' }}>
                    <div className="container position-relative">
                        <h1>Destinations</h1>
                        {/* <p>Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat quibusdam quia assumenda numquam molestias.</p> */}
                        <nav className="breadcrumbs">
                            <ol>
                                <li><NavLink to="/" >Home</NavLink></li>
                                <li className="current">Destinations</li>
                            </ol>
                        </nav>
                    </div>
                </div>{/* End Page Title */}
                {/* Travel Destinations Section */}
                <section id="travel-destinations" className="travel-destinations section">
                    <div className="container" data-aos="fade-up" data-aos-delay={100}>
                        <div className="row">
                            <div className="col-lg-8 mx-auto text-center">
                                <h2>Uncover Captivating Travel Experiences</h2>
                                <p className="mb-5">From the bustling energy of cosmopolitan cities to the serene embrace of untouched wilderness, embark on incredible journeys to the planet's most enchanting destinations. We're here to help you craft memories that will last a lifetime.</p>
                            </div>
                        </div>
                        <div className="isotope-layout" data-default-filter="*" data-layout="masonry" >
                            {/* <ul className="destination-filters isotope-filters" >
                                <li data-filter="*" className="filter-active">All Locales</li>
                                <li data-filter=".filter-tropical">Tropical</li>
                                <li data-filter=".filter-mountain">Alpine</li>
                                <li data-filter=".filter-urban">Cityscapes</li>
                                <li data-filter=".filter-historical">Heritage</li>
                                <li data-filter=".filter-coastal">Seaside</li>
                            </ul> */}
                            <div className="row gy-4 isotope-container" >
                                {
                                    des.map((data, index) => {
                                        return (
                                            <div
                                                key={index}
                                                className={`col-lg-4 col-md-6 destination-item isotope-item filter-${data.type}`}
                                            >
                                                <a href="destination-details.html" className="destination-tile">
                                                    <div className="tile-image">
                                                        <img
                                                            src={data.img}
                                                            alt={data.name}
                                                            className="img-fluid"
                                                            loading="lazy"
                                                        />
                                                        <div className="overlay-content">
                                                            <span className="destination-tag family">{data.tag}</span>
                                                            <div className="destination-info">
                                                                <h4>{data.name}</h4>
                                                                <p>{data.type}</p>
                                                                <div className="destination-stats">
                                                                    <span className="tours-available">
                                                                    <i class="fa-solid fa-person"></i> {data.available}  Person
                                                                    </span>
                                                                    <span className="starting-price">From ${data.price}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>



                    </div>
                    <div className="row mt-5">
                        <div className="col-lg-10 mx-auto text-center" >
                            <div className="planning-assistance">
                                <div className="assistance-content">
                                    <h3>Let Our Team Help Curate Your Perfect Expedition</h3>
                                    <p>Unsure which destination aligns with your travel aspirations? Our seasoned travel advisors are poised to design a bespoke itinerary tailored just for you.</p>
                                    <div className="assistance-actions">
                                        <a href="#" className="btn btn-primary">Receive Complimentary Consultation</a>
                                        <a href="#" className="btn btn-outline">Explore All Available Tours</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>


            <Footer />
        </div>
    )
}

export default Des
