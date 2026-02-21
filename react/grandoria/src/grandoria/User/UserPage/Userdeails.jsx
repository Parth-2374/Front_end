import React, { useEffect, useState } from 'react'
import Header from '../../coman/Header'
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBInput,
    MDBIcon,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';
import axios from 'axios';
import { useNavigate } from 'react-router';

function Userdeails() {

    const redirect =useNavigate()

    const [user, setuser] = useState({
        id: "",
        name: "",
        email: "",
        password: ""
    })
    const getchange = (e) => {
        setuser({
            ...user,
            [e.target.name]: e.target.value
            })
    }
    useEffect(()=>{
        getdata()
    },[])

    const getdata = async()=>{
       
        try {
            const res = await axios.get(`http://localhost:3000/users/${localStorage.getItem("userid")}`)
            console.log(res.data)
            setuser(res.data)
        } catch (error) {
            console.log("Api Not Found",error)
        }
    }
    const uapdatedata =async(e)=>{
        e.preventDefault()
        try {
            const res = await axios.put(`http://localhost:3000/users/${user.id}`,user)
            console.log(res.data)
            localStorage.setItem("username",user.name)
            setuser({
                id: "",
                name: "",
                email: "",
                password: ""
            })
            redirect("/")
            
        } catch (error) {
            console.log("Api Not Found",error);
            
        }
    }
 

    return (
        <div>
            <Header />
            <div className="container">
                <MDBContainer fluid>

                    <MDBCard className='text-black m-5' style={{ borderRadius: '25px' }}>
                        <MDBCardBody>
                            <MDBRow>
                                <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

                                    <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Update Profile</p>

                                    <div className="d-flex flex-row align-items-center mb-4 ">
                                        <MDBIcon fas icon="user me-3" size='lg' />
                                        <MDBInput value={user.name} name='name' onChange={getchange} label='Your Name' id='form1' type='text' className='w-100' />
                                    </div>

                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <MDBIcon fas icon="envelope me-3" size='lg' />
                                        <MDBInput value={user.email} name='email' onChange={getchange} label='Your Email' id='form2' type='email' />
                                    </div>

                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <MDBIcon fas icon="lock me-3" size='lg' />
                                        <MDBInput value={user.password} name='password' onChange={getchange} label='Password' id='form3' type='password' />
                                    </div>

                                    {/* <div className="d-flex flex-row align-items-center mb-4">
                                        <MDBIcon fas icon="key me-3" size='lg' />
                                        <MDBInput label='Repeat your password' id='form4' type='password' />
                                    </div> */}

                                    <div className='mb-4'>
                                        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
                                    </div>

                                    <MDBBtn className='mb-4' onClick={uapdatedata} size='lg'>Update Profile</MDBBtn>

                                </MDBCol>

                                <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
                                    <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid />
                                </MDBCol>

                            </MDBRow>
                        </MDBCardBody>
                    </MDBCard>

                </MDBContainer>

            </div>
        </div>
    )
}

export default Userdeails
