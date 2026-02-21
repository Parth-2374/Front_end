import { useState } from "react";
import "../index.css"
import { auth } from "../Firebase/firebase";
import {
    signInWithEmailAndPassword,
    setPersistence,
    browserSessionPersistence
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../Firebase/firebase";
import { Link, useNavigate } from "react-router-dom";

function Login() {
    
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            // 🔴 SESSION ONLY (auto logout on close)
            await setPersistence(auth, browserSessionPersistence);

            await signInWithEmailAndPassword(auth, email, password);

            localStorage.setItem("isLogin", "true");
            window.location.href = "/";
            alert("Login Successful");
            navigate("/");
        } catch (err) {
            alert(err.message);
        }
    };

    return (
        <section className="vh-100 gradient-custom " style={{
            backgroundColor: "rgb(107, 107, 107)",
            color: "rgb(230, 230, 230)"
        }}
        >
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-10">
                        <div
                            className="card  text-white bg-black "
                           
                        >
                            <div className="card-body p-5 text-center">

                                <form onSubmit={handleLogin}>

                                    <div className="mb-md-5 mt-md-4 pb-5">

                                        <h2 className="fw-bold mb-2 text-uppercase text-white">Login</h2>
                                        <p className="text-white-50 mb-5 ">
                                            Please Enter Your Login And Password!
                                        </p>

                                        {/* EMAIL */}
                                        <div className="  mb-4">
                                            <input
                                                type="email"
                                                className="form-control form-control-lg bg-transparent text-white"
                                                value={email}
                                                placeholder="Enter Your Email ID"
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                            />
                                            {/* <label className="form-label">Email</label> */}
                                        </div>

                                        {/* PASSWORD */}
                                        <div className=" mb-4">
                                            <input
                                                type="password"
                                                className="form-control form-control-lg bg-transparent  text-white "
                                                value={password}
                                                placeholder="Enter Your Password"
                                                onChange={(e) => setPassword(e.target.value)}
                                                required
                                            />
                                            {/* <label className="form-label">Password</label> */}
                                        </div>

                                        <p className="small mb-4  pb-lg-2 fs-6">
                                            <a className="text-white" href="#!">
                                                Forgot Password?
                                            </a>
                                        </p>

                                        {/* BUTTON */}
                                        <button
                                            className="btn btn-outline-white btn-lg px-5 mb-5 fs-5"
                                            type="submit"
                                        >
                                            Login
                                        </button>

                                        {/* SOCIAL ICONS (UI ONLY) */}
                                        <div className="d-flex justify-content-center text-center  pt-1">
                                            <i className="fab fa-facebook-f fa-lg text-white"></i>
                                            <i className="fab fa-twitter fa-lg mx-4 px-2 text-white"></i>
                                            <i className="fab fa-google fa-lg text-white"></i>
                                        </div>

                                    </div>

                                    {/* REGISTER LINK */}
                                    <div>
                                        <p className="mb-0 text-white">
                                            Don't have an account?{" "}
                                            <Link to="/register" className="text-white-50 fw-bold">
                                                Sign Up
                                            </Link>
                                        </p>
                                    </div>

                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;
