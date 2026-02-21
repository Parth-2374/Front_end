import React, { useEffect, useState } from 'react'
import Aheader from '../Coman/Aheader'
import { Link, NavLink } from 'react-router-dom'
import axios from 'axios'
import { data } from 'isotope-layout'

function Ades() {
    const [des, setdes] = useState([])
    useEffect(() => {
        desapi()
    }, [])
    const desapi = async () => {
        try {
            const res = await axios.get("http://localhost:3000/Destination")
            // console.log(res.data);
            setdes(res.data)

        } catch (error) {
            console.log("api not found", error)
        }
    }
    // modal 
    const [single, setsingle] = useState({
        id: "",
        name: "",
        type: "",
        tag: "",
        available: "",
        price: "",
        img: ""
    })
    const getdesapi = async (id) => {
        try {
            const res = await axios.get(`http://localhost:3000/Destination/${id}`)
            // console.log(res.data)
            setsingle(res.data)

        } catch (error) {
            console.log("Api Not Found", error);

        }
    }
    const del = async (id) => {
        const res = await axios.delete(`http://localhost:3000/Destination/${id}`)
        // console.log(res.data)
        desapi()

    }
    const [edit, setedit] = useState(null)

    const [edited, setedited] = useState({
        id: "",
        name: "",
        type: "",
        tag: "",
        available: "",
        price: "",
        img: ""
    })
    const getdata = (data) => {
        // console.log(data)
        setedit(data)
        setedited(data)

    }
    const editchange = (e) => {
        setedited({
            ...edited,
            [e.target.name]: e.target.value
        })
    }
    const editupdate = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.put(`http://localhost:3000/Destination/${edited.id}`, edited)
            setedited({
                id: "",
                name: "",
                type: "",
                tag: "",
                available: "",
                price: "",
                img: ""
            })
            setedit(null)
            desapi()

           
            // document.body.classList.remove("modal-open");
            // document.querySelectorAll(".modal-backdrop").forEach(el => el.remove());
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
                    <h1 className='text-center mt-5 mb-5'> Destination Mangment</h1>
                    <div className="row">
                        <div className="col-6 ">
                            <button className='btn-primary btn ms-3 text-end'><Link className='text-white' to="/Adestinations" >View Destination</Link></button>

                        </div>
                        <div className="col-6  text-end">
                            <button className='bg-success btn ms-3'><Link className='text-white' to="/Adddestinations">Add Destination</Link></button>

                        </div>
                    </div>
                    <table className="table">
                        <thead>
                            <tr className='text-center'>
                                <th scope="col">Id</th>
                                <th scope="col">Img</th>
                                <th scope="col">Name</th>
                                {/* <th scope="col">Price</th> */}
                                <th scope="col">Type</th>
                                <th scope="col" className='text-center'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                des && des.map((data, index) => {
                                    return (
                                        <tr className='text-center' key={index}>
                                            <td>{data.id}</td>
                                            <td><img src={data.img} style={{ width: "200px" }} alt="" /></td>
                                            <td>{data.name}</td>
                                            {/* <td>{data.price}</td> */}
                                            <td>{data.type}</td>
                                            <td  >
                                                <button className='btn bg-info ' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => getdesapi(data.id)}>View</button>
                                                <button className='bg-success btn ms-3'data-bs-toggle="modal" data-bs-target="#exampleModal-1" onClick={() => getdata(data)} >Edit</button>
                                                <button className='bg-danger btn ms-3 mt-3' onClick={() => del(data.id)}>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                    </table>

                </div>


                {/* Modal */}
                <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Destination</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                <div className="room-card">
                                    <div className="room-image">
                                        <img src={single.img} alt="" className="img-fluid" />
                                        <div className="room-features">
                                            <span className="feature-badge ocean"></span>
                                            {/* <span className="feature-badge popular">Popular</span> */}
                                        </div>
                                    </div>
                                    <div className="room-content">
                                        <div className="room-header mt-3 mb-4">
                                            <h3 className='text-center'>{single.name}</h3>

                                        </div>
                                        <p className="room-description text-center">{single.type}</p>
                                        <div className="room-amenities text-center">

                                            <span >Person:-{single.available} </span>
                                            <span className="price-amount ms-4">From $ {single.price} </span>
                                        </div>


                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            <button type="button" className="btn btn-primary">Save changes</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {
                    edit && (
                        <div className="modal fade" id="exampleModal-1" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered  modal-xl">
                                <div className="modal-content ">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="exampleModalLabel-1"></h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                    </div>
                                    <div className="modal-body">
                                    <div className="container">
                            <div className="row justify-content-center mb-5" data-aos="fade-up" data-aos-delay={200}>
                                <div className="col-lg-10">
                                    <div className="contact-form-wrapper">
                                        <h2 className="text-center mb-4 mt-5">update destinations</h2>
                                        <form action="" method="post" className="php-email-form">
                                            <div className="row g-3">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <input type="text" value={edited.name} onChange={editchange} className="form-control" name="name" placeholder=" Enter Your Destinations Name" required />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <input type="text" value={edited.tag} onChange={editchange}className="form-control" name="tag" placeholder="Enter Your Destinations Tag" required />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <input type="text" value={edited.available}onChange={editchange} className="form-control" name="available" placeholder="Enter Your Destinations available Person" required />
                                                    </div>
                                                </div>

                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <input type="text" value={edited.price}onChange={editchange} className="form-control" name="price" placeholder="Enter Your Destinations Price" required />
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <input type="text" value={edited.type}onChange={editchange} className="form-control" name="type" placeholder="Enter Your Destinations Type " required />
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <input type="url" value={edited.img}onChange={editchange} className="form-control" name="img" placeholder="Enter Your Destinations Img Link" required />
                                                    </div>
                                                </div>

                                                <div className="col-12 text-center">
                                                    <div className="row">
                                                        <div className="col-6">
                                                            <button type="submit" data-bs-dismiss="modal" className="btn btn-success"onClick={editupdate} >update Rooms</button>
                                                        </div>
                                                        <div className="col-6">
                                                            <button type="submit" className="btn btn-primary" data-bs-dismiss="modal"  onClick={()=>setedit(null)}>cancle Rooms</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='text-center fs-3 text-red-600'> Don’t press the Enter key. You need to click the Update button... </div>

                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                                        
                                    </div>

                                </div>
                            </div>
                        </div>
                     
                    )
                }


            </main>

        </div>
    )
}

export default Ades
