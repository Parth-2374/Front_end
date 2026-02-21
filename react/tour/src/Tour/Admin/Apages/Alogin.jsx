import React, { useEffect, useState } from 'react'

// import {
//     MDBBtn,
//     MDBContainer,
//     MDBRow,
//     MDBCol,
//     MDBCard,
//     MDBCardBody,
//     MDBInput,
//     MDBIcon,
//     MDBCheckbox
// }
//     from 'mdb-react-ui-kit';

import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Alogin() {
    const redirect = useNavigate()
    useEffect(() => {
        if (localStorage.getItem("aid")) {
            redirect("/dashbord")
        }

    }, [])
    const [admin, setadmin] = useState({
        email: "",
        password: ""
    })
    const change = (e) => {
        setadmin({
            ...admin,
            [e.target.name]: e.target.value
        })
    }
    const getapi = async (e) => {
        e.preventDefault()

        try {
            const { email, password } = admin

            if (email == "" || password == "") {
                console.log("Pls fill data");
                alert("pls full fill data")
                return;

            }
            const res = await axios.get(`http://localhost:3000/Admin?email=${email}`)
            //   console.log(res.data);

            if (res.data.length === 0) {
                console.log("email not match..");
                alert("Email not match..")
                return false;

            }
            const Admin = res.data[0]
            //   console.log(Admin);

            if (Admin.password != password) {
                console.log("password not match")
                alert("Password not match..")
                return false;

            }
            localStorage.setItem("aid", Admin.id)
            localStorage.setItem("aname", Admin.name)
            console.log("succefully login..");
            alert("Succefully login..")
            redirect("/dashbord")

        } catch (error) {
            console.log("Api Not Found", error);

        }
    }
    return (
        <div>
            {/* <MDBContainer className="p-3 my-5 d-flex flex-column w-50" >

                <form action="" onSubmit={getapi}>
                    <MDBInput wrapperClass='mb-4' value={admin.email} onChange={change} name='email' label='Email address' id='form1' type='email' />
                    <MDBInput wrapperClass='mb-4' value={admin.password} onChange={change} name='password' label='Password' id='form2' type='password' />

                    <div className="d-flex justify-content-between mx-3 mb-4">
                        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                        <a href="!#">Forgot password?</a>
                    </div>

                    <MDBBtn className="mb-4">Sign in</MDBBtn>

                    <div className="text-center">
                        <p>Not a member? <a href="#!">Register</a></p>
                        <p>or sign up with:</p>

                        <div className='d-flex justify-content-between mx-auto' style={{ width: '40%' }}>
                            <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                                <MDBIcon fab icon='facebook-f' size="sm" />
                            </MDBBtn>

                            <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                                <MDBIcon fab icon='twitter' size="sm" />
                            </MDBBtn>

                            <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                                <MDBIcon fab icon='google' size="sm" />
                            </MDBBtn>

                            <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                                <MDBIcon fab icon='github' size="sm" />
                            </MDBBtn>

                        </div>
                    </div> 
                </form>

            </MDBContainer> */}
            <div className='vh-100'>
                <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8"
                    style={{
                        backgroundImage: 'url(assets/img/travel/showcase-8.webp)',
                        backgroundSize: "cover",


                    }}>
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        {/* <img
                        alt="Your Company"
                        src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                        className="mx-auto h-10 w-auto"
                    /> */}
                        <h1 className='mb-3 text-center'>TOUR</h1>
                        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-black">Admin Sign in </h2>
                    </div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form action="#" onSubmit={getapi} method="POST" className="space-y-6">
                            <div>
                                <label htmlFor="email" className="block text-sm/6 font-medium text-black">
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input
                                        value={admin.email}
                                        onChange={change}
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder='Enter Your Email ID'

                                        autoComplete="email"
                                        className="block w-full rounded-md bg-transparent px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-black placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6 autofill:bg-transparent"
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="block text-sm/6 font-medium text-black">
                                        Password
                                    </label>
                                    <div className="text-sm">
                                        <Link to="/Adminforgotpassword" className="font-semibold text-indigo-400 hover:text-indigo-300">
                                            Forgot password?
                                        </Link>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <input
                                        value={admin.password} 
                                        onChange={change}
                                        id="password"
                                        name="password"
                                        type="password"
                                        placeholder='Enter Your Password'
                                        
                                        autoComplete="current-password"
                                        className="block w-full rounded-md bg-transparent px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-black placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                                    />
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"

                                    className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                                >
                                    Sign in
                                </button>
                                <button
                                    type="submit"
                                    className="flex  w-full justify-center rounded-md   text-sm/6 font-semibold text-white"
                                >
                                    <Link to="/adminregistor" className='fs-6 flex mt-4 w-full justify-center  bg-indigo-500  px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500'>Sign Up</Link>
                                </button>
                            </div>

                        </form>

                        {/* <p className="mt-10 text-center text-sm/6 text-gray-400">
            Not a member?{' '}
            <a href="#" className="font-semibold text-indigo-400 hover:text-indigo-300">
              Start a 14 day free trial
            </a>
          </p> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Alogin
