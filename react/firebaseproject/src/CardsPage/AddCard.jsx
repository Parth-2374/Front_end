import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../Firebase/firebase";
import Header from "./Header";
import "../index.css"
import { useNavigate } from "react-router-dom";


function AddCard() {
    const navigate = useNavigate();
    const [img, setImg] = useState("");
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [price, setPrice] = useState("");

    const handleAddCard = async (e) => {
        e.preventDefault();

        try {
            await addDoc(collection(db, "card"), {
                img,
                name,
                type,
                price,
                createdAt: new Date()
            });

            alert("Card Added Successfully ✅");

            // clear form
            setImg("");
            setName("");
            setType("");
            setPrice("");


            navigate("/card");
        } catch (error) {
            console.log(error);
            alert("Error adding card ❌");

        }
    };

    const inputStyle = {
        backgroundColor: "transparent",
        color: "white",
        border: "2px solid white",
        borderRadius: "10px"
      };

    return (
        <div>
         

            <Header />
            <main className="main bg-dark min-vh-100 ">
                {/* Page Title */}
                {/* <div className="page-title dark-background" data-aos="fade" style={{
                    backgroundImage: 'url(https://i.ibb.co/Xf4ZpQkS/showcase-8.webp)', backgroundRepeat: "no-repeat"
                    , backgroundSize: "cover", backgroundPosition: "center", height: "30vh"
                }}>

                </div> */}
              
                <div className="container py-4">
                    <h1 className="text-center text-white mb-4 ">Add Card</h1>

                    <form onSubmit={handleAddCard} className="card p-4 shadow bg-dark ">

                       <span className=" text-white mb-3"> Enter Your Mobile Name:-</span>
                        <input
                            type="text"
                            placeholder="Enter Your Mobile Name" 
                            className="form-control mb-4 border-2 border-white text-white"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            
                            required
                        />

                        <span className=" text-white  mb-3 ">Enter Your Mobile Type:-</span>
                        <input
                            type="text"
                            placeholder="Enter Your Mobile Type"
                            className="form-control mb-4 border-2 border-white  text-white"
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                            required
                        />
                        <span className=" text-white  mb-3 ">Enter Your Mobile Price:-</span>
                        <input
                            type="text"
                            placeholder="Enter Your Mobile Price"
                            className="form-control mb-4 border-2 border-white  text-white"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            required
                        />
                       <span className=" text-white  mb-3 "> Enter Your Mobile Image URL:-</span>
                        <input
                            type="text"
                            placeholder="Enter Your Mobile Image URL"
                            className="form-control mb-5 border-2 border-white  text-white"
                            value={img}
                            onChange={(e) => setImg(e.target.value)}
                            required
                        />

                        <button className="btn btn-success w-100">
                            Add Card
                        </button>

                    </form>
                </div>
            </main>
        </div>


    );
}

export default AddCard;
