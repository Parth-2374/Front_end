import React, { useEffect, useState } from 'react'
import Ahaeder from '../Coman/Aheader'
import { Link, NavLink } from 'react-router-dom'
import axios from 'axios'
import { data } from 'isotope-layout'
import Tours from '../../pages/Tours'

function DashBord() {
  const [desti, setdesti] = useState()
  useEffect(() => {
    getdesti()
  }, [])

  const getdesti = async () => {
    const res = await axios.get("http://localhost:3000/FeaturedDestinations1")
    console.log(res.data);
    setdesti(res.data)

  }
  const [single, setsingle] = useState(
    {
      id: "",
      name: "",
      location: "",
      type: "",
      package: "",
      rating: "",
      price: "",
      tag: "",
      img: ""
    }
  )

  const getdata = async (id) => {
    const res = await axios.get(`http://localhost:3000/FeaturedDestinations1/${id}`)
    console.log(res.data);
    setsingle(res.data)
  }

  const deldata = async (id) => {
    const res = await axios.delete(`http://localhost:3000/FeaturedDestinations1/${id}`)
    console.log(res.data);
    getdesti()
  }

  const [edit, setedit] = useState(null)

  const [edited, setedited] = useState({
    id: "",
    name: "",
    location: "",
    type: "",
    package: "",
    rating: "",
    price: "",
    tag: "",
    img: ""
  })
  const getdataview = (data) => {
    console.log(data);
    setedit(data)
    setedited(data)

  }
  const onChange = (e) => {
    setedited({
      ...edited,
      [e.target.name]: e.target.value
    })
  }
  const editdata = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.put(`http://localhost:3000/FeaturedDestinations1/${edited.id}`, edited)
      setedit({
        id: "",
        name: "",
        location: "",
        type: "",
        package: "",
        rating: "",
        price: "",
        tag: "",
        img: ""
      })
      setedit(null)
      getdesti()

    } catch (error) {
      console.log("Api Not Found", error);

    }
  }
  // Featured Destinations right side
  const [detiright, setdestiright] = useState()
  useEffect(() => {
    getdestiright()
  }, [])
  const getdestiright = async () => {
    const res = await axios.get("http://localhost:3000/FeaturedDestinations2")
    console.log(res.data);

    setdestiright(res.data)

  }
  const [destimodal, setdestimodal] = useState({
    id: "",
    name: "",
    location: "",
    type: "",
    tours: "",
    rating: "",
    price: "",
    img: ""
  })

  const destiview = async (id) => {
    const res = await axios.get(`http://localhost:3000/FeaturedDestinations2/${id}`)
    console.log(res.data);
    setdestimodal(res.data)

  }
  const destidel = async (id) => {
    const res = await axios.delete(`http://localhost:3000/FeaturedDestinations2/${id}`)
    console.log(res.data);
    getdestiright()

  }
  const [destiedit, setdestiedit] = useState(null)

  const [destiedited, setdestiedited] = useState({
    id: "",
    name: "",
    location: "",
    type: "",
    tours: "",
    rating: "",
    price: "",
    img: ""
  })

  const destiright = (data) => {
    console.log(data);
    setdestiedit(data)
    setdestiedited(data)

  }
  const destichange = (e) => {
    setdestiedited({
      ...destiedited,
      [e.target.name]: e.target.value
    })
  }
  const destiupdate = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.put(`http://localhost:3000/FeaturedDestinations2/${destiedited.id}`, destiedited)
      setdestiedited({
        id: "",
        name: "",
        location: "",
        type: "",
        tours: "",
        rating: "",
        price: "",
        img: ""
      })

      setdestiedit(null)
      getdestiright()

    } catch (error) {
      console.log("Api Not Found", error);

    }
  }

  //  Featured Tours

  const [tours, settours] = useState()

  useEffect(() => {
    gettours()
  }, [])
  const toursdel = async (id) => {
    const res = await axios.delete(`http://localhost:3000/FeaturedToursHome/${id}`)
    console.log(res.data);
    gettours()

  }

  const gettours = async () => {
    const res = await axios.get("http://localhost:3000/FeaturedToursHome")
    console.log(res.data);
    settours(res.data)

  }
  const [ssingle, setssingle] = useState({
    id: "",
    name: "",
    type: "",
    days: "",
    maxperson: "",
    tag: "",
    price: "",
    rating: "",
    chekrating: "",
    tourhighlights1: "",
    tourhighlights2: "",
    tourhighlights3: "",
    img: ""
  })
  const singletours = async (id) => {
    const res = await axios.get(`http://localhost:3000/FeaturedToursHome/${id}`)
    console.log(res.data);
    setssingle(res.data)

  }
  const [toursedit, settoursedit] = useState(null)

  const [toursedited, settoursedited] = useState({
    id: "",
    name: "",
    type: "",
    days: "",
    maxperson: "",
    tag: "",
    price: "",
    rating: "",
    chekrating: "",
    tourhighlights1: "",
    tourhighlights2: "",
    tourhighlights3: "",
    img: ""
  })
  const getchangetours = (e) => {
    settoursedited({
      ...toursedited,

      [e.target.name]: e.target.value
    })
  }

  const getdatatours = (data) => {
    console.log(data);
    settoursedit(data)
    settoursedited(data)
  }
  const upadtetours = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.put(`http://localhost:3000/FeaturedToursHome/${toursedited.id}`, toursedited)
      console.log(res.data);
      settoursedited({
        id: "",
        name: "",
        type: "",
        days: "",
        maxperson: "",
        tag: "",
        price: "",
        rating: "",
        chekrating: "",
        tourhighlights1: "",
        tourhighlights2: "",
        tourhighlights3: "",
        img: ""
      })
      settoursedit(null)
      gettours()

    } catch (error) {
      console.log("Api Not Found", error);

    }
  }
  return (
    <div>
      <Ahaeder />

      <main className="main">
        {/* Page Title */}
        <div className="page-title dark-background" data-aos="fade" style={{ backgroundImage: 'url(assets/img/travel/showcase-8.webp)' }}>
          <div className="container position-relative">
            <h1 className='text-uppercase'>Home</h1>
            {/* <p>Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat quibusdam quia assumenda numquam molestias.</p> */}
            <nav className="breadcrumbs">
              <ol>
                <li><NavLink to="/dashbord">Home</NavLink></li>
                <li className="current">Dashbord</li>
              </ol>
            </nav>
          </div>
        </div>
        {/* <h1 className='text-center mt-4'>Hello</h1> */}
        <div className="container">
          <h1 className='text-center mt-4'>Featured Destinations</h1>
          <div className="row">
            <div className="col-6 ">
              <button className='btn-primary btn ms-3 text-end'><Link className='text-white' to="/dashbord" >View Featured Destinations</Link></button>

            </div>
            <div className="col-6  text-end">
              <button className='bg-success btn ms-3'><Link className='text-white' to="/addfeatured">Add Featured Destinations</Link></button>

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
                desti && desti.map((data, index) => {
                  return (
                    <tr className='text-center' key={index}>
                      <td>{data.id}</td>
                      <td><img src={data.img} style={{ width: "200px" }} alt="" /></td>
                      <td>{data.name}</td>

                      <td>{data.type}</td>
                      <td  >
                        <button className='btn bg-info' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => getdata(data.id)} >View</button>
                        <button className='bg-success btn ms-3' data-bs-toggle="modal" data-bs-target="#exampleModal-5" onClick={() => getdataview(data)}>Edit</button>
                        <button className='bg-danger btn ms-3 mt-3' onClick={() => deldata(data.id)} >Delete</button>
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

                      <span ><i className="bi bi-geo-alt-fill" />{single.location} </span>
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
                          <h2 className="text-center mb-4 mt-5">Update Featured Destinations</h2>
                          <form action="" method="post" className="php-email-form">
                            <div className="row g-3">
                              <div className="col-md-6">
                                <div className="form-group">
                                  <input type="text" value={edited.name} onChange={onChange} className="form-control" name="name" placeholder="Enter Yours Featured Destinations Name" required />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <input type="text" value={edited.location} onChange={onChange} className="form-control" name="location" placeholder="Enter Yours Featured Destinations Name" required />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <input type="text" value={edited.rating} onChange={onChange} className="form-control" name="rating" placeholder="Enter Yours Featured Destinations Name" required />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <input type="text" value={edited.tag} onChange={onChange} className="form-control" name="tag" placeholder="Enter Your Featured Destinations Tag" required />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <input type="text" value={edited.package} onChange={onChange} className="form-control" name="Packages" placeholder="Enter Your Featured Destinations Days" required />
                                </div>
                              </div>

                              <div className="col-md-6">
                                <div className="form-group">
                                  <input type="text" value={edited.price} onChange={onChange} className="form-control" name="price" placeholder="Enter Your Featured Destinations Price" required />
                                </div>
                              </div>
                              <div className="col-12">
                                <div className="form-group">
                                  <input type="text" value={edited.type} onChange={onChange} className="form-control" name="type" placeholder="Enter Your Featured Destinations Type " required />
                                </div>
                              </div>
                              <div className="col-12">
                                <div className="form-group">
                                  <input type="url" value={edited.img} onChange={onChange} className="form-control" name="img" placeholder="Enter Your Featured Destinations Img Link" required />
                                </div>
                              </div>

                              <div className="col-12 text-center">
                                <div className="row">
                                  <div className="col-6">
                                    <button type="submit" className="btn btn-success" data-bs-dismiss="modal" onClick={editdata}>update Featured Destinations</button>
                                  </div>
                                  <div className="col-6">
                                    <button type="submit" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => setedit(null)} >cancle Featured Destinations</button>
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

        {/*Featured Destinations right side  */}
        <div className="container">
          <div className="row mt-5">
            <div className="col-6 ">
              <button className='btn-primary btn ms-3 text-end'><Link className='text-white' to="/dashbord" >View Featured Destinations right side</Link></button>

            </div>
            <div className="col-6  text-end">
              <button className='bg-success btn ms-3'><Link className='text-white' to="/addfeaturedright">Add Featured Destinations right side</Link></button>

            </div>
          </div>
          <h1 className='text-center mt-4'>Featured Destinations right side</h1>
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
                detiright && detiright.map((data, index) => {
                  return (
                    <tr className='text-center' key={index}>
                      <td>{data.id}</td>
                      <td><img src={data.img} style={{ width: "200px" }} alt="" /></td>
                      <td>{data.name}</td>

                      <td>{data.type}</td>
                      <td  >
                        <button className='btn bg-info' data-bs-toggle="modal" data-bs-target="#exampleModal-6" onClick={() => destiview(data.id)}>View</button>
                        <button className='bg-success btn ms-3' data-bs-toggle="modal" data-bs-target="#exampleModal-7" onClick={() => destiright(data)}>Edit</button>
                        <button className='bg-danger btn ms-3 mt-3' onClick={() => destidel(data.id)}  >Delete</button>
                      </td>
                    </tr>
                  )
                })
              }


            </tbody>
          </table>


          {/* Modal */}
          <div className="modal fade" id="exampleModal-6" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header ">
                  <h1 className="modal-title fs-5 " id="exampleModalLabel">Tours</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                </div>
                <div className="modal-body">

                  <div className="room-card">
                    <div className="room-image">
                      <img src={destimodal.img} alt="" className="img-fluid" />
                      <div className="room-features">
                        <span className="feature-badge ocean"> </span>
                        {/* <span className="feature-badge popular">Popular</span> */}
                      </div>
                    </div>
                    <div className="room-content">
                      <div className="room-header mt-3 mb-4">
                        <h3 className='text-center'> {destimodal.name} </h3>

                      </div>
                      <p className="room-description text-center"> </p>
                      <div className="room-amenities text-center">

                        <span ><i className="bi bi-geo-alt-fill" />{destimodal.location} </span>
                        <span className="price-amount ms-4">From ${destimodal.price} </span>
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
          {
            destiedit && (
              <div className="modal fade" id="exampleModal-7" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                            <h2 className="text-center mb-4 mt-5">Update Featured Destinations</h2>
                            <form action="" method="post" className="php-email-form">
                              <div className="row g-3">
                                <div className="col-md-6">
                                  <div className="form-group">
                                    <input type="text" value={destiedited.name} onChange={destichange} className="form-control" name="name" placeholder="Enter Yours Featured Destinations Name" required />
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="form-group">
                                    <input type="text" value={destiedited.location} onChange={destichange} className="form-control" name="location" placeholder="Enter Yours Featured Destinations Name" required />
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="form-group">
                                    <input type="text" value={destiedited.rating} onChange={destichange} className="form-control" name="rating" placeholder="Enter Yours Featured Destinations Name" required />
                                  </div>
                                </div>
                                {/* <div className="col-md-6">
                                <div className="form-group">
                                  <input type="text"  className="form-control" name="tag" placeholder="Enter Your Featured Destinations Tag" required />
                                </div>
                              </div> */}
                                <div className="col-md-6">
                                  <div className="form-group">
                                    <input type="text" value={destiedited.tours} onChange={destichange} className="form-control" name="tours" placeholder="Enter Your Featured Destinations Days" required />
                                  </div>
                                </div>

                                <div className="col-12">
                                  <div className="form-group">
                                    <input type="text" value={destiedited.price} onChange={destichange} className="form-control" name="price" placeholder="Enter Your Featured Destinations Price" required />
                                  </div>
                                </div>
                                <div className="col-12">
                                  <div className="form-group">
                                    <input type="text" value={destiedited.type} onChange={destichange} className="form-control" name="type" placeholder="Enter Your Featured Destinations Type " required />
                                  </div>
                                </div>
                                <div className="col-12">
                                  <div className="form-group">
                                    <input type="url" value={destiedited.img} onChange={destichange} className="form-control" name="img" placeholder="Enter Your Featured Destinations Img Link" required />
                                  </div>
                                </div>

                                <div className="col-12 text-center">
                                  <div className="row">
                                    <div className="col-6">
                                      <button type="submit" className="btn btn-success" data-bs-dismiss="modal" onClick={destiupdate} >update Featured Destinations</button>
                                    </div>
                                    <div className="col-6">
                                      <button type="submit" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => setdestiedit(null)} >cancle Featured Destinations</button>
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

          {/* Featured Destinations right side */}


          {/*   Featured Tours */}
          <div className="container">
            <div className="row mt-5">
              <div className="col-6 ">
                <button className='btn-primary btn ms-3 text-end'><Link className='text-white' to="/dashbord" >View Featured Tours</Link></button>

              </div>
              <div className="col-6  text-end">
                <button className='bg-success btn ms-3'><Link className='text-white' to="/addfeatutretours">Add Featured Tours</Link></button>

              </div>
            </div>
            <h1 className='text-center mt-4'> Featured Tours</h1>
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
                        <td><img src={data.img} style={{ width: "200px" }} alt="" /></td>
                        <td>{data.name}</td>

                        <td>{data.type}</td>
                        <td  >
                          <button className='btn bg-info' data-bs-toggle="modal" data-bs-target="#exampleModal-7" onClick={() => singletours(data.id)}>View</button>
                          <button className='bg-success btn ms-3' data-bs-toggle="modal" data-bs-target="#exampleModal-8" onClick={() => getdatatours(data)} >Edit</button>
                          <button className='bg-danger btn ms-3 mt-3' onClick={() => toursdel(data.id)} >Delete</button>
                        </td>
                      </tr>
                    )
                  })
                }


              </tbody>
            </table>
            {/* Modal */}
            <div className="modal fade" id="exampleModal-7" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header ">
                    <h1 className="modal-title fs-5 " id="exampleModalLabel">Tours</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                  </div>
                  <div className="modal-body">

                    <div className="room-card">
                      <div className="room-image">
                        <img src={ssingle.img} alt="" className="img-fluid" />
                        <div className="room-features">
                          <span className="feature-badge ocean"> </span>

                        </div>
                      </div>
                      <div className="room-content">
                        <div className="room-header mt-3 mb-4">
                          <h3 className='text-center'> {ssingle.name} </h3>

                        </div>
                        <p className="room-description text-center"> </p>
                        <div className="room-amenities text-center">

                          <span ><i className="bi bi-geo-alt-fill" />{ssingle.location} </span>
                          <span className="price-amount ms-4">From ${ssingle.price} </span>
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
            {
              toursedit && (
                <div className="modal fade" id="exampleModal-8" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                              <h2 className="text-center mb-4 mt-5">Update Featured Tours</h2>
                              <form action="" method="post" className="php-email-form">
                                <div className="row g-3">
                                  <div className="col-md-6">
                                    <div className="form-group">
                                      <input type="text" value={toursedited.name} onChange={getchangetours} className="form-control" name="name" placeholder="Enter Yours Featured Tours Name" required />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="form-group">
                                      <input type="text" value={toursedited.days} onChange={getchangetours} className="form-control" name="days" placeholder="Enter Yours Featured Tours days" required />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="form-group">
                                      <input type="text" value={toursedited.rating} onChange={getchangetours} className="form-control" name="rating" placeholder="Enter Yours Featured Tours rating" required />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="form-group">
                                      <input type="text" value={tours.chekrating} onChange={getchangetours} className="form-control" name="chekrating" placeholder="Enter Yours Featured Tours chekrating" required />
                                    </div>
                                  </div>

                                  <div className="col-md-6">
                                    <div className="form-group">
                                      <input type="text" value={toursedited.tag} onChange={getchangetours} className="form-control" name="tag" placeholder="Enter Your Featured Tours tag" required />
                                    </div>
                                  </div>

                                  <div className="col-md-6">
                                    <div className="form-group">
                                      <input type="text" value={toursedited.price} onChange={getchangetours} className="form-control" name="price" placeholder="Enter Your Featured Tours Price" required />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="form-group">
                                      <input type="text" value={toursedited.maxperson} onChange={getchangetours} className="form-control" name="maxperson" placeholder="Enter Your Featured Tours maxperson" required />
                                    </div>
                                  </div>
                                  <div className="col-md-4">
                                    <div className="form-group">
                                      <input type="text" value={toursedited.tourhighlights1} onChange={getchangetours} className="form-control" name="tourhighlights1" placeholder="Enter Your Featured Tours tourhighlights1" required />
                                    </div>
                                  </div>
                                  <div className="col-md-4">
                                    <div className="form-group">
                                      <input type="text" value={toursedited.tourhighlights2} onChange={getchangetours} className="form-control" name="tourhighlights2" placeholder="Enter Your Featured Tours tourhighlights2" required />
                                    </div>
                                  </div>
                                  <div className="col-md-4">
                                    <div className="form-group">
                                      <input type="text" value={toursedited.tourhighlights3} onChange={getchangetours} className="form-control" name="tourhighlights3" placeholder="Enter Your Featured Tours tourhighlights3" required />
                                    </div>
                                  </div>
                                  <div className="col-12">
                                    <div className="form-group">
                                      <input type="text" value={toursedited.type} onChange={getchangetours} className="form-control" name="type" placeholder="Enter Your Featured Tours Type " required />
                                    </div>
                                  </div>
                                  <div className="col-12">
                                    <div className="form-group">
                                      <input type="url" value={toursedited.img} onChange={getchangetours} className="form-control" name="img" placeholder="Enter Your Featured Tours Img Link" required />
                                    </div>
                                  </div>

                                  <div className="col-12 text-center">
                                    <div className="row">
                                      <div className="col-6">
                                        <button type="submit" className="btn btn-success" data-bs-dismiss="modal" onClick={upadtetours} >update Featured Destinations</button>
                                      </div>
                                      <div className="col-6">
                                        <button type="submit" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => settoursedit(null)}  >cancle Featured Destinations</button>
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


          </div>
        </div>
      </main>
    </div>
  )
}

export default DashBord
