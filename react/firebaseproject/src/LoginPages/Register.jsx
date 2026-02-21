import { useState } from "react";
import { auth } from "../Firebase/firebase";
import {
    createUserWithEmailAndPassword,
    updateProfile
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../Firebase/firebase";
import "../index.css"

import { useNavigate } from "react-router-dom";


function Register() {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");



    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            // 1️⃣ AUTH → create user
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );

            const user = userCredential.user;

            // 2️⃣ Update display name
            await updateProfile(user, {
                displayName: name,
            });

            // 3️⃣ FIRESTORE → save user
            await setDoc(doc(db, "users", user.uid), {
                uid: user.uid,
                name: name,
                email: email,
                createdAt: new Date(),
            });

            alert("User Registered Successfully ✅");

            setName("");
            setEmail("");
            setPassword("");

            navigate("/login");

        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <section className="vh-100"  style={{
            backgroundColor: "rgb(107, 107, 107)",
            color: "rgb(230, 230, 230)"
        }}>
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-12 col-xl-11 ">
                        <div className="card text-white  bg-black" >
                            <div className="card-body p-md-5">
                                <div className="row justify-content-center">

                                    {/* FORM */}
                                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4 text-white">
                                            Sign up
                                        </p>

                                        <form className="mx-1 mx-md-4" onSubmit={handleRegister}>

                                            {/* NAME */}
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-user fa-lg me-3 fa-fw text-white"></i>
                                                <div className="flex-fill mb-0">
                                                    <input
                                                        type="text"
                                                        placeholder="Enter Your Name"
                                                        className="form-control bg-dark   bg-transparent text-white"
                                                        value={name}
                                                        onChange={(e) => setName(e.target.value)}
                                                        required
                                                    />
                                                    {/* <label className="form-label">Your Name</label> */}
                                                </div>
                                            </div>

                                            {/* EMAIL */}
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-envelope fa-lg me-3 fa-fw text-white"></i>
                                                <div className=" flex-fill mb-0">
                                                    <input
                                                        type="email"
                                                        placeholder="Enter Your Email Id"
                                                        value={email}
                                                        className="form-control bg-dark   bg-transparent text-white"
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        required
                                                    />
                                                    {/* <label className="form-label">Your Email</label> */}
                                                </div>
                                            </div>

                                            {/* PASSWORD */}
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-lock fa-lg me-3 fa-fw text-white"></i>
                                                <div className="flex-fill mb-0">
                                                    <input
                                                        type="password"
                                                        placeholder="Enter Your Password"
                                                        value={password}
                                                        className="form-control bg-dark bg-transparent text-white "
                                                        onChange={(e) => setPassword(e.target.value)}
                                                        required
                                                    />
                                                    {/* <label className="form-label">Password</label> */}
                                                </div>
                                            </div>

                                            {/* TERMS */}
                                            <div className="form-check d-flex justify-content-center mb-5 ">
                                                <input
                                                    className="form-check-input me-2 custom-checkbox"
                                                    type="checkbox"
                                                    required
                                                   
                                                />
                                                <label className="form-check-label text-white">
                                                    I agree all statements in{" "}
                                                    <a href="#!" >Terms of service</a>
                                                </label>
                                            </div>

                                            {/* BUTTON */}
                                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                <button
                                                    type="submit"
                                                    className="btn text-white border btn-lg"
                                                >
                                                    Register
                                                </button>
                                            </div>

                                        </form>
                                    </div>

                                    {/* IMAGE */}
                                    {/* <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                        <img
                                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                            className="img-fluid "
                                            alt="Sample"
                                        />
                                    </div> */}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Register;
