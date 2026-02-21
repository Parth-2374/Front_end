import React, { useEffect, useState } from 'react'
import Aheader from '../Coman/Aheader'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'

function AdesAdd() {
    const redirect=useNavigate()
    const [desti,setdesti]=useState({
        id:"",
        name:"",
        type:"",
        tag:"",
        available:"",
        price:"",
        img:""
    })
    const getchange=(e)=>{
        setdesti({
            ...desti,
            id: new Date().getTime().toString(),
            [e.target.name]:e.target.value
        })
    }
   
    const getdata= async(e)=>{
        e.preventDefault()
        try {
            const res = await axios.post("http://localhost:3000/destination",desti)
            console.log(res.data);
            setdesti({
                id:"",
                name:"",
                type:"",
                tag:"",
                available:"",
                price:"",
                img:""
            })
            redirect("/Adestinations")
            
            
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
                        <h1 className='text-uppercase'>Destinations</h1>
                        {/* <p>Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat quibusdam quia assumenda numquam molestias.</p> */}
                        <nav className="breadcrumbs">
                            <ol>
                                <li><NavLink to="/dashbord">Home</NavLink></li>
                                <li className="current">destinations</li>
                            </ol>
                        </nav>
                    </div>
                </div>

                <div className="container">
                    <div className="row justify-content-center mb-5" data-aos="fade-up" data-aos-delay={200}>
                        <div className="col-lg-10">
                            <div className="contact-form-wrapper">
                                <h2 className="text-center mb-4 mt-5">Add destinations</h2>
                                <form action="" onSubmit={getdata} method="post" className="php-email-form">
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="text" value={desti.name} onChange={getchange} className="form-control" name="name" placeholder=" Enter Your Destinations Name" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="text" value={desti.tag}onChange={getchange}  className="form-control" name="tag" placeholder="Enter Your Destinations Tag" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="text"value={desti.available}onChange={getchange}  className="form-control" name="available" placeholder="Enter Your Destinations available Person" required />
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="text" value={desti.price}onChange={getchange}  className="form-control" name="price" placeholder="Enter Your Destinations Price" required />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <input type="text"value={desti.type}onChange={getchange}  className="form-control" name="type" placeholder="Enter Your Destinations Type " required />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <input type="url" value={desti.img}onChange={getchange}  className="form-control" name="img" placeholder="Enter Your Destinations Img Link" required />
                                            </div>
                                        </div>
                                       
                                        <div className="col-12 text-center">
                                            <button type="submit" className="btn btn-primary">Add Destinations</button>
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

export default AdesAdd
