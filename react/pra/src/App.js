import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import DemoHome from "./DemoLayout/DemoPage/DemoHome";
import DemoAbout from "./DemoLayout/DemoPage/DemoAbout";
import NotFound from "./DemoLayout/DemoPage/NotFound";
import DemoContact from "./DemoLayout/DemoPage/DemoContact";
import DemoAbout1 from "./DemoLayout/DemoPage/DemoAbout1";
import DemoAbout2 from "./DemoLayout/DemoPage/DemoAbout2";
import VideoPlayer from "./DemoLayout/DemoPage/VideoPlayer";
import Pra from "./Practice/Pra";
import Main from "./Form/Main";
// import { BrowserRouter, Route, Routes } from "react-router";
// import Home from "./Layout/Page/Home";
// import About from "./Layout/Page/About";
// import Contact from "./Layout/Page/Contact";
// import NotFound from "./Layout/Page/NotFound";
// import About1 from "./Layout/Page/About1";
// import Boot from "./Bootsta/Boot";
// import Login from "./Bootsta/Login";
// import Game from "./API/Game";
// import Description from "./API/Description";
// import Main from "./Context/Main";
// import Recipes from "./API/Recipes";
// import Pro from "./API/Pro";
// import Product from "./API/Product";
// import Cats from "./API/Cats";
// import FakePro from "./API/FakePro";
// import ClassCompo from "./Componet/ClassCompo";
// import FunCompo from "./Componet/FunCompo";
// import Api from "./API/Api";
// import Copy from "./API/Copy";
// import Dummy from "./API/Dummy";


function App() {
  return (
    
<BrowserRouter>
    
    <div >
      {/* <h1>Hello This Is App</h1> */}
      {/* <ClassCompo /> */}
      {/* <FunCompo /> */}
      {/* <Api /> */}
      {/* <Copy   /> */}
      {/* <Dummy /> */}
      {/* <Product /> */}
      {/* <Cats /> */}
      {/* <FakePro /> */}
      {/* <Recipes /> */}
      {/* <Pro /> */}
      {/* <Game /> */}
      {/* <Description /> */}
      {/* <Main /> */}
    {/* <Boot /> */}
    {/* <Login /> */}
    {/* <Footer /> */}
   {/* <Routes>
    <Route path="/" element={<DemoHome />} />
    <Route path="/about" element={<DemoAbout />} />
    <Route path="/about/about1" element={<DemoAbout1 />}/>
    <Route path="/about/about2" element={<DemoAbout2 />}/>

    <Route path="/contact" element={<DemoContact />} />

    <Route path="*" element={<NotFound />} />
   </Routes> */}
   {/* <VideoPlayer /> */}
   {/* <Pra /> */}
    <Main />
    </div>
  

  </BrowserRouter>
  )
}
export default App