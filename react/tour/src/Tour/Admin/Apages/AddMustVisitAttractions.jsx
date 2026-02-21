import React, { useState } from 'react'
import Aheader from '../Coman/Aheader'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'

function AddMustVisitAttractions() {
    const redirect =useNavigate()

    const[visit,setvisit]=useState({
        id:"",
        name:"",
        type:"",
        img:""
    })

    const getchange = (e)=>{
        setvisit({
            ...visit,
            id :new Date().getTime().toString(),
            [e.target.name]:e.target.value
        })
    }
    const addvisit= async(e)=>{
        e.preventDefault()
        try {
            const res = await axios.post(`http://localhost:3000/visitattractions`,visit)
            setvisit({
                id:"",
                name:"",
                type:"",
                img:""
            })
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
                        <h1 className='text-uppercase'>Must-Visit Attractions</h1>
                        {/* <p>Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat quibusdam quia assumenda numquam molestias.</p> */}
                        <nav className="breadcrumbs">
                            <ol>
                                <li><NavLink to="/dashbord">Home</NavLink></li>
                                <li className="current">Must-Visit Attractions</li>
                            </ol>
                        </nav>
                    </div>
                </div>
                {/* <h1 className='text-center mt-4'>Hello</h1> */}
                <div className="container">
                    <div className="row justify-content-center mb-5" data-aos="fade-up" data-aos-delay={200}>
                        <div className="col-lg-10">
                            <div className="contact-form-wrapper">
                                <h2 className="text-center mb-4 mt-5">Add Must-Visit Attractions</h2>
                                <form action="" onSubmit={addvisit} method="post" className="php-email-form">
                                    <div className="row g-3">
                                        <div className="col-12">
                                            <div className="form-group">
                                                <input type="text" value={visit.name} onChange={getchange}  className="form-control" name="name" placeholder=" Enter Your Must-Visit Attractions Name" required />
                                            </div>
                                        </div>
                                        {/* <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="hours" placeholder="Enter Your Available Tours & Experiences hours" required />
                                            </div>
                                        </div> */}
                                        {/* <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="rating" placeholder="Enter Your Available Tours & Experiences available Rating" required />
                                            </div>
                                        </div> */}

                                        {/* <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="text"  className="form-control" name="price" placeholder="Enter Your Available Tours & Experiences Price" required />
                                            </div>
                                        </div> */}
                                        <div className="col-12">
                                            <div className="form-group">
                                                <input type="text" value={visit.type} onChange={getchange} className="form-control" name="type" placeholder="Enter Your Must-Visit Attractions Type " required />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <input type="url" value={visit.img} onChange={getchange} className="form-control" name="img" placeholder="Enter Your Must-Visit Attractions Img Link" required />
                                            </div>
                                        </div>

                                        <div className="col-12 text-center">
                                            <button type="submit" className="btn btn-primary">Add Must-Visit Attractions</button>
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

export default AddMustVisitAttractions
