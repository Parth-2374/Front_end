import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Adminregistor() {
    const redirect=useNavigate()
    const [from, setform] = useState({
        id: "",
        name: "",
        email: "",
        password: ""
    })
    const getchange = (e) => {
        setform({
            ...from,
            id: new Date().getTime().toString(),
            [e.target.name]: e.target.value
        })
    }
    const submitdata = async (e) => {
        e.preventDefault()
        if (from.name == "" || from.email == "" || from.password == "") {
            console.log("Pls field data");
            alert("Pls Full Fill Data...")
            return false;

        }
        try {
            const res =await axios.post("http://localhost:3000/Admin",from)
            console.log(res.data);
            setform({
                id:"",
                name:"",
                email:"",
                password:""
            })
            redirect("/alogin")
            alert("congratulations..")
            
        } catch (error) {
            console.log("Api Not Found",error);
            
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
                    <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-black">Admin Sign Up </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form action="#" onSubmit={submitdata} method="POST" className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm/6 font-medium text-black">
                                Name
                            </label>
                            <div className="mt-2">
                                <input
                                    value={from.name}
                                    onChange={getchange}
                                    id="name"
                                    name="name"
                                    type="name"
                                    placeholder='Enter Your Name'
                                    required
                                    autoComplete="name"
                                    className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-black placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm/6 font-medium text-black">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    value={from.email}
                                    onChange={getchange}
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder='Enter Your Email Id'
                                    required
                                    autoComplete="email"
                                    className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-black placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm/6 font-medium text-black">
                                    Password
                                </label>
                                {/* <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-400 hover:text-indigo-300">
                    Forgot password?
                  </a>
                </div> */}
                            </div>
                            <div className="mt-2">
                                <input
                                    value={from.password}
                                    onChange={getchange}
                                    id="password"
                                    name="password"
                                    type="password"
                                    placeholder='Enter Your Password'
                                    required
                                    autoComplete="current-password"
                                    className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-black placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                            >
                                Sign Up
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

export default Adminregistor

