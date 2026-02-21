import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Aheader from '../Coman/Aheader'
import axios from 'axios'

function Addfeatutretours() {
    const redirect = useNavigate()
    const [tours, settours] = useState({
        id: "",
        name: "",
        type: "",
        days: "",
        maxperson: "",
        tag: "",
        price: "",
        rating: "",
        chekrating:"",
        tourhighlights1: "",
        tourhighlights2: "",
        tourhighlights3: "",
        img: ""
    })
    const getchange = (e) => {
        settours({
            ...tours,
            id: new Date().getTime().toString(),
            [e.target.name]: e.target.value
        })
    }
    const submitdata = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post("http://localhost:3000/FeaturedToursHome", tours)
            console.log(res.data)
            settours({
                id: "",
                name: "",
                type: "",
                days: "",
                maxperson: "",
                tag: "",
                price: "",
                rating: "",
                chekrating:"",
                tourhighlights1: "",
                tourhighlights2: "",
                tourhighlights3: "",
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
                        <h1 className='text-uppercase'>Featured Tours</h1>
                        {/* <p>Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat quibusdam quia assumenda numquam molestias.</p> */}
                        <nav className="breadcrumbs">
                            <ol>
                                <li><NavLink to="/dashbord">Home</NavLink></li>
                                <li className="current">Featured Tours</li>
                            </ol>
                        </nav>
                    </div>
                </div>
                <div className="container">
                    <h2 className="text-center mb-4 mt-5">Update Featured Tours</h2>
                    <form action="" onSubmit={submitdata} method="post" className="php-email-form">
                        <div className="row g-3">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="text" value={tours.name} onChange={getchange} className="form-control" name="name" placeholder="Enter Yours Featured Tours Name" required />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="text" value={tours.days} onChange={getchange} className="form-control" name="days" placeholder="Enter Yours Featured Tours Days" required />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <input type="text" value={tours.rating} onChange={getchange} className="form-control" name="rating" placeholder="Enter Yours Featured Tours Rating" required />
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="form-group">
                                    <input type="text" value={tours.chekrating} onChange={getchange} className="form-control" name="chekrating" placeholder="Enter Yours Featured Tours chekrating" required />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="text" value={tours.tag} onChange={getchange} className="form-control" name="tag" placeholder="Enter Your Featured Tours Tag" required />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="text" value={tours.price} onChange={getchange} className="form-control" name="price" placeholder="Enter Your Featured Tours Price" required />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="text" value={tours.maxperson} onChange={getchange} className="form-control" name="maxperson" placeholder="Enter Your Featured Tours Max-Person" required />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <input type="text" value={tours.tourhighlights1} onChange={getchange} className="form-control" name="tourhighlights1" placeholder="Enter Your Featured Tours tourhighlights1" required />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <input type="text" value={tours.tourhighlights2} onChange={getchange} className="form-control" name="tourhighlights2" placeholder="Enter Your Featured Tours tourhighlights2" required />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <input type="text" value={tours.tourhighlights3} onChange={getchange} className="form-control" name="tourhighlights3" placeholder="Enter Your Featured Tours tourhighlights3" required />
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-group">
                                    <input type="text" value={tours.type} onChange={getchange} className="form-control" name="type" placeholder="Enter Your Featured Tours Type " required />
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-group">
                                    <input type="url" value={tours.img} onChange={getchange} className="form-control" name="img" placeholder="Enter Your Featured Tours Img Link" required />
                                </div>
                            </div>

                            <div className="col-12 text-center">
                                <div className="row">
                                    <div className="col-6">
                                        <button type="submit" className="btn btn-success" >Add Featured Tours</button>
                                    </div>
                                    <div className="col-6">
                                        <button type="submit" className="btn btn-primary">cancle Featured Tours</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className='text-center fs-3 text-red-600'> Don’t press the Enter key. You need to click the Update button... </div> */}

                    </form>
                </div>
            </main>
        </div>
    )
}

export default Addfeatutretours
