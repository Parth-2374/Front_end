import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import "../../index.css";
import { NavLink } from 'react-router-dom';

function Header() {
  const [open, setOpen] = useState(false);
  const itemEnter = (e) => {
    e.currentTarget.style.color = '#000';
    e.currentTarget.style.background = 'transparent';
  };

  const itemLeave = (e) => {
    e.currentTarget.style.color = '#777';
    e.currentTarget.style.background = 'transparent';
  };
  return (
    <div>
      <header className="header_area">
        <div className="classy-nav-container breakpoint-off d-flex align-items-center justify-content-between">
          {/* Classy Menu */}
          <nav className="classy-navbar" id="essenceNav">
            {/* Logo */}
            <NavLink className="nav-brand" to="/"><img src="img/core-img/logo.png" alt /></NavLink>
            {/* Navbar Toggler */}
            <div className="classy-navbar-toggler">
              <span className="navbarToggler"><span /><span /><span /></span>
            </div>
            {/* Menu */}
            <div className="classy-menu">
              {/* close btn */}
              <div className="classycloseIcon">
                <div className="cross-wrap"><span className="top" /><span className="bottom" /></div>
              </div>
              {/* Nav Start */}
              <div>
                <ul style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '20px',
                  padding: 0,
                  margin: 0
                }}>
                  <li
                    className="nav-item dropdown position-static"
                    onMouseEnter={(e) => {
                      e.currentTarget.querySelector('.dropdown-menu').style.display = 'block';
                      e.currentTarget.querySelector('.shop-link').style.color = '#000';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.querySelector('.dropdown-menu').style.display = 'none';
                      e.currentTarget.querySelector('.shop-link').style.color = '#777';
                    }}
                    style={{ listStyle: 'none' }}
                  >
                    <NavLink
                      className="nav-link dropdown-toggle shop-link  "
                      to="/shop"
                      style={{
                        cursor: 'pointer',
                        fontSize: "17px",
                        fontFamily: "Poppins",
                        color: '#777',
                        display: 'flex',
                        alignItems: 'center',

                      }}
                    >
                      Shop
                      <FontAwesomeIcon icon={faAngleDown} style={{ marginLeft: "5px" }} />
                    </NavLink>


                    <div
                      className="dropdown-menu w-100 shadow border-0 "
                      style={{ display: 'none', marginTop: '0' }}
                    >
                      <div className="container-fulid">
                        <div className="row py-4">
                          <div className="col-md-3">
                            <h6 className="text-uppercase" style={{ color: '#777', fontSize: "14px", marginLeft: "40px" }}>Women's Collection</h6>
                            <ul className="list-unstyled">
                              <li><a className="dropdown-item" href="#" style={{ color: '#777', marginLeft: "22px" }} onMouseEnter={itemEnter} onMouseLeave={itemLeave}>Dresses</a></li>
                              <li><a className="dropdown-item" href="#" style={{ color: '#777', marginLeft: "22px" }} onMouseEnter={itemEnter} onMouseLeave={itemLeave}>Blouses &amp; Shirts</a></li>
                              <li><a className="dropdown-item" href="#" style={{ color: '#777', marginLeft: "22px" }} onMouseEnter={itemEnter} onMouseLeave={itemLeave}>T-shirts</a></li>
                              <li><a className="dropdown-item" href="#" style={{ color: '#777', marginLeft: "22px" }} onMouseEnter={itemEnter} onMouseLeave={itemLeave}>Rompers</a></li>
                              <li><a className="dropdown-item" href="#" style={{ color: '#777', marginLeft: "22px" }} onMouseEnter={itemEnter} onMouseLeave={itemLeave}>Bras &amp; Panties</a></li>
                            </ul>
                          </div>
                          <div className="col-md-3">
                            <h6 className="text-uppercase" style={{ color: '#777', fontSize: "14px", marginLeft: "40px" }}>Men's Collection</h6>
                            <ul className="list-unstyled">
                              <li><a className="dropdown-item" href="#" style={{ color: '#777', marginLeft: "22px" }} onMouseEnter={itemEnter} onMouseLeave={itemLeave}>T-Shirts</a></li>
                              <li><a className="dropdown-item" href="#" style={{ color: '#777', marginLeft: "22px" }} onMouseEnter={itemEnter} onMouseLeave={itemLeave}>Polo</a></li>
                              <li><a className="dropdown-item" href="#" style={{ color: '#777', marginLeft: "22px" }} onMouseEnter={itemEnter} onMouseLeave={itemLeave}>Shirts</a></li>
                              <li><a className="dropdown-item" href="#" style={{ color: '#777', marginLeft: "22px" }} onMouseEnter={itemEnter} onMouseLeave={itemLeave}>Jackets</a></li>
                              <li><a className="dropdown-item" href="#" style={{ color: '#777', marginLeft: "22px" }} onMouseEnter={itemEnter} onMouseLeave={itemLeave}>Trench</a></li>
                            </ul>
                          </div>
                          <div className="col-md-3">
                            <h6 className="text-uppercase" style={{ color: '#777', fontSize: "14px", marginLeft: "40px" }}>Kid's Collection</h6>
                            <ul className="list-unstyled">
                              <li><a className="dropdown-item" href="#" style={{ color: '#777', marginLeft: "22px" }} onMouseEnter={itemEnter} onMouseLeave={itemLeave}>Dresses</a></li>
                              <li><a className="dropdown-item" href="#" style={{ color: '#777', marginLeft: "22px" }} onMouseEnter={itemEnter} onMouseLeave={itemLeave}>Shirts</a></li>
                              <li><a className="dropdown-item" href="#" style={{ color: '#777', marginLeft: "22px" }} onMouseEnter={itemEnter} onMouseLeave={itemLeave}>T-shirts</a></li>
                              <li><a className="dropdown-item" href="#" style={{ color: '#777', marginLeft: "22px" }} onMouseEnter={itemEnter} onMouseLeave={itemLeave}>Jackets</a></li>
                              <li><a className="dropdown-item" href="#" style={{ color: '#777', marginLeft: "22px" }} onMouseEnter={itemEnter} onMouseLeave={itemLeave}>Trench</a></li>
                            </ul>
                          </div>
                          <div className="col-md-3  mt-0" style={{ marginLeft: "-20px", marginTop: "-10px" }} >
                            <img src="img/bg-img/bg-6.jpg" className="img-fluid " alt />
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    className="nav-item dropdown "
                    onMouseEnter={(e) => {
                      e.currentTarget.querySelector('.dropdown-menu').style.display = 'block';
                      e.currentTarget.querySelector('.shop-link').style.color = '#000';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.querySelector('.dropdown-menu').style.display = 'none';
                      e.currentTarget.querySelector('.shop-link').style.color = '#777';
                    }}
                    style={{ listStyle: 'none' }}
                  >
                    <a
                      className="nav-link dropdown-toggle shop-link  "
                      href="#"
                      style={{
                        cursor: 'pointer',
                        fontSize: "17px",
                        fontFamily: "Poppins",
                        color: '#777',
                        display: 'flex',
                        alignItems: 'center',
                        marginLeft: "-30px"
                      }}
                    >
                      Page
                      <FontAwesomeIcon icon={faAngleDown} style={{ marginLeft: "5px" }} />
                    </a>
                    <div
                      className="dropdown-menu shadow border-0 "
                      style={{
                        display: 'none',

                        top: '100%',
                        left: '-50px'
                      }}
                    >
                      <ul className="list-unstyled">
                        <li><a className="dropdown-item" href="#" style={{ color: '#777', marginLeft: "22px" }} onMouseEnter={itemEnter} onMouseLeave={itemLeave}>Shop</a></li>
                        <li><NavLink to="/singleproductdetails" className="dropdown-item" href="#" style={{ color: '#777', marginLeft: "22px" }} onMouseEnter={itemEnter} onMouseLeave={itemLeave}>Product Details</NavLink></li>
                        <li><a className="dropdown-item" href="#" style={{ color: '#777', marginLeft: "22px" }} onMouseEnter={itemEnter} onMouseLeave={itemLeave}>Checkout</a></li>
                        <li><a className="dropdown-item" href="#" style={{ color: '#777', marginLeft: "22px" }} onMouseEnter={itemEnter} onMouseLeave={itemLeave}>Blog</a></li>
                        <li><NavLink to="/singleblog" className="dropdown-item" href="#" style={{ color: '#777', marginLeft: "22px" }} onMouseEnter={itemEnter} onMouseLeave={itemLeave}>Single Blog </NavLink></li>
                        <li><a className="dropdown-item" href="#" style={{ color: '#777', marginLeft: "22px" }} onMouseEnter={itemEnter} onMouseLeave={itemLeave}>Regular Page  </a></li>
                        <li><a className="dropdown-item" href="#" style={{ color: '#777', marginLeft: "22px" }} onMouseEnter={itemEnter} onMouseLeave={itemLeave}>Contact  </a></li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <NavLink
                      to="/blog"
                      style={{
                        cursor: 'pointer',
                        fontSize: "17px",
                        fontFamily: "Poppins",
                        color: '#777',
                        display: 'flex',
                        alignItems: 'center',
                        marginLeft: "-10px",
                        transition: 'color 0.2s ease'
                      }}
                      onMouseEnter={(e) => e.target.style.color = '#000'}
                      onMouseLeave={(e) => e.target.style.color = '#777'}
                    >
                      Blog
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to="/contact"
                      style={{
                        cursor: 'pointer',
                        fontSize: "17px",
                        fontFamily: "Poppins",
                        color: '#777',
                        display: 'flex',
                        alignItems: 'center',
                        transition: 'color 0.2s ease'
                      }}
                      onMouseEnter={(e) => e.target.style.color = '#000'}
                      onMouseLeave={(e) => e.target.style.color = '#777'}
                    >
                      Contact
                    </NavLink>
                  </li>

                </ul>

              </div>

              {/* Mega Dropdown */}



              {/* <ul class="navbar-nav ms-auto">
                <li className="nav-item dropdown position-static">
                  <a className="nav-link dropdown-toggle" href="#">
                    Pages
                  </a>
                  <div className="dropdown-menu w-100  border-0 ">
                    <div className="container-fulid">
                      <div className="row py-4">
                        <div className="col-md-3">
                          <h6 className="text-uppercase">Women's Collection</h6>
                          <ul className="list-unstyled">
                            <li><a className="dropdown-item" href="#">Dresses</a></li>
                            <li><a className="dropdown-item" href="#">Blouses &amp; Shirts</a></li>
                            <li><a className="dropdown-item" href="#">T-shirts</a></li>
                            <li><a className="dropdown-item" href="#">Rompers</a></li>
                            <li><a className="dropdown-item" href="#">Bras &amp; Panties</a></li>
                          </ul>
                        </div>
                        <div className="col-md-3">
                          <h6 className="text-uppercase">Men's Collection</h6>
                          <ul className="list-unstyled">
                            <li><a className="dropdown-item" href="#">T-Shirts</a></li>
                            <li><a className="dropdown-item" href="#">Polo</a></li>
                            <li><a className="dropdown-item" href="#">Shirts</a></li>
                            <li><a className="dropdown-item" href="#">Jackets</a></li>
                            <li><a className="dropdown-item" href="#">Trench</a></li>
                          </ul>
                        </div>
                        <div className="col-md-3">
                          <h6 className="text-uppercase">Kid's Collection</h6>
                          <ul className="list-unstyled">
                            <li><a className="dropdown-item" href="#">Dresses</a></li>
                            <li><a className="dropdown-item" href="#">Shirts</a></li>
                            <li><a className="dropdown-item" href="#">T-shirts</a></li>
                            <li><a className="dropdown-item" href="#">Jackets</a></li>
                            <li><a className="dropdown-item" href="#">Trench</a></li>
                          </ul>
                        </div>
                        <div className="col-md-3">
                          <img src="img/menu-img.jpg" className="img-fluid rounded" alt />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul> */}





              {/* Nav End */}
            </div>
          </nav>
          <div className="header-meta d-flex clearfix justify-content-end">
            {/* Search Area */}
            <div className="search-area">
              <form action="#" method="post">
                <input type="search" name="search" id="headerSearch" placeholder="Type for search" />
                <button type="submit"><i className="fa fa-search" aria-hidden="true" /></button>
              </form>
            </div>
            {/* Favourite Area */}
            <div className="favourite-area">
              <a href="#"><img src="img/core-img/heart.svg" alt /></a>
            </div>
            {/* User Login Info */}
            <div className="user-login-info">
              <a href="#"><img src="img/core-img/user.svg" alt /></a>
            </div>

            {/* Cart Area */}
            <div className="cart-area">
              <a href="#" onClick={() => setOpen(true)} id="essenceCartBtn"><img src="img/core-img/bag.svg" alt /> <span>3</span></a>
            </div>
            {/* <div className="cart-area">
              <button
                onClick={() => setOpen(true)}
                style={{ background: "none", border: "none" }}
              >
                <img src="/img/core-img/bag.svg" alt="" /> <span>3</span>
              </button>
            </div> */}

          </div>


        </div>
      </header>

      <div
        className={`cart-bg-overlay ${open ? "cart-on" : ""}`}
        onClick={() => setOpen(false)}
      ></div>


      <div className={`right-side-cart-area ${open ? "cart-on" : ""}`}>
        {/* Cart Button */}
        <div className="cart-button">
          <button
            onClick={() => setOpen(true)}
            style={{ background: "none", border: "none" }}
          >
            {/* <img src="img/core-img/bag.svg" alt /> <span>3</span> */}
          </button>
        </div>
        <div className="cart-content d-flex">

          {/* Cart List Area */}
          <div className="cart-list">
            {/* Single Cart Item */}
            <div className="single-cart-item">
              <a href="#" className="product-image">
                <img src="img/product-img/product-1.jpg" className="cart-thumb" alt="" />
                {/* Cart Item Desc */}
                <div className="cart-item-desc">
                  <span
                    className="product-remove"
                    
                  >
                    <i className="fa fa-close"></i>
                  </span>
                  <span className="badge">Mango</span>
                  <h6>Button Through Strap Mini Dress</h6>
                  <p className="size">Size: S</p>
                  <p className="color">Color: Red</p>
                  <p className="price">$45.00</p>
                </div>
              </a>
            </div>
            {/* Single Cart Item */}
            <div className="single-cart-item">
              <a href="#" className="product-image">
                <img src="img/product-img/product-2.jpg" className="cart-thumb" alt="" />
                {/* Cart Item Desc */}
                <div className="cart-item-desc">
                  <span
                    className="product-remove"
                   
                  >
                    <i className="fa fa-close"></i>
                  </span>
                  <span className="badge">Mango</span>
                  <h6>Button Through Strap Mini Dress</h6>
                  <p className="size">Size: S</p>
                  <p className="color">Color: Red</p>
                  <p className="price">$45.00</p>
                </div>
              </a>
            </div>
            {/* Single Cart Item */}
            <div className="single-cart-item">
              <a href="#" className="product-image">
                <img src="img/product-img/product-3.jpg" className="cart-thumb" alt />
                {/* Cart Item Desc */}
                <div className="cart-item-desc">
                  <span
                    className="product-remove"
                    
                  >
                    <i className="fa fa-close"></i>
                  </span>
                  <span className="badge">Mango</span>
                  <h6>Button Through Strap Mini Dress</h6>
                  <p className="size">Size: S</p>
                  <p className="color">Color: Red</p>
                  <p className="price">$45.00</p>
                </div>
              </a>
            </div>
          </div>
          {/* Cart Summary */}
          <div className="cart-close-btn" style={{ textAlign: "right", padding: "10px" }}>
            <button
              onClick={() => setOpen(false)}
              style={{
                background: "none",
                border: "none",
                fontSize: "22px",
                cursor: "pointer",
                textAlign: "right"
              }}
            >
              ✕
            </button>
          </div>
          <div className="cart-amount-summary">
            <h2>Summary</h2>
            <ul className="summary-table">
              <li><span>subtotal:</span> <span>$274.00</span></li>
              <li><span>delivery:</span> <span>Free</span></li>
              <li><span>discount:</span> <span>-15%</span></li>
              <li><span>total:</span> <span>$232.00</span></li>
            </ul>
            <div className="checkout-btn mt-100">
              <a href="#" className="btn essence-btn">check out</a>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Header
