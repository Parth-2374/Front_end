import React, { useState } from 'react'
import Aheader from '../Coman/Aheader'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'

function AllTours() {
    const redirect = useNavigate()
    const [alladd, setalladd] = useState({
        id: "",
        name: "",
        price: "",
        type: "",
        days: "",
        rating: "",
        reviews: "",
        img: ""
    })

    const allchange = (e) => {
        setalladd({
            ...alladd,
            id: new Date().getTime().toString(),
            [e.target.name]: e.target.value
        })
    }
    const alladddata = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post("http://localhost:3000/Alltours",alladd)
            setalladd({
                id: "",
                name: "",
                price: "",
                type: "",
                days: "",
                rating: "",
                reviews: "",
                img: ""

            })
            redirect("/toursmange")

        } catch (error) {
            console.log("Api Not Found", error);

        }

    }

    return (
        <div>
            <Aheader />
            <main className="main">
                {/* Page Title */}
                <div className="page-title dark-background" data-aos="fade" style={{ backgroundImage: 'url(assets/img/travel/showcase-8.webp)' }}>
                    <div className="container position-relative">
                        <h1 className='text-uppercase'>Tours</h1>
                        {/* <p>Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat quibusdam quia assumenda numquam molestias.</p> */}
                        <nav className="breadcrumbs">
                            <ol>
                                <li><NavLink to="/dashbord">Home</NavLink></li>
                                <li className="current">All Tours</li>
                            </ol>
                        </nav>
                    </div>
                </div>
                <h1 className='text-center mt-4'>Hello</h1>
                <div className="container">
                    <div className="row justify-content-center mb-5" data-aos="fade-up" data-aos-delay={200}>
                        <div className="col-lg-10">
                            <div className="contact-form-wrapper">
                                <h2 className="text-center mb-4 mt-5">All Tours Add </h2>
                                <form action="" onSubmit={alladddata} method="post" className="php-email-form">
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                Enter All Tour Name:-
                                                <input type="text" className="form-control" value={alladd.name} onChange={allchange} name="name" placeholder="Enter Yours All Tours  Name" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            Enter All Tour Rating:-
                                            <div className="form-group">
                                                <input type="text" className="form-control" value={alladd.rating} onChange={allchange} name="rating" placeholder="Enter Your All Tours Rating" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                Enter All Tour Days:-
                                                <input type="text" className="form-control" value={alladd.days} onChange={allchange} name="days" placeholder="Enter Your All Tours Days" required />
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="form-group">
                                                Enter All Tour Price:-
                                                <input type="text" className="form-control" value={alladd.price} onChange={allchange} name="price" placeholder="Enter Your All Tours Tours Price" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                Enter All Tour Reviews:-
                                                <input type="text" className="form-control" value={alladd.reviews} onChange={allchange} name="reviews" placeholder="Enter Your All Tours Reviews " required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                Enter All Tour Type:-
                                                <input type="text" className="form-control" value={alladd.type} onChange={allchange} name="type" placeholder="Enter Your All Tours Type " required />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                Enter All Tour Img Link:-
                                                <input type="url" className="form-control" value={alladd.img} onChange={allchange} name="img" placeholder="Enter Your All Tours Img Link" required />
                                            </div>
                                        </div>

                                        <div className="col-12 text-center">
                                            <div className="row">
                                                <div className="col-6">
                                                    <button type="submit" className="btn btn-success"  >ADD All Tours</button>
                                                </div>
                                                <div className="col-6">
                                                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal"  >cancle All Tours</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>


                </div>
            </main>
        </div>
    )
}

export default AllTours
