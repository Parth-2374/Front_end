import React, { useState } from 'react'
import Aheader from '../Coman/Aheader'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'

function LastMinuteDeals() {
    const redirect = useNavigate()
    const [form,setform]=useState({
        id:"",
        name:"",
        type:"",
        days:"Limited time offer!",
        pr:"",
        img:""   
    })
    const getchange =(e)=>{
        setform({
            ...form,
            id:new Date().getTime().toString(),
            [e.target.name]:e.target.value
        })
    }
    const submitdata = async(e)=>{
        e.preventDefault()
        try {
            const res = await axios.post("http://localhost:3000/LastMinuteDeals",form)
            setform({
                id:"",
                name:"",
                type:"",
                days:"Limited time offer!",
                pr:"",
                img:""  
            })
            console.log(res.data);
            redirect("/toursmange")
            
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
                        <h1 className='text-uppercase'>Tour</h1>
                        {/* <p>Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat quibusdam quia assumenda numquam molestias.</p> */}
                        <nav className="breadcrumbs">
                            <ol>
                                <li><NavLink to="/dashbord">Home</NavLink></li>
                                <li className="current">Last-Minute-Deals</li>
                            </ol>
                        </nav>
                    </div>
                </div>
               
                <div className="container">
                    <div className="row justify-content-center mb-5" data-aos="fade-up" data-aos-delay={200}>
                        <div className="col-lg-10">
                            <div className="contact-form-wrapper">
                                <h2 className="text-center mb-4 mt-5">Add Last-Minute-Deals</h2>
                                <form action="" onSubmit={submitdata} method="post" className="php-email-form">
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" value={form.name} onChange={getchange} name="name" placeholder="Enter Yours Tours Name" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" value={form.pr} onChange={getchange} name="pr" placeholder="Enter Your Tours Tag" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" value={form.days} name="days" placeholder="Enter Your Tours Days" required />
                                            </div>
                                        </div>

                                        {/* <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control"  name="price" placeholder="Enter Your Tours Price" required />
                                            </div>
                                        </div> */}
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" value={form.type} onChange={getchange} name="type" placeholder="Enter Your Tours Type " required />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <input type="url" className="form-control" value={form.img} onChange={getchange} name="img" placeholder="Enter Your Tours Img Link" required />
                                            </div>
                                        </div>

                                        <div className="col-12 text-center">
                                            <button type="submit" className="btn btn-primary">Add Tours</button>
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

export default LastMinuteDeals
