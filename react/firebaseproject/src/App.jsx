import React from 'react'
import ProtectedRoute from "./components/ProtectedRoute";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from '../src/LoginPages/Register'
import Login from '../src/LoginPages/Login'
import Dashboard from '../src/LoginPages/Dashboard'
import Header from './CardsPage/Header'
import Mangecard from './CardsPage/Mangecard'
import Home from './CardsPage/Home'
import AddCard from './CardsPage/AddCard'
import EditProfile from './LoginPages/EditProfile';
import ResetPassword from './LoginPages/ResetPassword';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/reset-password" element={
    <ProtectedRoute>
      <ResetPassword />
    </ProtectedRoute>
  }/>
          <Route path='/' element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } />
          <Route path='/card' element={
            <ProtectedRoute>
              <Mangecard />
            </ProtectedRoute>
          } />
          <Route path='/addcard' element={
            <ProtectedRoute>
              <AddCard />
            </ProtectedRoute>
          } />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App

// import { useEffect, useState } from "react";
// import { db } from "../src/Firebase/firebase";
// import {
//   collection,
//   addDoc,
//   getDocs,
//   deleteDoc,
//   doc,
//   updateDoc,
// } from "firebase/firestore";

// function App() {
//   const [cards, setCards] = useState([]);
//   const [title, setTitle] = useState("");
//   const [price, setPrice] = useState("");
//   const [editId, setEditId] = useState(null);

//   const cardCollection = collection(db, "cards");

//   // 🔹 GET DATA
//   const getCards = async () => {
//     const data = await getDocs(cardCollection);
//     setCards(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
//   };

//   useEffect(() => {
//     getCards();
//   }, []);

//   // 🔹 ADD / UPDATE
//   const submitCard = async () => {
//     if (editId) {
//       await updateDoc(doc(db, "cards", editId), {
//         title,
//         price,
//       });
//       setEditId(null);
//     } else {
//       await addDoc(cardCollection, {
//         title,
//         price,
//       });
//     }

//     setTitle("");
//     setPrice("");
//     getCards();
//   };

//   // 🔹 DELETE
//   const deleteCard = async (id) => {
//     await deleteDoc(doc(db, "cards", id));
//     getCards();
//   };

//   // 🔹 EDIT
//   const editCard = (card) => {
//     setTitle(card.title);
//     setPrice(card.price);
//     setEditId(card.id);
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>🔥 Firebase Card CRUD</h2>

//       <input
//         placeholder="Title"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//       />

//       <input
//         placeholder="Price"
//         value={price}
//         onChange={(e) => setPrice(e.target.value)}
//       />

//       <button onClick={submitCard}>
//         {editId ? "Update Card" : "Add Card"}
//       </button>

//       <hr />

//       {cards.map((card) => (
//         <div key={card.id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
//           <h3>{card.title}</h3>
//           <p>₹ {card.price}</p>

//           <button onClick={() => editCard(card)}>Edit</button>
//           <button onClick={() => deleteCard(card.id)}>Delete</button>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;

