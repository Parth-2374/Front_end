import React, { useState } from 'react'
import Aheader from '../Coman/Aheader'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Addfeaturedright() {
    const redirect = useNavigate()
    const [right, setright] = useState({
        id: "",
        name: "",
        type: "",
        location: "",
        tours: "",
        rating: "",
        price: "",
        img: ""
    })
    const getchange = (e) => {
        setright({
            ...right,
            id: new Date().getTime().toString(),
            [e.target.name]: e.target.value
        })
    }
    const submitdata = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post("http://localhost:3000/FeaturedDestinations2", right)
            console.log(res.data)
            setright({
                id: "",
                name: "",
                type: "",
                location: "",
                tours: "",
                rating: "",
                price: "",
                img: ""
            })
            redirect("/dashbord")
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
                        <h1 className='text-uppercase'>Featured Destinations Right Side</h1>
                        {/* <p>Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat quibusdam quia assumenda numquam molestias.</p> */}
                        <nav className="breadcrumbs">
                            <ol>
                                <li><NavLink to="/dashbord">Home</NavLink></li>
                                <li className="current">Featured Destinations Right Side</li>
                            </ol>
                        </nav>
                    </div>
                </div>
                <div className="container">
                    <h1 className='text-center mt-5 mb-3'>Add Featured Destinations Right Side</h1>
                    <form action="" onSubmit={submitdata} method="post" className="php-email-form">
                        <div className="row g-3">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="text" value={right.name} onChange={getchange} className="form-control" name="name" placeholder="Enter Yours Featured Destinations Right Side Name" required />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="text" value={right.location} onChange={getchange} className="form-control" name="location" placeholder="Enter Yours Featured Destinations Right Side location" required />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="text" value={right.rating} onChange={getchange} className="form-control" name="rating" placeholder="Enter Yours Featured Destinations Right Side rating" required />
                                </div>
                            </div>
                            {/* <div className="col-md-6">
                                <div className="form-group">
                                  <input type="text"  className="form-control" name="tag" placeholder="Enter Your Featured Destinations Tag" required />
                                </div>
                              </div> */}
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="text" value={right.tours} onChange={getchange} className="form-control" name="tours" placeholder="Enter Your Featured Destinations Right Side tours" required />
                                </div>
                            </div>

                            <div className="col-12">
                                <div className="form-group">
                                    <input type="text" value={right.price} onChange={getchange} className="form-control" name="price" placeholder="Enter Your Featured Destinations Right Side Price" required />
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-group">
                                    <input type="text" value={right.type} onChange={getchange} className="form-control" name="type" placeholder="Enter Your Featured Destinations Right Side Type " required />
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-group">
                                    <input type="url" value={right.img} onChange={getchange} className="form-control" name="img" placeholder="Enter Your Featured Destinations Right Side Img Link" required />
                                </div>
                            </div>

                            <div className="col-12 text-center">
                                <div className="row">
                                    <div className="col-6">
                                        <button type="submit" className="btn btn-success" data-bs-dismiss="modal"  >Add Featured Destinations Right Side</button>
                                    </div>
                                    <div className="col-6">
                                        <button type="submit" className="btn btn-primary" data-bs-dismiss="modal" >cancle Featured Destinations Right Side</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className='text-center fs-3 text-red-600'> Don’t press the Enter key. You need to click the Update button... </div> */}

                    </form>
                </div>
            </main>



        </div >
    )
}

export default Addfeaturedright
