import React, { useEffect, useState } from 'react'
import AdminHeader from '../AdminComan/AdminHeader'
import axios from 'axios'


function MangeRoom() {
    // const [room,setroom]=useState([])

    // useEffect(()=>{
    //     roomapi()
    // },[])

    // const roomapi =()=>{
    //     fetch("http://localhost:3000/rooms",
    //         {
    //             method:"GET"
    //         }
    //     )
    //         .then((res)=>{
    //            return res.json()
    //         })
    //         .then((data)=>{
    //             console.log(data);
    //             setroom(data)
    //         })

    // }
    const [room, setroom] = useState([])
    useEffect(() => {
        roomapicall()
    }, [])

    const roomapicall = async () => {
        const res = await axios.get("http://localhost:3000/rooms")
        console.log(res.data)
        setroom(res.data)
    }
    // view card Start
    const [card,setcard] = useState({
        id: "",
        name: "",
        guest: "",
        price: "",
        type: "",
        img: ""
    })
    const carddata = async (id) => {
        const res = await axios.get(`http://localhost:3000/rooms/${id}`)
        console.log(res.data);
        setcard(res.data)
        
    }
    return (
        <div>
            <AdminHeader />
            <div className="container">
                <h1 className='text-center mt-5 mb-5'>This A Room Mangment</h1>
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
                            room && room.map((data, index) => {
                                return (
                                    <tr className='text-center' key={index}>
                                        <td>{data.id}</td>
                                        <td><img src={data.img} style={{ width: "200px" }} alt="" /></td>
                                        <td>{data.name}</td>
                                        {/* <td>{data.price}</td> */}
                                        <td>{data.type}</td>
                                        <td >
                                            <button data-bs-toggle="modal" data-bs-target="#exampleModal" className='btn bg-info ' onClick={()=>carddata(data.id)}>View</button>
                                            <button className='bg-success btn ms-3'>Edit</button>
                                            <button className='bg-danger btn ms-3'>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

                {/* Button trigger modal */}
                {/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Launch demo modal
                </button> */}
                {/* Modal */}
                <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                <div className="col-9 mx-auto">
                                    <div className="room-card">
                                        <div className="room-image">
                                            <img src={card?.img} alt="" className="img-fluid" />
                                            <div className="room-features">
                                                <span className="feature-badge ocean">{card?.type}</span>
                                                {/* <span className="feature-badge popular">Popular</span> */}
                                            </div>
                                        </div>
                                        <div className="room-content">
                                            <div className="room-header">
                                                <h3>{card.name}</h3>
                                                <div className="room-rating">
                                                    <i className="bi bi-star-fill" />
                                                    <i className="bi bi-star-fill" />
                                                    <i className="bi bi-star-fill" />
                                                    <i className="bi bi-star-fill" />
                                                    <i className="bi bi-star-fill" />
                                                </div>
                                            </div>
                                            <p className="room-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                            <div className="room-amenities">
                                                <span><i className="bi bi-people" /> Up to {card.guest} guests</span>
                                                <span><i className="bi bi-wifi" /> Free WiFi</span>
                                                <span><i className="bi bi-tv" /> Smart TV</span>
                                            </div>
                                            <div className="room-footer">
                                                <div className="room-price">
                                                    <span className="price-from">From</span>
                                                    <span className="price-amount">$ {card.price}</span>
                                                    <span className="price-period">/ night</span>
                                                </div>
                                                {/* <Link to="" className="btn-room-details">View Details</Link> */}
                                            </div>
                                        </div>
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


            </div>


            {/* <div className="container">
            <h1 className='text-center mt-5 mb-5'>This A Room Mangment</h1>
          <table className="table">
              <thead>
              <tr>
                        <th scope="col">#id</th>
                        <th scope="col">img</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Type</th>
                    </tr>
              </thead>
              <tbody>
                 {
                  room && room.map((data,index)=>{
                    return(
                        <tr key={index}>
                        <th scope="row">{data.id}</th>
                        <td>{data.img}</td>
                        <td>{data.name}</td>
                        <td>{data.price}</td>
                        <td>{data.type}</td>
                    </tr>
                    )
                  })
                 }
              </tbody>
          </table>
          </div> */}

        </div>
    )
}

export default MangeRoom
