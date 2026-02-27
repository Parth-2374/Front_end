import React from 'react'
import { NavLink, useNavigate } from 'react-router'

function Header() {
    const redirect=useNavigate()
    if(!localStorage.getItem("userId")){
        redirect("/login")
    }

    const logout=()=>{
        localStorage.removeItem("userId")
        localStorage.removeItem("userName")
        console.log("log-Out");
        redirect("/login")
        alert("Log-Out Successfully")
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/" href="#">Navbar</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link active" aria-current="page" href="#">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/product" className="nav-link active" aria-current="page" href="#">Product</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/addproduct" className="nav-link active" aria-current="page" href="#">Add-Product</NavLink>
                            </li>

                        </ul>
                            <div className='me-5'>
                                <span className='border p-2 text-light bg-danger rounded-3'onClick={logout}>LogOut</span>
                            </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header
