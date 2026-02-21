import React, { useEffect, useState } from 'react'
import Aheader from '../Coman/Aheader'
import { Link, Links, NavLink, redirect } from 'react-router-dom'
import axios from 'axios'
import AllTours from './AllTours'

function DesDetail() {
    useEffect(() => {
        getdata()
    }, [])
    const getdata = async () => {
        const res = await axios.get("http://localhost:3000/visitattractions")
        console.log(res.data);
        setshowdata(res.data)
    }
    const [showdata, setshowdata] = useState()

    const [single, setsingle] = useState({
        id: "",
        name: "",
        type: "",
        img: ""
    })
    const viwedata = async (id) => {
        const res = await axios.get(`http://localhost:3000/visitattractions/${id}`)
        console.log(res.data)
        setsingle(res.data)
    }
    const delvisit = async (id) => {
        const res = await axios.delete(`http://localhost:3000/visitattractions/${id}`)
        console.log(res.data);
        getdata()

    }
    const [edit, setedit] = useState(null)

    const [edited, setedited] = useState({
        id: "",
        name: "",
        type: "",
        img: ""
    })
    const visitdatashow = (data) => {
        console.log(data);
        setedit(data)
        setedited(data)

    }
    const visitchange = (e) => {
        setedited({
            ...edited,
            [e.target.name]: e.target.value
        })
    }
    const visitedit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.put(`http://localhost:3000/visitattractions/${edited.id}`, edited)
            console.log(res.data);
            setedited({
                id: "",
                name: "",
                type: "",
                img: ""
            })
            setedit(null)
            getdata()

            // document.body.classList.remove("modal-open");
            // document.querySelectorAll(".modal-backdrop").forEach(el => el.remove());

        } catch (error) {

            console.log("Api Not Found", error);

        }
    }


    {/* AllTours */ }
    const [viewtous, setviewtours] = useState()

    const getalltours = async () => {
        const res = await axios.get("http://localhost:3000/availabletour")
        console.log(res.data);
        setviewtours(res.data)

    }
    useEffect(() => {
        getalltours()
    }, [])

    const [toursview, settoursview] = useState({
        id: "",
        name: "",
        type: "",
        price: "",
        hours: "",
        rating: "",
        img: ""

    })
    const viewtours = async (id) => {
        const res = await axios.get(`http://localhost:3000/availabletour/${id}`)
        console.log(res.data);
        settoursview(res.data)


    }

    const deltours = async (id) => {
        const res = await axios.delete(`http://localhost:3000/availabletour/${id}`)
        console.log(res.data)
        getalltours()

    }

    const [edittours, setedittours] = useState(null)

    const [edittoursed, setedittoursed] = useState({
        id: "",
        name: "",
        type: "",
        price: "",
        hours: "",
        rating: "",
        img: ""
    })
    const gettoursdata = (data) => {
        console.log(data);
        setedittours(data)
        setedittoursed(data)

    }

    const changetours = (e) => {
        setedittoursed({
            ...edittoursed,
            [e.target.name]: e.target.value
        })
    }

    const updatetours = async (e) => {
        e.preventDefault()

        try {
            const res = await axios.put(`http://localhost:3000/availabletour/${edittoursed.id}`, edittoursed)
            console.log(res.data)
            setedittoursed({
                id: "",
                name: "",
                type: "",
                price: "",
                hours: "",
                rating: "",
                img: ""
            })
            setedittours(null)
            getalltours()


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
                        <h1 className='text-uppercase'>Destination Details</h1>
                        {/* <p>Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat quibusdam quia assumenda numquam molestias.</p> */}
                        <nav className="breadcrumbs">
                            <ol>
                                <li><NavLink to="/dashbord">Home</NavLink></li>
                                <li className="current">Destination Details</li>
                            </ol>
                        </nav>
                    </div>
                </div>
                <h1 className='text-center mt-4'>Destination Details Mangment </h1>
                <div className="container">
                <div className="row">
                        <div className="col-6 ">
                            <button className='btn-primary btn ms-3 text-end'><Link className='text-white' to="/adel-detail" >View Destination Details</Link></button>

                        </div>
                        <div className="col-6  text-end">
                            <button className='bg-success btn ms-3'><Link className='text-white' to="/addmustvisitattractions">Add Destination Details</Link></button>

                        </div>
                    </div>
                    <table className="table">
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
                                showdata && showdata.map((data, index) => {
                                    return (
                                        <tr className='text-center ' key={index}>
                                            <td>{data.id}</td>
                                            <td><img src={data.img} style={{ width: "200px" }} alt="" /></td>
                                            <td>{data.name}</td>
                                            <td>{data.type}</td>
                                            <td>
                                                <button className='btn bg-info ' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => viwedata(data.id)} >View</button>
                                                <button className='bg-success btn ms-3' data-bs-toggle="modal" data-bs-target="#exampleModal-1" onClick={() => visitdatashow(data)} >Edit</button>
                                                <button className='bg-danger btn ms-3 mt-3' onClick={() => delvisit(data.id)}>Delete</button>

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
                                        <h1 className="modal-title fs-5" id="exampleModalLabel">Destination Details </h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                    </div>
                                    <div className="modal-body">
                                        <div className="container">
                                            <img src={single.img} alt="" />
                                            <h4 className='text-center mt-4 '>{single.name} </h4>
                                            <p className='text-center mt-4 '> {single.type} </p>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-primary">Save changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {
                        edit && (
                            <div className="modal fade" id="exampleModal-1" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-xl">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5" id="exampleModalLabel">Destination Details </h1>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                        </div>
                                        <div className="modal-body">
                                            <h2 className="text-center mb-4">Update Destination Details</h2>
                                            <form action="" method="post" className="php-email-form">
                                                <div className="row g-3">
                                                    <div className="col-12 mb-3 mt-4">
                                                        <div className="form-group">
                                                            <input type="text" value={edited.name} onChange={visitchange} className="form-control" name="name" placeholder="Enter Yours Destination Details Name" required />
                                                        </div>
                                                    </div>
                                                    {/* <div className="col-md-6">
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" name="tag" placeholder="Enter Your Tours Tag" required />
                                                        </div>
                                                    </div> */}
                                                    {/* <div className="col-md-6">
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" name="days" placeholder="Enter Your Tours Days" required />
                                                        </div>
                                                    </div> */}

                                                    {/* <div className="col-md-6">
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" name="price" placeholder="Enter Your Tours Price" required />
                                                        </div>
                                                    </div> */}
                                                    <div className="col-12 mb-3">
                                                        <div className="form-group">
                                                            <input type="text" value={edited.type} onChange={visitchange} className="form-control" name="type" placeholder="Enter Your Destination Details Type " required />
                                                        </div>
                                                    </div>
                                                    <div className="col-12 ">
                                                        <div className="form-group">
                                                            <input type="url" value={edited.img} onChange={visitchange} className="form-control" name="img" placeholder="Enter Your Destination Details Img Link" required />
                                                        </div>
                                                    </div>

                                                    <div className="col-12 text-center">
                                                        <div className="row">
                                                            <div className="col-6">
                                                                <button type="button" className="btn btn-success" onClick={visitedit}  data-bs-dismiss="modal">
                                                                    Update Tours
                                                                </button>
                                                            </div>
                                                            <div className="col-6">
                                                                <button type="submit" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => setedit(null)}  >cancle Destination Details</button>
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
                        )
                    }



                </div>
                {/* availabletour */}
                <h1 className='text-center mt-5'>All Available Tours & Experiences </h1>
                <div className="container">
                <div className="row">
                        <div className="col-6 ">
                            <button className='btn-primary btn ms-3 text-end'><Link className='text-white' to="/adel-detail" >View Available Tours & Experiences</Link></button>

                        </div>
                        <div className="col-6  text-end">
                            <button className='bg-success btn ms-3'><Link className='text-white' to="/addavailabletour">Add Available Tours & Experiences</Link></button>

                        </div>
                    </div>
                    <table className="table">
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
                                viewtous && viewtous.map((data, index) => {
                                    return (
                                        <tr className='text-center' key={index}>
                                            <td>{data.id}</td>
                                            <td><img src={data.img} style={{ width: "200px" }} alt="" /></td>
                                            <td>{data.name}</td>
                                            <td>{data.type}</td>
                                            <td>
                                                <button className='btn bg-info ' data-bs-toggle="modal" data-bs-target="#exampleModal-2" onClick={() => viewtours(data.id)} >View</button>
                                                <button className='bg-success btn ms-3' data-bs-toggle="modal" data-bs-target="#exampleModal-4" onClick={() => gettoursdata(data)} >Edit</button>
                                                <button className='bg-danger btn ms-3 mt-3' onClick={() => deltours(data.id)}>Delete</button>

                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    {/* View Modal */}
                    <div className="modal fade" id="exampleModal-2" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">All Tours Details </h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                </div>
                                <div className="modal-body">
                                    <div className="container row">
                                        <img src={toursview.img} alt="" />
                                        <h4 className='text-center mt-4 '> {toursview.name}</h4>
                                        <p className='text-center mt-4 '> {toursview.type} </p>
                                        <p className='col-4 text-center '>Price $ :-{toursview.price}</p>
                                        <p className='col-6 text-center'><i className="bi bi-clock" /> Hours :-{toursview.hours}</p>
                                        <p className='col-2 rating  text-center '><i className="bi bi-star-fill" /> {toursview.rating}</p>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Edit Modal */}
                    {
                        edittours && (
                            <div className="modal fade" id="exampleModal-4" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-xl">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5" id="exampleModalLabel">All Tours Details </h1>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                        </div>
                                        <div className="modal-body">

                                            <div className="container">
                                                <div className="row justify-content-center mb-5" data-aos="fade-up" data-aos-delay={200}>
                                                    <div className="col-lg-10">
                                                        <div className="contact-form-wrapper">
                                                            <h2 className="text-center mb-4 mt-5">Add Available Tours & Experiences</h2>
                                                            <form action="" method="post" className="php-email-form">
                                                                <div className="row g-3">
                                                                    <div className="col-md-6">
                                                                        <div className="form-group">
                                                                            <input type="text" value={edittoursed.name} onChange={changetours} className="form-control" name="name" placeholder=" Enter Your Available Tours & Experiences Name" required />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6">
                                                                        <div className="form-group">
                                                                            <input type="text" value={edittoursed.hours} onChange={changetours} className="form-control" name="hours" placeholder="Enter Your Available Tours & Experiences hours" required />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6">
                                                                        <div className="form-group">
                                                                            <input type="text" value={edittoursed.rating} onChange={changetours} className="form-control" name="rating" placeholder="Enter Your Available Tours & Experiences available Rating" required />
                                                                        </div>
                                                                    </div>

                                                                    <div className="col-md-6">
                                                                        <div className="form-group">
                                                                            <input type="text" value={edittoursed.price} onChange={changetours} className="form-control" name="price" placeholder="Enter Your Available Tours & Experiences Price" required />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-12">
                                                                        <div className="form-group">
                                                                            <input type="text" value={edittoursed.type} onChange={changetours} className="form-control" name="type" placeholder="Enter Your Available Tours & Experiences Type " required />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-12">
                                                                        <div className="form-group">
                                                                            <input type="url" value={edittoursed.img} onChange={changetours} className="form-control" name="img" placeholder="Enter Your Available Tours & Experiences Img Link" required />
                                                                        </div>
                                                                    </div>

                                                                    <div className="col-12 text-center">
                                                                        <div className="row">
                                                                            <div className="col-6">
                                                                                <button type="button"className="btn btn-success" onClick={updatetours}  data-bs-dismiss="modal" >
                                                                                    Update Available Tours & Experiences
                                                                                </button>
                                                                            </div>
                                                                            <div className="col-6">
                                                                                <button type="submit" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => setedittours(null)}  >cancle Available Tours & Experiences</button>
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
                </div>

            </main>

        </div>
    )
}

export default DesDetail
