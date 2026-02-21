import React from 'react'
import Header from './Header'
import { useEffect, useState } from "react";
import { collection, getDocs, deleteDoc, doc, startAt, updateDoc } from "firebase/firestore";
import { db } from "../Firebase/firebase";
import { Link } from 'react-router-dom';

function Mangecard() {
    const [cards, setCards] = useState([]);

    const getCards = async () => {
        const snapshot = await getDocs(collection(db, "card"));
        const cardData = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
        }));
        setCards(cardData);
        // setSelectedCard(cardData);
    };

    useEffect(() => {
        getCards();
    }, []);
    // Start View
    const [selectedCard, setSelectedCard] = useState(null);
    // End View

    // delete funcation start
    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this card?");
        if (!confirmDelete) return;

        try {
            await deleteDoc(doc(db, "card", id));
            alert("Card Deleted Successfully ✅");

            // 🔁 List refresh (without reload)
            setCards(cards.filter(card => card.id !== id));
        } catch (error) {
            console.log(error);
            alert("Delete Failed ❌");
        }
    };
    // delete funcation End

    // Edit Start
    const [editData, setEditData] = useState({
        name: "",
        type: "",
        price: "",
        img: ""
    });
    const handleUpdate = async () => {
        try {
            await updateDoc(doc(db, "card", selectedCard.id), {
                ...editData
            });

            // UI update (important)
            setCards(cards.map(card =>
                card.id === selectedCard.id
                    ? { ...card, ...editData }
                    : card
            ));

            alert("Card Updated Successfully ✅");

            // modal close
            document.getElementById("editModalClose").click();
        } catch (error) {
            console.log(error);
            alert("Update Failed ❌");
        }
    };
    // Edit End


    return (
        <div>
            <Header />
            <main className="main bg-dark min-vh-100 active ">
                {/* Page Title */}
                {/* <div className="page-title dark-background" data-aos="fade" style={{
                    backgroundImage: 'url(https://i.ibb.co/Xf4ZpQkS/showcase-8.webp)', backgroundRepeat: "no-repeat"
                    , backgroundSize: "cover", backgroundPosition: "center", height: "30vh"
                }}>

                </div> */}
                <h1 className='text-center text-white '>Card Mangment Page</h1>
                <div className="container  pb-5 ">
                    <div className="row">
                        <div className="col-6 ">
                            <button className='btn-primary btn ms-3 text-end'><Link className='text-white text-decoration-none' to="/card" >View Card</Link></button>

                        </div>
                        <div className="col-6  text-end">
                            <button className='bg-success btn ms-3'><Link className='text-white text-decoration-none' to="/addcard">Add Card</Link></button>

                        </div>
                    </div>

                    <table className="table table-dark table-hover mt-5 border" >
                        <thead >
                            <tr className='text-center'>
                                <th scope="col">Sr.No</th>
                                <th scope="col">Img</th>
                                <th scope="col">Name</th>
                                <th scope="col">Type</th>
                                <th scope="col">Price</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cards && cards.map((card, index) => (
                                <tr key={card.id} className='text-center'>
                                    <td className='p-4'> {index + 1} </td>
                                    <td><img src={card.img} style={{ width: "200px" }} alt="" /> </td>
                                    <td className='p-4'> {card.name} </td>
                                    <td className='p-4'> {card.type} </td>
                                    <td className='p-4'> ₹ {card.price} </td>
                                    <td className=' '>
                                        <button className='btn bg-info  mt-4' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setSelectedCard(card)}>View</button>
                                        <button className=' btn  mt-4' style={{ backgroundColor: "#4fbd63" }} data-bs-toggle="modal"
                                            data-bs-target="#editModal"
                                            onClick={() => {
                                                setSelectedCard(card);
                                                setEditData({
                                                    name: card.name,
                                                    type: card.type,
                                                    price: card.price,
                                                    img: card.img
                                                });
                                            }}>Edit</button>
                                        <button className='bg-danger btn  mt-4' onClick={() => handleDelete(card.id)} >Delete</button>
                                    </td>
                                </tr>
                            ))}


                        </tbody>
                    </table>
                    <div>

                        {/* Modal */}
                        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content bg-dark text-white">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="exampleModalLabel"></h1>
                                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close" />
                                    </div>
                                    <div className="modal-body">
                                        <div className="container">

                                            {selectedCard ? (
                                                <>
                                                    <img
                                                        src={selectedCard.img}
                                                        alt=""
                                                        style={{ width: "100%", borderRadius: "10px" }}
                                                    />
                                                    <h4 className="mt-3 text-center">{selectedCard.name}</h4>
                                                    <p className="mt-3 text-center">{selectedCard.type}</p>
                                                    <h5 className="mt-3 text-center">price ₹ {selectedCard.price}</h5>
                                                </>
                                            ) : (
                                                <p>Loading...</p>
                                            )}
                                        </div>

                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        {/* <button type="button" className="btn btn-primary">Save changes</button> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

                <div className="modal fade" id="editModal" tabIndex={-1}>
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content bg-dark text-white">

                            <div className="modal-header">
                                <h5 className="modal-title">Edit Card</h5>
                                <button
                                    type="button"
                                    className="btn-close btn-close-white"
                                    data-bs-dismiss="modal"
                                    id="editModalClose"
                                />
                            </div>

                            <div className="modal-body">
                                <span>Edit Your Mobile Name:-</span>
                                <input
                                    className="form-control mb-3 mt-3 text-white border border-white"
                                    value={editData.name}
                                    onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                                    placeholder="Name"
                                />
                                <span>Edit Your Mobile Type:-</span>
                                <input
                                    className="form-control mb-3 mt-3 text-white border border-white"
                                    value={editData.type}
                                    onChange={(e) => setEditData({ ...editData, type: e.target.value })}
                                    placeholder="Type"
                                />
                                <span>Edit Your Mobile Price:-</span>
                                <input
                                    className="form-control mb-3 mt-3 text-white border border-white"
                                    value={editData.price}
                                    onChange={(e) => setEditData({ ...editData, price: e.target.value })}
                                    placeholder="Price"
                                />
                                <span>Edit Your Mobile Image URL:-</span>
                                <input
                                    className="form-control mb-3 mt-3 text-white border border-white"
                                    value={editData.img}
                                    onChange={(e) => setEditData({ ...editData, img: e.target.value })}
                                    placeholder="Image URL"
                                />

                            </div>

                            <div className="modal-footer">
                               

                                <button
                                    className="btn btn-success"
                                    onClick={handleUpdate}
                                >
                                   Upadate Mobile
                                </button>
                               
                            </div>

                        </div>
                    </div>
                </div>
            </main>

        </div>
    )
}

export default Mangecard

