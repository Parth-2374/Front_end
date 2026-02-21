import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './grandoria/page/Home'
import { useEffect } from 'react'
import About from './grandoria/page/About'
import Rooms from './grandoria/page/Rooms'
import Amenities from './grandoria/page/Amenities'
import Notfound404 from './grandoria/page/Notfound404'
import Loction from './grandoria/page/Loction'
import Roomdetails from './grandoria/page/Roomdetails'
import Restaurant from './grandoria/page/Restaurant'
import Offers from './grandoria/page/Offers'
import Events from './grandoria/page/Events'
import Gallery from './grandoria/page/Gallery'
import Booking from './grandoria/page/Booking'
import Terms from './grandoria/page/Terms'
import Privacy from './grandoria/page/Privacy'
import StarterPage from './grandoria/page/StarterPage'
import Contact from './grandoria/page/Contact'
import AdminDashbord from './grandoria/Admin/AdminPage/AdminDashbord'
import MangeRoom from './grandoria/Admin/AdminPage/MangeRoom'
import AddRoom from './grandoria/Admin/AdminPage/AddRoom'

import Userloginpage from './grandoria/User/UserPage/Userloginpage'
import Userdeails from './grandoria/User/UserPage/Userdeails'
import Useredit from './grandoria/User/UserPage/Useredit'




function App() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  }, [])
  return (
    <BrowserRouter>
      <div>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/rooms' element={<Rooms />} />
          <Route path='/amenities' element={<Amenities />} />
          <Route path='/loction' element={<Loction />} />
          <Route path='/room-details' element={<Roomdetails />} />
          <Route path='/restaurant' element={<Restaurant />} />
          <Route path='/offers' element={<Offers />} />
          <Route path='/events' element={<Events />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/booking' element={<Booking />} />
          <Route path='/terms' element={<Terms />} />
          <Route path='/privacy' element={<Privacy />} />
          <Route path='/starter-page' element={<StarterPage />} />
          <Route path='/contact' element={<Contact />} />


          {/* Admin */}
          <Route path='/dashbord' element={<AdminDashbord />} />
          <Route path='/mangeroom' element={<MangeRoom />} />
          <Route path='/addroom' element={<AddRoom />} />


          {/* users */}
        
          <Route path='/userlogin' element={<Userloginpage />} />
          <Route path='/userdetails' element={<Userdeails />}/>
          <Route path='/useredit' element={<Useredit />}/>
         

          {/* Not Found */}
          <Route path='*' element={<Notfound404 />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App

