import React, { useState } from 'react'
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
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { registerUser } from '../features/userSlice';

function Register() {

    const [user, setuser] = useState({
        id: "",
        name: "",
        email: "",
        password: ""
    })

    const getchange = (e) => {
        setuser({
            ...user,
            id: new Date().getTime().toString(),
            [e.target.name]: e.target.value
        })
    }

    const redirect = useNavigate()

    const dispatch = useDispatch()
    const submit = (e) => {
        e.preventDefault()
        dispatch(registerUser(user))
        redirect("/")
        setuser({
            id: "",
            name: "",
            email: "",
            password: ""
        })
    }
    return (
        <div>
            <MDBContainer fluid>

                <MDBCard className='text-black m-5' style={{ borderRadius: '25px' }}>
                    <MDBCardBody>
                        <MDBRow>
                            <MDBCol md='10' lg='12' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

                                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                                <div className="d-flex flex-row align-items-center mb-4  ">
                                    <MDBIcon fas icon="user me-3" size='lg' />
                                    <MDBInput label='Your Name' id='form1' type='text' className='w-100' name='name' value={user.name} onChange={getchange} />
                                </div>

                                <div className="d-flex flex-row align-items-center mb-4">
                                    <MDBIcon fas icon="envelope me-3" size='lg' />
                                    <MDBInput label='Your Email' id='form2' type='email' name='email' value={user.email} onChange={getchange} />
                                </div>

                                <div className="d-flex flex-row align-items-center mb-4">
                                    <MDBIcon fas icon="lock me-3" size='lg' />
                                    <MDBInput label='Password' id='form3' type='password' name='password' value={user.password} onChange={getchange} />
                                </div>

                                <MDBBtn className='mb-4' size='lg' onClick={submit}>Register</MDBBtn>

                            </MDBCol>



                        </MDBRow>
                    </MDBCardBody>
                </MDBCard>

            </MDBContainer>
        </div>
    )
}

export default Register
