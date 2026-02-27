import React from 'react'
import { Route } from 'react-router'
import { BrowserRouter, Routes } from 'react-router'
import Home from './Componet/Home'
import Product from './Componet/Product'
import AddProduct from './Componet/AddProduct'
import Register from './Componet/Register'
import Login from './Componet/Login'

function App() {
  return (
    <div>
      <BrowserRouter>
       <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path='/addproduct' element={<AddProduct />} />

        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />

       </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
