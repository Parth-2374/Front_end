import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Componet/Pages/Home'
import Header from './Componet/CommanPage/Header'
import Footer from './Componet/CommanPage/Footer'
import Contact from './Componet/Pages/Contact'
import Blog from './Componet/Pages/Blog'
import Checkout from './Componet/Pages/Checkout'
import Singleblog from './Componet/Pages/Singleblog'
import SingleProductDetails from './Componet/Pages/SingleProductDetails'
import Shop from './Componet/Pages/Shop'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />  
       <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/singleblog' element={<Singleblog />} />
        <Route path='/singleproductdetails' element={<SingleProductDetails />} />
        <Route path='/shop' element={<Shop />} />
        
       </Routes>
       <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App

{/* <form action="https://www.youtube.com/results" method="get" >
<input type="text" placeholder="Enter Your Song" name="search_query">
<input type="submit" name="" id="">
</form> */}
