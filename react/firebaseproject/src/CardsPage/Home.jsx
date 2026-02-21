import React from 'react'
import Header from './Header'

function Home() {
  return (
    <div>
      <Header />
      <main className="main bg-dark min-vh-100 ">
                
                {/* <div className="page-title dark-background" data-aos="fade" style={{ backgroundImage: 'url(https://i.ibb.co/Xf4ZpQkS/showcase-8.webp)', backgroundRepeat:"no-repeat"
                ,backgroundSize: "cover",backgroundPosition: "center",height: "30vh" }}>
                    
                </div> */}
                    <h1 className='text-center text-white'>Hello Home Page</h1>
            </main>
           
    </div>
  )
}

export default Home
