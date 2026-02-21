import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function Adminforgotpassword() {
    const redirect = useNavigate()
    const [from, setfrom] = useState({
        email: "",
        name: "",
        newpassword: "",
        verified: false,
        id: null

    })
    const changedata = (e) => {
        setfrom({
            ...from,
            [e.target.name]: e.target.value
        })
    }
    const change = async () => {
        try {
            const res = await axios.get("http://localhost:3000/Admin")
            
            const user = res.data.find(
                (u) => u.email === from.email && u.name === from.name
            )
            if (user) {
                setfrom({
                    ...from,
                    verified: true,
                    id: user.id
                })
            }
            alert("Name And Email is incorrect")
        } catch (error) {
            console.log("Api Not Find", error);

        }
    }
    const changepassword = async (e) => {
        e.preventDefault()
        try {
            await axios.patch(`http://localhost:3000/Admin/${from.id}`, {
                password: from.newpassword,
            });

            setfrom({
                email: "",
                name: "",
                newPassword: "",
                verified: false,
                id: null

            });
            redirect("/alogin")
            alert("Your Password Update")
        } catch (error) {
            console.log("Api Not Find", error);

        }
    }
    return (
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
                    <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-black">Admin Upadte Password </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form action="#" method="POST" className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm/6 font-medium text-black">
                                User Name
                            </label>
                            <div className="mt-2">
                                <input
                                    value={from.name}
                                    onChange={changedata}
                                    id="name"
                                    name="name"
                                    type="name"
                                    placeholder='Enter Your User Name'
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
                                    onChange={changedata}
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
                            {!from.verified && (
                                <button onClick={change}
                                type="button"
                                    className="flex w-full justify-center rounded-md bg-success px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                                >Verify</button>
                            )}

                            {from.verified && (
                                <>
                                    <div className="flex items-center justify-between">
                                        <label htmlFor="password" className="block text-sm/6 font-medium text-black">
                                            New Password
                                        </label>

                                    </div>
                                    <div className="mt-2">
                                        <input
                                            value={from.newpassword}
                                            onChange={changedata}
                                            id="password"
                                            name="newpassword"
                                            type="password"
                                            placeholder='Enter Your New Password'
                                            required
                                            autoComplete="current-password"
                                            className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-black placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                                        />
                                    </div>
                                    <div>
                                        <button
                                           type="button"
                                                onClick={changepassword}
                                            className="flex mt-5 w-full justify-center rounded-md bg-success px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                                        >
                                            Upadte Password
                                        </button>
                                    </div>
                                </>
                            )}

                            {/* <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm/6 font-medium text-black">
                                New Password
                                </label>
                              
                            </div>
                            <div className="mt-2">
                                <input
                                   value={from.newpassword}
                                   onChange={changedata}
                                    id="password"
                                    name="newpassword"
                                    type="password"
                                    placeholder='Enter Your New Password'
                                    required
                                    autoComplete="current-password"
                                    className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-black placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                                />
                            </div> */}
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

export default Adminforgotpassword

