import React, { useState } from 'react'
import Aheader from '../Coman/Aheader'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Addavailabletours() {
    const redirect = useNavigate()

    const [ addtours, setaddtours]=useState({
        id:"",
        name:"",
        type:"",
        price:"",
        hours:"",
        rating:"",
        img:""

    })

    const getchange =(e)=>{
        setaddtours({
            ...addtours,
            id:new Date().getTime().toString(),
            [e.target.name]:e.target.value
        })
    }
    const newtours =async (e)=>{
        e.preventDefault()
        try {
            const res = await axios.post(`http://localhost:3000/availabletour`,addtours)
            console.log(res.data);
            setaddtours(res.data)


            redirect("/adel-detail")
            
        } catch (error) {
            console.log("Api Not Found",error);
            
        }
    }
    return (
        <div>
            <Aheader />

            <main className="main">
                {/* Page Title */}
                <div className="page-title dark-background" data-aos="fade" style={{ backgroundImage: 'url(assets/img/travel/showcase-8.webp)' }}>
                    <div className="container position-relative">
                        <h1 className='text-uppercase'>Available Tours & Experiences</h1>
                        {/* <p>Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat quibusdam quia assumenda numquam molestias.</p> */}
                        <nav className="breadcrumbs">
                            <ol>
                                <li><NavLink to="/dashbord">Home</NavLink></li>
                                <li className="current">Available Tours & Experiences</li>
                            </ol>
                        </nav>
                    </div>
                </div>
                {/* <h1 className='text-center mt-4'>Hello</h1> */}

                <div className="container">
                    <div className="row justify-content-center mb-5" data-aos="fade-up" data-aos-delay={200}>
                        <div className="col-lg-10">
                            <div className="contact-form-wrapper">
                                <h2 className="text-center mb-4 mt-5">Add Available Tours & Experiences</h2>
                                <form action="" onSubmit={newtours} method="post" className="php-email-form">
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="text" value={addtours.name} onChange={getchange} className="form-control" name="name" placeholder=" Enter Your Available Tours & Experiences Name" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="text" value={addtours.hours} onChange={getchange}  className="form-control" name="hours" placeholder="Enter Your Available Tours & Experiences hours" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="text" value={addtours.rating} onChange={getchange}  className="form-control" name="rating"  placeholder="Enter Your Available Tours & Experiences available Rating" required />
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="text" value={addtours.price} onChange={getchange}  className="form-control" name="price" placeholder="Enter Your Available Tours & Experiences Price" required />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <input type="text" value={addtours.type} onChange={getchange}  className="form-control" name="type" placeholder="Enter Your Available Tours & Experiences Type " required />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <input type="url" value={addtours.img} onChange={getchange}  className="form-control" name="img" placeholder="Enter Your Available Tours & Experiences Img Link" required />
                                            </div>
                                        </div>
                                       
                                        <div className="col-12 text-center">
                                            <button type="submit" className="btn btn-primary">Add Available Tours & Experiences</button>
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

export default Addavailabletours
