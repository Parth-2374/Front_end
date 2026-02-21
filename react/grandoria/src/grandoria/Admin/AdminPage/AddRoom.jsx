import React, { useState } from 'react'
import AdminHeader from '../AdminComan/AdminHeader'
import axios from 'axios'
import { useNavigate } from 'react-router'

function AddRoom() {

    const redirect =useNavigate()

    const [room,setroom]=useState({
        id:"",
        name:"",
        guest:"",
        price:"",
        type:"",
        img:""
    })
     
    const formchange=(e)=>{
        setroom({
            ...room,
            id: new Date().getTime().toString(),
            [e.target.name]:e.target.value
        })
    }

    const addroomdata =async(e)=>{
        e.preventDefault()
        try {
            const res=await axios.post("http://localhost:3000/rooms",room)
            setroom({
                id:"",
                name:"",
                guest:"",
                price:"",
                type:"",
                img:""
            })
            redirect("/mangeroom")
        } catch (error) {
            console.log("Api Not Found...",error)
        }
    }
    

    return (

        <div>
            <AdminHeader />
            <h1 className='text-center mt-5 mb-5'>This A Add Room </h1>
            <div className="container">
                <div className="row justify-content-center mb-5" data-aos="fade-up" data-aos-delay={200}>
                    <div className="col-lg-10">
                        <div className="contact-form-wrapper">
                            <h2 className="text-center mb-4">Send a Message</h2>
                            <form action=""  onSubmit={addroomdata} method="post" className="php-email-form">
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="text" value={room.name} onChange={formchange} className="form-control" name="name" placeholder="Your Name" required />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="text" value={room.type}onChange={formchange}  className="form-control" name="type" placeholder="Enter Your Room Type" required />
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="form-group">
                                            <select className="form-select" value={room.guest} onChange={formchange} id="" name="guest" required>
                                                <option value >Choose guests</option>
                                                <option value={1}>1 guests</option>
                                                <option value={2}>2 guests</option>
                                                <option value={3}>3 guests</option>
                                                <option value={4}>4 guests</option>
                                                <option value={5}>5 guests</option>
                                                <option value={6}>6 guests</option>
                                                <option value={7}>7 guests</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="text" value={room.price} onChange={formchange} className="form-control" name="price" placeholder="Enter Your Price" required />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <input type="url" value={room.img} onChange={formchange} className="form-control" name="img" placeholder="Enter Your Img Link" required />
                                        </div>
                                    </div>
                                    {/* <div className="col-12">
                                        <div className="form-group">
                                            <textarea className="form-control" name="message" placeholder="Your Message" rows={6} required defaultValue={""} />
                                        </div>
                                    </div> */}
                                    {/* <div className="col-12">
                                        <div className="loading">Loading</div>
                                        <div className="error-message" />
                                        <div className="sent-message">Your message has been sent. Thank you!</div>
                                    </div> */}
                                    <div className="col-12 text-center">
                                        <button type="submit" className="btn btn-primary">Add Rooms</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AddRoom
