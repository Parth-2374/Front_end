import React, { useEffect, useState } from 'react'
import Aheader from '../Coman/Aheader'
import { Link, NavLink } from 'react-router-dom'
import axios from 'axios'
import { data } from 'isotope-layout'


function ToursMange() {
    const [tours, settours] = useState()
    useEffect(() => {
        toursapi()

    }, [])
    const toursapi = async () => {
        try {
            const res = await axios.get("http://localhost:3000/FeaturedTours")
            // console.log(res.data)
            settours(res.data)

        } catch (error) {
            console.log("Api Not Found", error);

        }
    }
    const del = async (id) => {
        const res = await axios.delete(`http://localhost:3000/FeaturedTours/${id}`)
        // console.log(res.data)
        toursapi()

    }
    const [single, setsingle] = useState({
        id: "",
        name: "",
        type: "",
        tag: "",
        days: "",
        price: "",
        img: ""
    })
    const getsingle = async (id) => {
        try {
            const res = await axios.get(`http://localhost:3000/FeaturedTours/${id}`)
            setsingle(res.data)

        } catch (error) {
            console.log("Api Not Found", error);

        }
    }

    const [edit, setedit] = useState(null)

    const [edited, setedited] = useState({
        id: "",
        name: "",
        type: "",
        tag: "",
        days: "",
        price: "",
        img: ""
    })
    const getdata = (data) => {
        // console.log(data)
        setedit(data)
        setedited(data)
    }
    const getchange = (e) => {
        setedited({
            ...edited,
            [e.target.name]: e.target.value
        })
    }
    const upadtechange = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.put(`http://localhost:3000/FeaturedTours/${edited.id}`, edited)
            // console.log(res.data)
            setedited({
                id: "",
                name: "",
                type: "",
                tag: "",
                days: "",
                price: "",
                img: ""
            })
            setedit(null)
            toursapi()
            // document.body.classList.remove("modal-open");
            // document.querySelectorAll(".modal-backdrop").forEach(el => el.remove());

        } catch (error) {
            console.log("Api Not Found", error);

        }
    }

    /* { Last-Minute Deals Mangment Start } */
    useEffect(() => {
        getLastMinutesDeals()
    }, [])

    const [deals, setdeals] = useState()

    const getLastMinutesDeals = async () => {
        const res = await axios.get("http://localhost:3000/LastMinuteDeals")
        // console.log(res.data);
        setdeals(res.data)
    }
    const deldata = async (id) => {
        try {
            const res = await axios.delete(`http://localhost:3000/LastMinuteDeals/${id}`)
            console.log(res.data);
            getLastMinutesDeals()
        } catch (error) {
            console.log("Api Not Found", error);


        }
    }

    const [dedata, setdedata] = useState({

        id: "",
        name: "",
        type: "",
        days: "",
        tag: "",
        img: ""
    })
    const viewdeals = async (id) => {
        try {
            const res = await axios.get(`http://localhost:3000/LastMinuteDeals/${id}`)
            setdedata(res.data)

        } catch (error) {
            console.log("Api Not Found", error);

        }
    }

    const [deedit, setdeedit] = useState(null)

    const [deedited, setdeedited] = useState({
        id: "",
        name: "",
        type: "",
        days: "",
        tag: "",
        img: ""
    })
    const dealsdata = (item) => {
        console.log(item);
        setdeedit(item)
        setdeedited(item)

    }
    const dealschange = (e) => {
        setdeedited({
            ...deedited,
            [e.target.name]: e.target.value
        })
    }
    const updatedeals = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.put(`http://localhost:3000/LastMinuteDeals/${deedited.id}`, deedited)
            setdeedited({
                id: "",
                name: "",
                type: "",
                days: "",
                tag: "",
                img: ""

            })
            setdeedit(null)
            getLastMinutesDeals()

            // document.body.classList.remove("modal-open");
            // document.querySelectorAll(".modal-backdrop").forEach(el => el.remove());

        } catch (error) {
            console.log("Api Not Found", error);

        }
    }
    /* { Last-Minute Deals Mangment End } */

    {/* All Tours  Start*/ }
    const [alltours, setalltours] = useState()

    useEffect(() => {
        getalltours()
    }, [])

    const getalltours = async () => {
        const res = await axios.get("http://localhost:3000/Alltours")
        console.log(res.data)
        setalltours(res.data)

    }
    const delalltours = async (id) => {
        const res = await axios.delete(`http://localhost:3000/Alltours/${id}`)
        console.log(res.data)
        getalltours()
    }

    const [allsingle, setallsingle] = useState({
        id: "",
        name: "",
        price: "",
        type: "",
        days: "",
        rating: "",
        reviews: "",
        img: ""
    })
    const viewall = async (id) => {
        const res = await axios.get(`http://localhost:3000/Alltours/${id}`)
        setallsingle(res.data)
    }
    const [alledit, setalledit] = useState(null)

    const [alledited, setalledited] = useState({
        id: "",
        name: "",
        price: "",
        type: "",
        days: "",
        rating: "",
        reviews: "",
        img: ""
    })

    const alldata = (tour) => {
        console.log(tour)
        setalledit(tour)
        setalledited(tour)

    }
    const allchange = (e) => {
        setalledited({
            ...alledited,
            [e.target.name]: e.target.value
        })
    }
    const allupdate = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.put(`http://localhost:3000/Alltours/${alledited.id}`, alledited)
            setalledited({
                id: "",
                name: "",
                price: "",
                type: "",
                days: "",
                rating: "",
                reviews: "",
                img: ""

            })
            setalledit(null)
            getalltours()

            // document.body.classList.remove("modal-open");
            // document.querySelectorAll(".modal-backdrop").forEach(el => el.remove());


        } catch (error) {
            console.log("Api Not Found", error);

        }
    }

    {/* All Tours  End*/ }

    return (
        <div>
            <Aheader />
            <main className="main">
                {/* Page Title */}
                <div className="page-title dark-background" data-aos="fade" style={{ backgroundImage: 'url(assets/img/travel/showcase-8.webp)' }}>
                    <div className="container position-relative">
                        <h1 className='text-uppercase'>Tours</h1>
                        {/* <p>Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat quibusdam quia assumenda numquam molestias.</p> */}
                        <nav className="breadcrumbs">
                            <ol>
                                <li><NavLink to="/dashbord">Home</NavLink></li>
                                <li className="current">Mange Tours</li>
                            </ol>
                        </nav>
                    </div>
                </div>
                <div className="container">
                    <h1 className='text-center mt-5 mb-5'> Tours Mangment</h1>
                    {/* <div className='border'>
                        <button className='bg-success btn ms-3 text-end'><Link className='text-black' >View Tours</Link></button>
                        <div className='text-end'>
                            <button className='bg-success btn ms-3'><Link className='text-black' to="/toursadd">Add Tours</Link></button>
                        </div>

                    </div> */}
                    <div className="row">
                        <div className="col-6 ">
                            <button className='btn-primary btn ms-3 text-end'><Link className='text-white' to="/toursmange" >View Tours</Link></button>

                        </div>
                        <div className="col-6  text-end">
                            <button className='bg-success btn ms-3'><Link className='text-white' to="/toursadd">Add Tours</Link></button>

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
                                tours && tours.map((data, index) => {
                                    return (
                                        <tr className='text-center' key={index}>
                                            <td>{data.id}</td>
                                            <td><img src={data.img} alt="" style={{ width: "200px" }} /></td>
                                            <td>{data.name}</td>
                                            <td>{data.type}</td>
                                            <td>
                                                <button className='btn bg-info ' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => getsingle(data.id)}>View</button>
                                                <button className='bg-success btn ms-3' data-bs-toggle="modal" data-bs-target="#exampleModal-5" onClick={() => getdata(data)} >Edit</button>
                                                <button className='bg-danger btn ms-3 mt-3' onClick={() => del(data.id)}>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                    </table>


                </div>

                <div>

                    {/* Modal */}
                    <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header ">
                                    <h1 className="modal-title fs-5 " id="exampleModalLabel">Tours</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                </div>
                                <div className="modal-body">

                                    <div className="room-card">
                                        <div className="room-image">
                                            <img src={single.img} alt="" className="img-fluid" />
                                            <div className="room-features">
                                                <span className="feature-badge ocean"> </span>
                                                {/* <span className="feature-badge popular">Popular</span> */}
                                            </div>
                                        </div>
                                        <div className="room-content">
                                            <div className="room-header mt-3 mb-4">
                                                <h3 className='text-center'>{single.name} </h3>

                                            </div>
                                            <p className="room-description text-center">{single.type} </p>
                                            <div className="room-amenities text-center">

                                                <span >days:- {single.days}</span>
                                                <span className="price-amount ms-4">From $ {single.price} </span>
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
                    </div>
                </div>

                {
                    edit && (
                        <div className="modal fade" id="exampleModal-5" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog modal-xl">
                                <div className="modal-content">
                                    <div className="modal-header ">
                                        <h1 className="modal-title fs-5  " id="exampleModalLabel"></h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                    </div>
                                    <div className="container">
                                        <div className="row justify-content-center mb-5" data-aos="fade-up" data-aos-delay={200}>
                                            <div className="col-lg-10">
                                                <div className="contact-form-wrapper">
                                                    <h2 className="text-center mb-4 mt-5">Update Tours</h2>
                                                    <form action="" method="post" className="php-email-form">
                                                        <div className="row g-3">
                                                            <div className="col-md-6">
                                                                <div className="form-group">
                                                                    <input type="text" value={edited.name} onChange={getchange} className="form-control" name="name" placeholder="Enter Yours Tours Name" required />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="form-group">
                                                                    <input type="text" value={edited.tag} onChange={getchange} className="form-control" name="tag" placeholder="Enter Your Tours Tag" required />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="form-group">
                                                                    <input type="text" value={edited.days} onChange={getchange} className="form-control" name="days" placeholder="Enter Your Tours Days" required />
                                                                </div>
                                                            </div>

                                                            <div className="col-md-6">
                                                                <div className="form-group">
                                                                    <input type="text" value={edited.price} onChange={getchange} className="form-control" name="price" placeholder="Enter Your Tours Price" required />
                                                                </div>
                                                            </div>
                                                            <div className="col-12">
                                                                <div className="form-group">
                                                                    <input type="text" value={edited.type} onChange={getchange} className="form-control" name="type" placeholder="Enter Your Tours Type " required />
                                                                </div>
                                                            </div>
                                                            <div className="col-12">
                                                                <div className="form-group">
                                                                    <input type="url" value={edited.img} onChange={getchange} className="form-control" name="img" placeholder="Enter Your Tours Img Link" required />
                                                                </div>
                                                            </div>

                                                            <div className="col-12 text-center">
                                                                <div className="row">
                                                                    <div className="col-6">
                                                                        <button type="submit" className="btn btn-success"  data-bs-dismiss="modal" onClick={upadtechange}>update Tours</button>
                                                                    </div>
                                                                    <div className="col-6">
                                                                        <button type="submit" className="btn btn-primary"  data-bs-dismiss="modal" onClick={() => setedit(null)} >cancle Tours</button>
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

                    )
                }
                {/* Last-Minute Deals Mangment Start  */}
                <div className="container">

                    <h1 className='text-center mt-5 mb-5'> Last-Minute Deals Mangment</h1>
                    <div className="row">
                        <div className="col-6 ">
                            <button className='btn-primary btn ms-3 text-end'><Link className='text-white' to="/toursmange" >View  Last-Minute-Deals</Link></button>

                        </div>
                        <div className="col-6  text-end">
                            <button className='bg-success btn ms-3'><Link className='text-white' to="/lastminutedeals">Add  Last-Minute-Deals</Link></button>

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
                                deals && deals.map((item, index) => {
                                    return (
                                        <tr className='text-center' key={index}>
                                            <td>{item.id}</td>
                                            <td><img src={item.img} alt="" style={{ width: "100px", height: "100px" }} /></td>
                                            <td >{item.name}</td>
                                            <td>{item.type}</td>
                                            <td>
                                                <button className='btn bg-info ' data-bs-toggle="modal" data-bs-target="#exampleModal-1" onClick={() => viewdeals(item.id)} >View</button>
                                                <button className='bg-success btn ms-3' data-bs-toggle="modal" data-bs-target="#exampleModal-2" onClick={() => dealsdata(item)} >Edit</button>
                                                <button className='bg-danger btn ms-3 mt-3' onClick={() => deldata(item.id)} >Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                    </table>
                    <div>

                        {/* View Modal */}
                        <div className="modal fade" id="exampleModal-1" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header ">
                                        <h1 className="modal-title fs-5 " id="exampleModalLabel">Last-Minute Deals</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                    </div>
                                    <div className="modal-body">

                                        <div className="room-card">
                                            <div className="room-image">
                                                <img src={dedata.img} alt="" className="img-fluid" />
                                                <div className="room-features">
                                                    <span className="feature-badge ocean"> </span>
                                                    {/* <span className="feature-badge popular">Popular</span> */}
                                                </div>
                                            </div>
                                            <div className="room-content">
                                                <div className="room-header mt-3 mb-4">
                                                    <h3 className='text-center'>{dedata.name} </h3>

                                                </div>
                                                <p className="room-description text-center"> {dedata.type}</p>
                                                <div className="room-amenities text-center">

                                                    <span >{dedata.days} </span>
                                                    <span className="price-amount ms-4">{dedata.pr}% OFF  </span>
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
                        </div>
                    </div>
                    {/* Update Modal */}
                    {
                        deedit && (
                            <div className="modal fade" id="exampleModal-2" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered  modal-xl">
                                    <div className="modal-content">
                                        <div className="modal-header ">
                                            <h1 className="modal-title fs-5 " id="exampleModalLabel"></h1>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                        </div>
                                        <div className="modal-body">

                                            <div className="container">
                                                <div className="row justify-content-center mb-5" data-aos="fade-up" data-aos-delay={200}>
                                                    <div className="col-lg-10">
                                                        <div className="contact-form-wrapper">
                                                            <h2 className="text-center mb-4 mt-5">Last-Minute Deals Update </h2>
                                                            <form action="" method="post" className="php-email-form">
                                                                <div className="row g-3">
                                                                    <div className="col-md-6">
                                                                        <div className="form-group">
                                                                            <input type="text" className="form-control" value={deedited.name} onChange={dealschange} name="name" placeholder="Enter Yours Last-Minute Deals  Name" required />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6">
                                                                        <div className="form-group">
                                                                            <input type="text" className="form-control" value={deedited.pr} onChange={dealschange} name="pr" placeholder="Enter Your Last-Minute Deals discount" required />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6">
                                                                        <div className="form-group">
                                                                            <input type="text" className="form-control" value={deedited.days} name="days" placeholder="Enter Your Last-Minute Deals Days" required />
                                                                        </div>
                                                                    </div>

                                                                    {/* <div className="col-md-6">
                                                    <div className="form-group">
                                                        <input type="text"  className="form-control" name="price" placeholder="Enter Your Tours Price" required />
                                                    </div>
                                                </div> */}
                                                                    <div className="col-md-6">
                                                                        <div className="form-group">
                                                                            <input type="text" className="form-control" value={deedited.type} onChange={dealschange} name="type" placeholder="Enter Your Last-Minute Deals Type " required />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-12">
                                                                        <div className="form-group">
                                                                            <input type="url" className="form-control" value={deedited.img} onChange={dealschange} name="img" placeholder="Enter Your Last-Minute Deals Img Link" required />
                                                                        </div>
                                                                    </div>

                                                                    <div className="col-12 text-center">
                                                                        <div className="row">
                                                                            <div className="col-6">
                                                                                <button type="submit" className="btn btn-success" onClick={updatedeals}  data-bs-dismiss="modal" >update Last-Minute Deals</button>
                                                                            </div>
                                                                            <div className="col-6">
                                                                                <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => setdeedit(null)} >cancle Last-Minute Deals</button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='text-center fs-3 text-red-600'> Don’t press the Enter key. You need to click the Update button... </div>


                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            // <div className="container">
                            //     <div className="row justify-content-center mb-5" data-aos="fade-up" data-aos-delay={200}>
                            //         <div className="col-lg-10">
                            //             <div className="contact-form-wrapper">
                            //                 <h2 className="text-center mb-4 mt-5">Update Tours</h2>
                            //                 <form action="" method="post" className="php-email-form">
                            //                     <div className="row g-3">
                            //                         <div className="col-md-6">
                            //                             <div className="form-group">
                            //                                 <input type="text" className="form-control" value={deedited.name} name="name" placeholder="Enter Yours Tours Name" required />
                            //                             </div>
                            //                         </div>
                            //                         <div className="col-md-6">
                            //                             <div className="form-group">
                            //                                 <input type="text" className="form-control" value={deedited.pr} name="pr" placeholder="Enter Your Tours Tag" required />
                            //                             </div>
                            //                         </div>
                            //                         <div className="col-md-6">
                            //                             <div className="form-group">
                            //                                 <input type="text" className="form-control" value={deedited.days} name="days" placeholder="Enter Your Tours Days" required />
                            //                             </div>
                            //                         </div>

                            //                         {/* <div className="col-md-6">
                            //                         <div className="form-group">
                            //                             <input type="text"  className="form-control" name="price" placeholder="Enter Your Tours Price" required />
                            //                         </div>
                            //                     </div> */}
                            //                         <div className="col-12">
                            //                             <div className="form-group">
                            //                                 <input type="text" className="form-control" value={deedited.type} name="type" placeholder="Enter Your Tours Type " required />
                            //                             </div>
                            //                         </div>
                            //                         <div className="col-12">
                            //                             <div className="form-group">
                            //                                 <input type="url" className="form-control" value={deedited.img} name="img" placeholder="Enter Your Tours Img Link" required />
                            //                             </div>
                            //                         </div>

                            //                         <div className="col-12 text-center">
                            //                             <div className="row">
                            //                                 <div className="col-6">
                            //                                     <button type="submit" className="btn btn-primary" >update Tours</button>
                            //                                 </div>
                            //                                 <div className="col-6">
                            //                                     <button type="submit" className="btn btn-primary"  >cancle Tours</button>
                            //                                 </div>
                            //                             </div>
                            //                         </div>
                            //                     </div>

                            //                 </form>
                            //             </div>
                            //         </div>
                            //     </div>


                            // </div>
                        )
                    }
                </div>

                {/* { Last-Minute Deals Mangment End }  */}

                {/* All Tours  Start*/}
                <div className="container">
                    <h1 className='text-center mt-5 mb-5'> All Tours Mangment</h1>
                    {/* <div className='border'>
                        <button className='bg-success btn ms-3 text-end'><Link className='text-black' >View Tours</Link></button>
                        <div className='text-end'>
                            <button className='bg-success btn ms-3'><Link className='text-black' to="/toursadd">Add Tours</Link></button>
                        </div>

                    </div> */}
                    <div className="row">
                        <div className="col-6 ">
                            <button className='btn-primary btn ms-3 text-end'><Link className='text-white' to="/toursmange" >View All Tours</Link></button>

                        </div>
                        <div className="col-6  text-end">
                            <button className='bg-success btn ms-3'><Link className='text-white' to="/alltours">Add All Tours</Link></button>

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
                                alltours && alltours.map((tour, index) => {
                                    return (
                                        <tr className='text-center' key={index}>
                                            <td>{tour.id}</td>
                                            <td><img src={tour.img} alt="" style={{ width: "200px" }} /></td>
                                            <td>{tour.name}</td>
                                            <td>{tour.type}</td>
                                            <td>
                                                <button className='btn bg-info ' data-bs-toggle="modal" data-bs-target="#exampleModal-3" onClick={() => viewall(tour.id)}>View</button>
                                                <button className='bg-success btn ms-3' data-bs-toggle="modal" data-bs-target="#exampleModal-4" onClick={() => alldata(tour)}>Edit</button>
                                                <button className='bg-danger btn ms-3 mt-3' onClick={() => delalltours(tour.id)}>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                    </table>

                    {/* Modal */}
                    <div className="modal fade" id="exampleModal-3" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header ">
                                    <h1 className="modal-title fs-5  " id="exampleModalLabel"> All Tours</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                </div>
                                <div className="modal-body">

                                    <div className="room-card">
                                        <div className="room-image">
                                            <img src={allsingle.img} alt="" className="img-fluid" />
                                            <div className="room-features">
                                                <span className="feature-badge ocean"> </span>
                                                {/* <span className="feature-badge popular">Popular</span> */}
                                            </div>
                                        </div>
                                        <div className="room-content">
                                            <div className="room-header mt-3 mb-4">
                                                <h3 className='text-center'>{allsingle.name} </h3>

                                            </div>
                                            <p className="room-description text-center">{allsingle.type} </p>
                                            <div className="room-amenities text-center ">

                                                <span className='border-2 p-2 rounded-2xl border-gray-400' > {allsingle.days} Days</span>
                                                <span className="price-amount ms-6 border-2 p-2 rounded-2xl border-gray-400">Price $ {allsingle.price} </span>
                                                <span className='ms-7 border-2 p-2 rounded-2xl border-gray-400' > {allsingle.rating} Rating</span>
                                                <span className="price-amount ms-4 border-2 p-2 rounded-2xl border-gray-400"> {allsingle.reviews} Reviews </span>

                                            </div>

                                        </div>
                                        <div className="modal-footer mt-4">
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
                    alledit && (
                        <div className="modal fade" id="exampleModal-4" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered  modal-xl">
                                <div className="modal-content">
                                    <div className="modal-header ">
                                        <h1 className="modal-title fs-5 " id="exampleModalLabel"></h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                    </div>
                                    <div className="modal-body">

                                        <div className="container">
                                            <div className="row justify-content-center mb-5" data-aos="fade-up" data-aos-delay={200}>
                                                <div className="col-lg-10">
                                                    <div className="contact-form-wrapper">
                                                        <h2 className="text-center mb-4 mt-5">All Tours Update </h2>
                                                        <form action="" method="post" className="php-email-form">
                                                            <div className="row g-3">
                                                                <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        Enter All Tour Name:-
                                                                        <input type="text" className="form-control" value={alledited.name} onChange={allchange} name="name" placeholder="Enter Yours All Tours  Name" required />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    Enter All Tour Rating:-
                                                                    <div className="form-group">
                                                                        <input type="text" className="form-control" value={alledited.rating} onChange={allchange} name="rating" placeholder="Enter Your All Tours Rating" required />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        Enter All Tour Days:-
                                                                        <input type="text" className="form-control" value={alledited.days} onChange={allchange} name="days" placeholder="Enter Your All Tours Days" required />
                                                                    </div>
                                                                </div>

                                                                <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        Enter All Tour Price:-
                                                                        <input type="text" className="form-control" value={alledited.price} onChange={allchange} name="price" placeholder="Enter Your All Tours Tours Price" required />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        Enter All Tour Reviews:-
                                                                        <input type="text" className="form-control" value={alledited.reviews} onChange={allchange} name="reviews" placeholder="Enter Your All Tours Reviews " required />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        Enter All Tour Type:-
                                                                        <input type="text" className="form-control" value={alledited.type} onChange={allchange} name="type" placeholder="Enter Your All Tours Type " required />
                                                                    </div>
                                                                </div>
                                                                <div className="col-12">
                                                                    <div className="form-group">
                                                                        Enter All Tour Img Link:-
                                                                        <input type="url" className="form-control" value={alledited.img} onChange={allchange} name="img" placeholder="Enter Your All Tours Img Link" required />
                                                                    </div>
                                                                </div>

                                                                <div className="col-12 text-center">
                                                                    <div className="row">
                                                                        <div className="col-6">
                                                                            <button type="submit" className="btn btn-success" onClick={allupdate}   data-bs-dismiss="modal">update All Tours</button>
                                                                        </div>
                                                                        <div className="col-6">
                                                                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal"  >cancle All Tours</button>
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
                {/* All Tours  end*/}
            </main>
        </div>







    )
}

export default ToursMange
