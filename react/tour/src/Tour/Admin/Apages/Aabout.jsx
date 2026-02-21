import React from 'react'
import Ahaeder from '../Coman/Aheader'
import { NavLink } from 'react-router-dom'

function Aabout() {
    return (
        <div>
            <Ahaeder />
            <main className="main">
                {/* Page Title */}
                <div className="page-title dark-background" data-aos="fade" style={{ backgroundImage: 'url(assets/img/travel/showcase-8.webp)' }}>
                    <div className="container position-relative">
                        <h1 className='text-uppercase'>About</h1>
                        {/* <p>Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat quibusdam quia assumenda numquam molestias.</p> */}
                        <nav className="breadcrumbs">
                            <ol>
                                <li><NavLink to="/dashbord">Home</NavLink></li>
                                <li className="current">About</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Aabout
