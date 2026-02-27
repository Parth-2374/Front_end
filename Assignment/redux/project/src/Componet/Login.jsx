import React, { useEffect, useState } from 'react'
import {
    MDBContainer,
    MDBInput,
    MDBCheckbox,
    MDBBtn,
    MDBIcon
}
    from 'mdb-react-ui-kit';
import axios from 'axios';
import { useNavigate } from 'react-router';


function Login() {

    const redirect =useNavigate()
    if (localStorage.getItem("userId")) {
        redirect("/")
    }
    const [form,setform]=useState({
        email:"",
        password:""
    })
    const change=(e)=>{
        setform({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const login =async(e)=>{
        e.preventDefault()
        try {
            const {email,password}=form

            if(email ===""||password===""){
                alert("pls full fill data")
                return;
            }
            const res =await axios.get(`http://localhost:3000/user?email=${email}`)

            if(res.data.length===0){
                alert("Email Not Found")
                return false
            }
            const user =res.data[0]
            if(user.password !=password){
                alert("Password Not Match")
                return false
            }

            localStorage.setItem("userId",user.id)
            localStorage.setItem("userName",user.name)
            alert("Login Succefully")
            redirect("/")

        } catch (error) {
            console.log("Api Not Found",error);
            
        }
    }

    
    return (
        <div>
            <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
                <form action="" onSubmit={login} >


                <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email' name='email' value={form.email} onChange={change} />
                <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' name='password' value={form.password} onChange={change}  />

                <div className="d-flex justify-content-between mx-3 mb-4">
                    <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                    <a href="!#">Forgot password?</a>
                </div>

                <MDBBtn className="mb-4">Sign in</MDBBtn>

                </form>
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

            </MDBContainer>
        </div>
    )
}

export default Login
