import React from 'react'
import { NavLink } from 'react-router-dom'
import { signOut } from "firebase/auth";
import { auth } from "../Firebase/firebase";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";


function Header() {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate("/login"); // logout ke baad login page
            localStorage.clear();
            window.location.href = "/login";
        } catch (error) {
            console.log(error);
        }
    };
    // const handleLogout = () => {
    //     localStorage.clear();
    //     window.location.href = "/login";
    //   };

    // user name
    const [username, setUsername] = useState("");
    useEffect(() => {
        if (auth.currentUser) {
            setUsername(auth.currentUser.displayName || "User");
        }
    }, []);
    return (
        <div>
            <header id="header" className="header d-flex align-items-center pb-5 bg-dark">
                <div className="header-container container-fluid container-xl position-relative d-flex align-items-center rounded-pill py-3 px-4 border" >
                    <NavLink to="/card" className="logo d-flex align-items-center me-auto me-xl-0 text-decoration-none mt-3">
                        {/* Uncomment the line below if you also wish to use an image logo */}
                        {/* <img src="assets/img/logo.webp" alt=""> */}
                        <h1 className="text-white"
                            style={{
                                fontFamily: "Raleway",
                                color:"white"
                            }}
                        >Mobile</h1>
                    </NavLink>
                    <nav id="navmenu" className="navmenu d-flex w-100">
                        <ul className='list-unstyled d-flex align-items-center gap-4 mb-0 ms-5 w-100 '>
                            <li><NavLink to="/card" className=" text-decoration-none  text-white fs-4">Home</NavLink></li>
                            <li><NavLink to="/addcard" className=" text-decoration-none  text-white fs-4">Add Card</NavLink></li>
                            {/* <li className="dropdown">
                                <button className="  btn btn-link text-white fs-4 text-decoration-none p-0  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"><NavLink to="/addcard" className="text-white text-decoration-none ">Add Card</NavLink></button>

                                <ul className="dropdown-menu">
                                    <li><NavLink to="/card" className="active dropdown-item text-decoration-none text-black fs-4 bg-light " >Mange Card</NavLink></li>
                                    <li><NavLink to="/addcard" className="dropdown-item text-decoration-none text-black fs-4 bg-light " >Add Card</NavLink></li>

                                </ul>
                            </li> */}



                            <li className="ms-auto">
                                <NavLink to="/dashboard" className="text-white fs-4 me-3 text-decoration-none">
                                    Hello,{username}
                                </NavLink>


                                <NavLink onClick={handleLogout} className="active text-decoration-none text-white fs-4">
                                    Logout
                                </NavLink>


                            </li>
                        </ul>



                    </nav>

                </div>
            </header>
        </div>
    )
}

export default Header
