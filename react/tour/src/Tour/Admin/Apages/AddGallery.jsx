import React, { useState } from 'react'
import Aheader from '../Coman/Aheader'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'

function AddGallery() {
    const redirect = useNavigate()
    const [edit,setedit]=useState({
        id:"",
        name:"",
        type:"",
        img:""
    })
    const gtetchange=(e)=>{
        setedit({
            ...edit,
            id: new Date().getTime().toString(),
            [e.target.name]:e.target.value
        })
    }
    const addgallery= async(e)=>{
        e.preventDefault()
        try {
            const res =await axios.post("http://localhost:3000/Gallery",edit)
            console.log(res.data);
            setedit({
                id:"",
                name:"",
                type:"",
                img:""
            })
            
            redirect("/agallery")
        } catch (error) {
            console.log("APi Not Found",error)
        }
    }
    return (
        <div>
            <Aheader />
            <main className="main">
                {/* Page Title */}
                <div className="page-title dark-background" data-aos="fade" style={{ backgroundImage: 'url(assets/img/travel/showcase-8.webp)' }}>
                    <div className="container position-relative">
                        <h1 className='text-uppercase'>Gallery</h1>
                        {/* <p>Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat quibusdam quia assumenda numquam molestias.</p> */}
                        <nav className="breadcrumbs">
                            <ol>
                                <li><NavLink to="/dashbord">Home</NavLink></li>
                                <li className="current">Add Gallery</li>
                            </ol>
                        </nav>
                    </div>
                </div>
                <h1 className='text-center mt-4'>Add Gallery</h1>
                
               <div className="container mt-4">
               <form action="" onSubmit={addgallery} method="post" className="php-email-form">
                    <div className="row g-3">
                        <div className="col-12">
                            <div className="form-group">
                                Enter Yours Gallery  Name:-
                                <input type="text" value={edit.name} onChange={gtetchange}  className="form-control" name="name" placeholder="Enter Yours Gallery  Name" required />
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="form-group">
                                Enter Your Gallery Type:-
                                <input type="text" value={edit.type}  onChange={gtetchange}  className="form-control" name="type" placeholder="Enter Your Gallery Type " required />
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-group">
                                Enter Your Gallery Img Link:-
                                <input type="url" className="form-control" value={edit.img}  onChange={gtetchange} name="img" placeholder="Enter Your Gallery Img Link" required />
                            </div>
                        </div>

                        <div className="col-12 text-center mt-5 mb-5">
                            <div className="row">
                                <div className="col-6">
                                    <button type="submit" className="btn btn-success" >Add Gallery</button>
                                </div>
                              
                            </div>
                        </div>
                    </div>

                </form>
               </div>
            </main>
        </div>
    )
}

export default AddGallery
