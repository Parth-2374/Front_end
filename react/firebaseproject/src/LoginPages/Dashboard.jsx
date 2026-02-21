import { auth } from "../Firebase/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Header from "../CardsPage/Header";

function Dashboard() {
    const navigate = useNavigate();
    const user = auth.currentUser;



    return (
        <div>
            <section className="vh-100 " style={{
                backgroundColor: "rgb(107, 107, 107)",
                color: "rgb(230, 230, 230)"
            }}>
                <div className="container py-5 h-100 ">
                    <div className="row d-flex justify-content-center align-items-center h-100 ">
                        <div className="col-md-12 col-xl-8">

                            <div className="card bg-black " >
                                <h1 className="text-white text-center mt-5 mb-5">User Dashbord</h1>
                                <div className="card-body">

                                    <div className="d-flex text-white row ">
                                        <h4 className="p-2 text-end   col-5 ">Your Name:-</h4>
                                        <h4 className="mb-2 col-7 ps-4 border border-info p-2 w-50 rounded-pill ">
                                            {user?.displayName || "User"}
                                        </h4>
                                    </div>


                                    <div className="d-flex  text-white mt-4 row mb-3 ">
                                        <h4 className="p-2 text-end col-5 "> Your Email ID:-</h4>
                                        <h4 className="mb-2 ps-4 border border-info p-2 w-50 rounded-pill ">
                                            {user?.email}
                                        </h4>
                                    </div>


                                    <div className=" text-center mt-5 ">
                                        <button
                                            onClick={() => navigate("/card")}
                                            className="btn   fs-4 border text-white hover-info"
                                        >
                                            Home Page
                                        </button>
                                        <button
                                            className="btn  ms-3 fs-4 border text-white hover-primary"
                                            onClick={() => navigate("/edit-profile")}
                                        >
                                            Edit Your Profile
                                        </button>
                                        <button
                                            className="btn  ms-3 fs-4 border text-white  hover-success"
                                            onClick={() => navigate("/reset-password")}
                                        >
                                            Change Password
                                        </button>

                                    </div>



                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Dashboard;
