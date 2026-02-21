import React from 'react'

function Header() {

  return (
    <div className="block md:block">
      <header className='bg-amber-600 h-auto  hidden lg:block'>
        <div className='container flex'>
            <div >
            <span className='uppercase text-4xl  text-white inline-block mt-3.5'>weldork</span>
            </div>
            <div className='flex lg:ms-[130px] text-[16px] mt-[25px] text-white gap-3'>

              <i className="fa-solid fa-location-crosshairs mt-1.5"></i>
                <p>123 Street, New York,USA</p>
                <i className='fa-solid fa-message mt-1.5'></i>
                <p>Info@example.com</p>
                <i className='fa-solid fa-phone mt-1.5'></i>
                <p>+012 345 67890</p>
            </div>
            <div>
            <i className="fa-brands fa-facebook ms-5 text-3xl mt-[20px] text-white"  ></i>
            <i className="fa-brands fa-x-twitter ms-3 text-3xl text-white"></i>
            <i className="fa-brands fa-square-instagram ms-3 text-3xl text-white "></i>
            </div>
            <div>

            </div>
        </div>
      </header>
    </div>
  )
}

export default Header
