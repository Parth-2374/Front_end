import axios from 'axios'
import React, { useState } from 'react'
import { Link, redirect, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function Userlogin() {
    const redirect = useNavigate()
    if (localStorage.getItem("uaerid")) {
        redirect("/")
    }

    const [form, setform] = useState({
        email: "",
        password: ""
    })
    const getchange = (e) => {
        setform({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const userlogin = async (e) => {
        e.preventDefault()
        try {
            const { email, password } = form

            if (email == "" || password == "") {
                console.log("pls Fill Data");
                alert("pls full fill data")
                return;

            }
            const res = await axios.get(`http://localhost:3000/User?email=${email}`)
            console.log(res.data);

            if (res.data.length === 0) {
                console.log("Email Not Match");
                alert("Email Not Match")
                return false;
 
            }
            const user = res.data[0]
            console.log(user);

            if (user.password != password) {
                console.log("Password Not Match");
                alert("Password Not Match")
                
                return false;

            }
            localStorage.setItem("userid", user.id)
            localStorage.setItem("username", user.name)
            console.log("Login Succefully");
            alert("Login Succefully")
            redirect("/")

        } catch (error) {
            console.log("Api Not Found", error);

        }
    }
    return (
        <div className='vh-100'>
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8" 
            style={{
             backgroundImage: 'url(assets/img/travel/showcase-8.webp)' ,
           backgroundSize:"cover",

        
            }}>
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    {/* <img
                        alt="Your Company"
                        src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                        className="mx-auto h-10 w-auto"
                    /> */}
                    <h1 className='mb-3 text-center'>TOUR</h1>
                    <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-black">Sign in to your account</h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form action="#" method="POST" className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm/6 font-medium text-black">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    value={form.email}
                                    onChange={getchange}
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder='Enter Your Email ID'
                                    required
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
                                    <Link to="/forgotpassword" className="font-semibold text-indigo-400 hover:text-indigo-300">
                                        Forgot password?
                                    </Link>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    value={form.password}
                                    onChange={getchange}
                                    id="password"
                                    name="password"
                                    type="password"
                                     placeholder='Enter Your Password'
                                    required
                                    autoComplete="current-password"
                                    className="block w-full rounded-md bg-transparent px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-black placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                onClick={userlogin}
                                className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                            >
                                Sign in
                            </button>
                            <button
                                type="submit"
                                className="flex  w-full justify-center rounded-md   text-sm/6 font-semibold text-white"
                            >
                                {/* <Link to="/userregistor" className='text-white'>Sign Up</Link> */}
                            <Link to="/userregistor" className='fs-6 flex mt-4 w-full justify-center  bg-indigo-500  px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500'>Sign Up</Link>
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
    )
}

export default Userlogin
