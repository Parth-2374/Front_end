import React, { useEffect, useState } from 'react'
import Aheader from '../Coman/Aheader'
import { Link, NavLink } from 'react-router-dom'
import axios from 'axios'

function AGallery() {
    useEffect(() => {
        adddata()
    }, [])
    const adddata = async () => {
        const res = await axios.get("http://localhost:3000/Gallery")
        console.log(res.data);
        setgallery(res.data)

    }
    const [gallery, setgallery] = useState()

    const delgallery = async (id) => {
        const res = await axios.delete(`http://localhost:3000/Gallery/${id}`)
        console.log(res.data);

        adddata()
    }

    const [singlegall, setsinglegall] = useState({
        id: "",
        name: "",
        type: "",
        img: ""
    })
    const singlegallery = async (id) => {
        const res = await axios.get(`http://localhost:3000/Gallery/${id}`)
        console.log(res.data)
        setsinglegall(res.data)

    }

    const [edit, setedit] = useState(null)

    const [edited, setedited] = useState({
        id: "",
        name: "",
        type: "",
        img: ""
    })
    const getdata = (data) => {
        console.log(data);
        setedit(data)
        setedited(data)
    }
    const getchange = (e) => {
        setedited({
            ...edited,
            [e.target.name]: e.target.value
        })
    }
    const upadtegallery = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.put(`http://localhost:3000/Gallery/${edited.id}`, edited)
            console.log(res.data);
            setedited({
                id: "",
                name: "",
                type: "",
                img: ""
            })
            setedit(null)
            adddata()

            // document.body.classList.remove("modal-open");
            // document.querySelectorAll(".modal-backdrop").forEach(el => el.remove())

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
                        <h1 className='text-uppercase'>Gallery</h1>
                        {/* <p>Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat quibusdam quia assumenda numquam molestias.</p> */}
                        <nav className="breadcrumbs">
                            <ol>
                                <li><NavLink to="/dashbord">Home</NavLink></li>
                                <li className="current">Gallery</li>
                            </ol>
                        </nav>
                    </div>
                </div>
                <h1 className='text-center mt-4'>Gallery Mangment</h1>
                
                <div className="container">
                <div className="row">
                        <div className="col-6 ">
                            <button className='btn-primary btn ms-3 text-end'><Link className='text-white' to="/agallery" >View Gallery</Link></button>

                        </div>
                        <div className="col-6  text-end">
                            <button className='bg-success btn ms-3'><Link className='text-white' to="/addgallery">Add Gallery</Link></button>

                        </div>
                    </div>
                    <table className="table ">
                        <thead>
                            <tr className='text-center'>
                                <th scope="col">Id</th>
                                <th scope="col">Img</th>
                                <th scope="col">Name</th>
                                <th scope="col">Type</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                gallery && gallery.map((data, index) => {
                                    return (
                                        <tr className='text-center' key={index}>
                                            <td>{data.id}</td>
                                            <td><img src={data.img} style={{ width: "200px" }} alt="" /></td>
                                            <td>{data.name}</td>
                                            <td>{data.type}</td>
                                            <td>
                                                <button className='btn bg-info ' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => singlegallery(data.id)}>View</button>
                                                <button className='bg-success btn ms-3' data-bs-toggle="modal" data-bs-target="#exampleModal-1" onClick={() => getdata(data)}>Edit</button>
                                                <button className='bg-danger btn ms-3 mt-3' onClick={() => delgallery(data.id)}>Delete</button>

                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>

                    <div>

                        {/* Modal */}
                        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="exampleModalLabel">Gallery</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                    </div>
                                    <div className="modal-body">
                                        <div className="container">
                                            <img src={singlegall.img} alt="" />
                                            <div>
                                                <h4 className='text-center mt-4'>{singlegall.name}</h4>
                                                <p className='text-center mt-3'>{singlegall.type}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-primary">Save changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*  edit from */}

                        {
                            edit &&
                            (
                                <div className="modal fade" id="exampleModal-1" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered  modal-xl">
                                        <div className="modal-content ">
                                            <div className="modal-header">
                                                <h1 className="modal-title fs-5" id="exampleModalLabel-1"> </h1>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                            </div>
                                            <div className="modal-body">
                                                <div className="container">
                                                    <div className="row justify-content-center mb-5" data-aos="fade-up" data-aos-delay={200}>
                                                        <div className="col-lg-10">
                                                            <div className="contact-form-wrapper">
                                                                <h2 className="text-center mb-4 mt-5">Gallery Update </h2>
                                                                <form action="" method="post" className="php-email-form">
                                                                    <div className="row g-3">
                                                                        <div className="col-md-6">
                                                                            <div className="form-group">
                                                                                Enter Yours Gallery  Name:-
                                                                                <input type="text" value={edited.name} onChange={getchange} className="form-control" name="name" placeholder="Enter Yours Gallery  Name" required />
                                                                            </div>
                                                                        </div>

                                                                        <div className="col-md-6">
                                                                            <div className="form-group">
                                                                                Enter Your Gallery Type:-
                                                                                <input type="text" value={edited.type} onChange={getchange} className="form-control" name="type" placeholder="Enter Your Gallery Type " required />
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-12">
                                                                            <div className="form-group">
                                                                                Enter Your Gallery Img Link:-
                                                                                <input type="url" value={edited.img} onChange={getchange} className="form-control" name="img" placeholder="Enter Your Gallery Img Link" required />
                                                                            </div>
                                                                        </div>

                                                                        <div className="col-12 text-center">
                                                                            <div className="row">
                                                                                <div className="col-6">
                                                                                    <button type="submit" className="btn btn-success" data-bs-dismiss="modal" onClick={upadtegallery}  >update Gallery</button>
                                                                                </div>
                                                                                <div className="col-6">
                                                                                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => setedit(null)}  >cancle Gallery</button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className='text-center fs-3 text-red-600'> Don’t press the Enter key. You need to click the Update button... </div>


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
                    </div>
                </div>
            </main>
        </div>
    )
}


export default AGallery
