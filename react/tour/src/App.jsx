import React, { useEffect } from 'react'
import Home from './Tour/pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './Tour/pages/About'
import Des from './Tour/pages/Des'
import Tours from './Tour/pages/Tours'
import Gallery from './Tour/pages/Gallery'
import Blog from './Tour/pages/Blog'
import DesDeatil from './Tour/pages/DesDeatil'
import TourDetails from './Tour/pages/TourDetails'
import NotFound from './Tour/pages/NotFound'
import Booking from './Tour/pages/Booking'
import Testimonial from './Tour/pages/Testimonial'
import Faq from './Tour/pages/Faq'
import BlogDetails from './Tour/pages/BlogDetails'
import Terms from './Tour/pages/Terms'
import Privacy from './Tour/pages/Privacy'
import Contact from './Tour/pages/Contact'
import Ahaeder from './Tour/Admin/Coman/Aheader'
import DashBord from './Tour/Admin/Apages/DashBord'
import Aabout from './Tour/Admin/Apages/Aabout'
import Ades from './Tour/Admin/Apages/Ades'
import AdesAdd from './Tour/Admin/Apages/AdesAdd'
import ToursMange from './Tour/Admin/Apages/ToursMange'
import ToursAdd from './Tour/Admin/Apages/ToursAdd'
import Alogin from './Tour/Admin/Apages/Alogin'
import LastMinuteDeals from './Tour/Admin/Apages/LastMinuteDeals'
import AllTours from './Tour/Admin/Apages/AllTours'
import AGallery from './Tour/Admin/Apages/AGallery'
import AddGallery from './Tour/Admin/Apages/AddGallery'
import DesDetail from './Tour/Admin/Apages/DesDetail'
import Addavailabletours from './Tour/Admin/Apages/Addavailabletours'
import AddMustVisitAttractions from './Tour/Admin/Apages/AddMustVisitAttractions'
import Addfeatured from './Tour/Admin/Apages/Addfeatured'
import Addfeaturedright from './Tour/Admin/Apages/Addfeaturedright'
import Addfeatutretours from './Tour/Admin/Apages/Addfeatutretours'
import Userlogin from './Tour/pages/Userlogin'
import UserRegistor from './Tour/pages/UserRegistor'
import UserDashbord from './Tour/pages/UserDashbord'

import { Bounce, Slide, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ForgotPassword from './Tour/pages/ForgotPassword'
import Admindashbord from './Tour/Admin/Apages/Admindashbord'
import Adminregistor from './Tour/Admin/Apages/Adminregistor'
import Adminforgotpassword from './Tour/Admin/Apages/Adminforgotpassword'


function App() {

  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({
        duration: 800,
        easing: "ease-in-out",
        once: true,
        mirror: false,
      });
    } else {
      console.log("AOS NOT LOADED");
    }
  }, []);
  return (
    <BrowserRouter>

      {/* <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
        transition={Bounce}
      /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/destinations' element={<Des />} />
        <Route path='/tours' element={<Tours />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/blog' element={<Blog />} />

        <Route path='/des-destination' element={<DesDeatil />} />
        <Route path='/tour-details' element={<TourDetails />} />
        <Route path='/booking' element={<Booking />} />
        <Route path='/testimonials' element={<Testimonial />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/blog-details' element={<BlogDetails />} />
        <Route path='/terms' element={<Terms />} />
        <Route path='/privacy' element={<Privacy />} />
        <Route path='/contact' element={<Contact />} />

        {/* User Page */}
        <Route path='/userlogin' element={<Userlogin />} />
        <Route path='/userregistor' element={<UserRegistor />} />
        <Route path='/userdashbord' element={<UserDashbord />} />
        <Route path='/forgotpassword' element={<ForgotPassword />} />


        {/* Admin */}
        <Route path='/dashbord' element={<DashBord />} />
        <Route path='/Aabout' element={<Aabout />} />
        <Route path='/Adestinations' element={<Ades />} />
        <Route path='/Adddestinations' element={<AdesAdd />} />
        <Route path='/toursmange' element={<ToursMange />} />
        <Route path='/toursadd' element={<ToursAdd />} />
        <Route path='/lastminutedeals' element={<LastMinuteDeals />} />
        <Route path='/alltours' element={<AllTours />} />
        <Route path='/agallery' element={<AGallery />} />
        <Route path='/addgallery' element={<AddGallery />} />
        <Route path='/adel-detail' element={<DesDetail />} />
        <Route path='/addavailabletour' element={<Addavailabletours />} />
        <Route path='/addmustvisitattractions' element={<AddMustVisitAttractions />} />

        <Route path='/addfeatured' element={<Addfeatured />} />
        <Route path='/addfeaturedright' element={<Addfeaturedright />} />
        <Route path='/addfeatutretours' element={<Addfeatutretours />} />

        <Route path='/alogin' element={<Alogin />} />
        <Route path='/admindashbord' element={<Admindashbord />} />
        <Route path='/adminregistor' element={<Adminregistor />} />
        <Route path='/adminforgotpassword' element={<Adminforgotpassword />} />



        <Route path='*' element={<NotFound />} />


      </Routes>

    </BrowserRouter>
  )
}

export default App
