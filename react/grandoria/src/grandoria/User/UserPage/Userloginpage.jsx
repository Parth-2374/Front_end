import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

function Userloginpage() {

    useEffect(() => {
        if (localStorage.getItem("userid")) {
            redirect("/")
        }
    }, [])
    const redirect = useNavigate()
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
    const submitdata = async (e) => {
        e.preventDefault()
        try {
            const { email, password } = form
            if (email == "" || password == "") {
                console.log("pls data");
                return false;

            }
            const res = await axios.get(`http://localhost:3000/users?email=${email}`)
            console.log(res.data);

            if (res.data.length === 0) {
                console.log("Email does not match..!");
                return false;
            }
            const user = res.data[0]
            console.log(user);

            if (user.password != password) {
                console.log("Password does not match..!")
                return false
            }

            localStorage.setItem("userid", user.id)
            localStorage.setItem("username", user.name)
           
            redirect("/")
            console.log("succefully login..")
        } catch (error) {
            console.log("Api Not Found ", error);

        }
    }
    return (
        <>
            {/*
            This example requires updating your template:
    
            ```
            <html class="h-full bg-white dark:bg-gray-900">
            <body class="h-full">
            ```
          */}
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        alt="Your Company"
                        src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                        className="mx-auto h-10 w-auto dark:hidden"
                    />
                    <img
                        alt="Your Company"
                        src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                        className="mx-auto h-10 w-auto not-dark:hidden"
                    />
                    <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900 dark:text-white">
                        Sign in to your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form action="#" method="POST" className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm/6 font-medium !text-gray-900 dark:text-gray-100">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input value={form.email} onChange={getchange}
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    autoComplete="email"
                                    className="block w-full rounded-md border-2 bg-white px-3 py-1.5 text-base !text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm/6 font-medium !text-gray-900 dark:text-gray-100">
                                    Password
                                </label>
                                <div className="text-sm">
                                    <a
                                        href="#"
                                        className="font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                                    >
                                        Forgot password?
                                    </a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input value={form.password} onChange={getchange}
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    autoComplete="current-password"
                                    className="block w-full rounded-md border-2 bg-white px-3 py-1.5 text-base !text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit" onClick={submitdata}
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:shadow-none dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500"
                            >
                                Sign in
                            </button>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:shadow-none dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500"
                            >
                                Regiseter
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm/6 text-gray-500 dark:text-gray-400">
                        Not a member?{' '}
                        <a
                            href="#"
                            className="font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                        >
                            Start a 14 day free trial
                        </a>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Userloginpage
