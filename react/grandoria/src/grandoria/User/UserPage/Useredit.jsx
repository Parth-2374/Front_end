import React, { useEffect, useState } from 'react'
import Header from '../../coman/Header'
import axios from 'axios'

function Useredit() {

    const[from,setform]=useState(null)

    const [userfrom,setuserfrom]=useState({
        name :"",
        email:"",
        password:"",
        newpassword:""
    })
    const getchange=(e)=>{
        setuserfrom({
            ...userfrom,
            [e.target.name]:e.target.value
        })
    }

   
    return (
        <div>
            <Header />
            {/* <h1 className='text-center mt-3 mb-3'>Hello Update Your Details..</h1> */}

            <div className="bg-white w-full  p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
                    Edit Profile
                </h2>
                <form className="space-y-4" >
                    {/* Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 ">
                            Name
                        </label>
                        <input  name='name' value={userfrom.name} onChange={getchange} type="text" placeholder="Enter your name" className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
                    </div>
                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input name='email' value={userfrom.email} onChange={getchange} type="email" placeholder="Enter your email" className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
                    </div>
                    <hr className="my-4" />
                    <h3 className="text-lg font-semibold text-gray-700">
                        Change Password
                    </h3>
                    {/* Old Password */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Old Password
                        </label>
                        <input name='password' value={userfrom.password }onChange={getchange}  type="password" placeholder="Enter old password" className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
                    </div>
                    {/* New Password */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            New Password
                        </label>
                        <input name='newpassword' value={userfrom.newpassword}onChange={getchange} type="newpassword" placeholder="Enter new password" className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
                    </div>
                    {/* Submit Button */}
                    <button type="submit" className="w-full bg-green-600 text-white py-2 rounded-md font-semibold hover:bg-green-700 transition">
                        Update Profile
                    </button>
                </form>
            </div>


        </div>
    )
}

export default Useredit
