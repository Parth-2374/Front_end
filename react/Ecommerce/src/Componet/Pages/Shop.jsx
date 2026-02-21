import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

function Shop() {
    const [price, setPrice] = useState([49, 360]);
    return (
        <div>
            <section className="shop_grid_area section-padding-80">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-4 col-lg-3">
                            <div className="shop_sidebar_area">
                                {/* ##### Single Widget ##### */}
                                <div className="widget catagory mb-50">
                                    {/* Widget Title */}
                                    <h6 className="widget-title mb-30">Catagories</h6>
                                    {/*  Catagories  */}
                                    <div className="catagories-menu">
                                        <ul id="menu-content2" className="menu-content collapse show">
                                            {/* Single Item */}
                                            <li data-toggle="collapse" data-target="#clothing">
                                                <a href="#" style={{ color: "black" }}>clothing</a>
                                                <ul className="sub-menu collapse show" id="clothing">
                                                    <li><a href="#">All</a></li>
                                                    <li><a href="#">Bodysuits</a></li>
                                                    <li><a href="#">Dresses</a></li>
                                                    <li><a href="#">Hoodies &amp; Sweats</a></li>
                                                    <li><a href="#">Jackets &amp; Coats</a></li>
                                                    <li><a href="#">Jeans</a></li>
                                                    <li><a href="#">Pants &amp; Leggings</a></li>
                                                    <li><a href="#">Rompers &amp; Jumpsuits</a></li>
                                                    <li><a href="#">Shirts &amp; Blouses</a></li>
                                                    <li><a href="#">Shirts</a></li>
                                                    <li><a href="#">Sweaters &amp; Knits</a></li>
                                                </ul>
                                            </li>
                                            {/* Single Item */}
                                            <li data-toggle="collapse" data-target="#shoes" className="collapsed">
                                                <a href="#" style={{ color: "black" }}>shoes</a>
                                                <ul className="sub-menu collapse" id="shoes">
                                                    <li><a href="#">All</a></li>
                                                    <li><a href="#">Bodysuits</a></li>
                                                    <li><a href="#">Dresses</a></li>
                                                    <li><a href="#">Hoodies &amp; Sweats</a></li>
                                                    <li><a href="#">Jackets &amp; Coats</a></li>
                                                    <li><a href="#">Jeans</a></li>
                                                    <li><a href="#">Pants &amp; Leggings</a></li>
                                                    <li><a href="#">Rompers &amp; Jumpsuits</a></li>
                                                    <li><a href="#">Shirts &amp; Blouses</a></li>
                                                    <li><a href="#">Shirts</a></li>
                                                    <li><a href="#">Sweaters &amp; Knits</a></li>
                                                </ul>
                                            </li>
                                            {/* Single Item */}
                                            <li data-toggle="collapse" data-target="#accessories" className="collapsed">
                                                <a href="#" style={{ color: "black" }}>accessories</a>
                                                <ul className="sub-menu collapse" id="accessories">
                                                    <li><a href="#">All</a></li>
                                                    <li><a href="#">Bodysuits</a></li>
                                                    <li><a href="#">Dresses</a></li>
                                                    <li><a href="#">Hoodies &amp; Sweats</a></li>
                                                    <li><a href="#">Jackets &amp; Coats</a></li>
                                                    <li><a href="#">Jeans</a></li>
                                                    <li><a href="#">Pants &amp; Leggings</a></li>
                                                    <li><a href="#">Rompers &amp; Jumpsuits</a></li>
                                                    <li><a href="#">Shirts &amp; Blouses</a></li>
                                                    <li><a href="#">Shirts</a></li>
                                                    <li><a href="#">Sweaters &amp; Knits</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* ##### Single Widget ##### */}
                                <div className="widget price mb-50">
                                    {/* Widget Title */}
                                    <h6 className="widget-title mb-30">Filter by</h6>
                                    {/* Widget Title 2 */}
                                    <p className="widget-title2 mb-30">Price</p>
                                    <Slider
                                        range
                                        min={49}
                                        max={360}
                                        defaultValue={[49, 360]}
                                        onChange={(value) => setPrice(value)}
                                    />

                                    <div className="range-price">Range: ${price[0]} - ${price[1]}</div>
                                </div>


                                {/* ##### Single Widget ##### */}
                                <div className="widget color mb-50">
                                    {/* Widget Title 2 */}
                                    <p className="widget-title2 mb-30">Color</p>
                                    <div className="widget-desc">
                                        <ul className="d-flex">
                                            <li><a href="#" className="color1" /></li>
                                            <li><a href="#" className="color2" /></li>
                                            <li><a href="#" className="color3" /></li>
                                            <li><a href="#" className="color4" /></li>
                                            <li><a href="#" className="color5" /></li>
                                            <li><a href="#" className="color6" /></li>
                                            <li><a href="#" className="color7" /></li>
                                            <li><a href="#" className="color8" /></li>
                                            <li><a href="#" className="color9" /></li>
                                            <li><a href="#" className="color10" /></li>
                                        </ul>
                                    </div>
                                </div>
                                {/* ##### Single Widget ##### */}
                                <div className="widget brands mb-50">
                                    {/* Widget Title 2 */}
                                    <p className="widget-title2 mb-30">Brands</p>
                                    <div className="widget-desc">
                                        <ul>
                                            <li><a href="#">Asos</a></li>
                                            <li><a href="#">Mango</a></li>
                                            <li><a href="#">River Island</a></li>
                                            <li><a href="#">Topshop</a></li>
                                            <li><a href="#">Zara</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-8 col-lg-9">
                            <div className="shop_grid_product_area">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="product-topbar d-flex align-items-center justify-content-between">
                                            {/* Total Products */}
                                            <div className="total-products">
                                                <p><span>186</span> products found</p>
                                            </div>
                                            {/* Sorting */}
                                            <div className="product-sorting d-flex">
                                                <p>Sort by:</p>
                                                <form action="#" method="get">
                                                    <select name="select" id="sortByselect">
                                                        <option value="value">Highest Rated</option>
                                                        <option value="value">Newest</option>
                                                        <option value="value">Price: $$ - $</option>
                                                        <option value="value">Price: $ - $$</option>
                                                    </select>
                                                    <input type="submit" className="d-none" defaultValue />
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    {/* Single Product */}
                                    <div className="col-12 col-sm-6 col-lg-4">
                                        <div className="single-product-wrapper">
                                            {/* Product Image */}
                                            <div className="product-img">
                                                <img src="img/product-img/product-1.jpg" alt />
                                                {/* Hover Thumb */}
                                                <img className="hover-img" src="img/product-img/product-2.jpg" alt />
                                                {/* Product Badge */}
                                                <div className="product-badge offer-badge">
                                                    <span>-30%</span>
                                                </div>
                                                {/* Favourite */}
                                                <div className="product-favourite">
                                                    <a href="#" className="favme fa fa-heart" />
                                                </div>
                                            </div>
                                            {/* Product Description */}
                                            <div className="product-description">
                                                <span>topshop</span>
                                                <a href="single-product-details.html">
                                                    <h6>Knot Front Mini Dress</h6>
                                                </a>
                                                <p className="product-price"><span className="old-price">$75.00</span> $55.00</p>
                                                {/* Hover Content */}
                                                <div className="hover-content">
                                                    {/* Add to Cart */}
                                                    <div className="add-to-cart-btn">
                                                        <a href="#" className="btn essence-btn">Add to Cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Single Product */}
                                    <div className="col-12 col-sm-6 col-lg-4">
                                        <div className="single-product-wrapper">
                                            {/* Product Image */}
                                            <div className="product-img">
                                                <img src="img/product-img/product-2.jpg" alt />
                                                {/* Hover Thumb */}
                                                <img className="hover-img" src="img/product-img/product-3.jpg" alt />
                                                {/* Favourite */}
                                                <div className="product-favourite">
                                                    <a href="#" className="favme fa fa-heart" />
                                                </div>
                                            </div>
                                            {/* Product Description */}
                                            <div className="product-description">
                                                <span>topshop</span>
                                                <a href="single-product-details.html">
                                                    <h6>Knot Front Mini Dress</h6>
                                                </a>
                                                <p className="product-price">$80.00</p>
                                                {/* Hover Content */}
                                                <div className="hover-content">
                                                    {/* Add to Cart */}
                                                    <div className="add-to-cart-btn">
                                                        <a href="#" className="btn essence-btn">Add to Cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Single Product */}
                                    <div className="col-12 col-sm-6 col-lg-4">
                                        <div className="single-product-wrapper">
                                            {/* Product Image */}
                                            <div className="product-img">
                                                <img src="img/product-img/product-3.jpg" alt />
                                                {/* Hover Thumb */}
                                                <img className="hover-img" src="img/product-img/product-4.jpg" alt />
                                                {/* Product Badge */}
                                                <div className="product-badge new-badge">
                                                    <span>New</span>
                                                </div>
                                                {/* Favourite */}
                                                <div className="product-favourite">
                                                    <a href="#" className="favme fa fa-heart" />
                                                </div>
                                            </div>
                                            {/* Product Description */}
                                            <div className="product-description">
                                                <span>topshop</span>
                                                <a href="single-product-details.html">
                                                    <h6>Knot Front Mini Dress</h6>
                                                </a>
                                                <p className="product-price">$80.00</p>
                                                {/* Hover Content */}
                                                <div className="hover-content">
                                                    {/* Add to Cart */}
                                                    <div className="add-to-cart-btn">
                                                        <a href="#" className="btn essence-btn">Add to Cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Single Product */}
                                    <div className="col-12 col-sm-6 col-lg-4">
                                        <div className="single-product-wrapper">
                                            {/* Product Image */}
                                            <div className="product-img">
                                                <img src="img/product-img/product-4.jpg" alt />
                                                {/* Hover Thumb */}
                                                <img className="hover-img" src="img/product-img/product-5.jpg" alt />
                                                {/* Favourite */}
                                                <div className="product-favourite">
                                                    <a href="#" className="favme fa fa-heart" />
                                                </div>
                                            </div>
                                            {/* Product Description */}
                                            <div className="product-description">
                                                <span>topshop</span>
                                                <a href="single-product-details.html">
                                                    <h6>Knot Front Mini Dress</h6>
                                                </a>
                                                <p className="product-price">$80.00</p>
                                                {/* Hover Content */}
                                                <div className="hover-content">
                                                    {/* Add to Cart */}
                                                    <div className="add-to-cart-btn">
                                                        <a href="#" className="btn essence-btn">Add to Cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Single Product */}
                                    <div className="col-12 col-sm-6 col-lg-4">
                                        <div className="single-product-wrapper">
                                            {/* Product Image */}
                                            <div className="product-img">
                                                <img src="img/product-img/product-5.jpg" alt />
                                                {/* Hover Thumb */}
                                                <img className="hover-img" src="img/product-img/product-6.jpg" alt />
                                                {/* Product Badge */}
                                                <div className="product-badge offer-badge">
                                                    <span>-30%</span>
                                                </div>
                                                {/* Favourite */}
                                                <div className="product-favourite">
                                                    <a href="#" className="favme fa fa-heart" />
                                                </div>
                                            </div>
                                            {/* Product Description */}
                                            <div className="product-description">
                                                <span>topshop</span>
                                                <a href="single-product-details.html">
                                                    <h6>Knot Front Mini Dress</h6>
                                                </a>
                                                <p className="product-price"><span className="old-price">$75.00</span> $55.00</p>
                                                {/* Hover Content */}
                                                <div className="hover-content">
                                                    {/* Add to Cart */}
                                                    <div className="add-to-cart-btn">
                                                        <a href="#" className="btn essence-btn">Add to Cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Single Product */}
                                    <div className="col-12 col-sm-6 col-lg-4">
                                        <div className="single-product-wrapper">
                                            {/* Product Image */}
                                            <div className="product-img">
                                                <img src="img/product-img/product-6.jpg" alt />
                                                {/* Hover Thumb */}
                                                <img className="hover-img" src="img/product-img/product-7.jpg" alt />
                                                {/* Favourite */}
                                                <div className="product-favourite">
                                                    <a href="#" className="favme fa fa-heart" />
                                                </div>
                                            </div>
                                            {/* Product Description */}
                                            <div className="product-description">
                                                <span>topshop</span>
                                                <a href="single-product-details.html">
                                                    <h6>Knot Front Mini Dress</h6>
                                                </a>
                                                <p className="product-price">$80.00</p>
                                                {/* Hover Content */}
                                                <div className="hover-content">
                                                    {/* Add to Cart */}
                                                    <div className="add-to-cart-btn">
                                                        <a href="#" className="btn essence-btn">Add to Cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Single Product */}
                                    <div className="col-12 col-sm-6 col-lg-4">
                                        <div className="single-product-wrapper">
                                            {/* Product Image */}
                                            <div className="product-img">
                                                <img src="img/product-img/product-7.jpg" alt />
                                                {/* Hover Thumb */}
                                                <img className="hover-img" src="img/product-img/product-8.jpg" alt />
                                                {/* Product Badge */}
                                                <div className="product-badge new-badge">
                                                    <span>New</span>
                                                </div>
                                                {/* Favourite */}
                                                <div className="product-favourite">
                                                    <a href="#" className="favme fa fa-heart" />
                                                </div>
                                            </div>
                                            {/* Product Description */}
                                            <div className="product-description">
                                                <span>topshop</span>
                                                <a href="single-product-details.html">
                                                    <h6>Knot Front Mini Dress</h6>
                                                </a>
                                                <p className="product-price">$80.00</p>
                                                {/* Hover Content */}
                                                <div className="hover-content">
                                                    {/* Add to Cart */}
                                                    <div className="add-to-cart-btn">
                                                        <a href="#" className="btn essence-btn">Add to Cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Single Product */}
                                    <div className="col-12 col-sm-6 col-lg-4">
                                        <div className="single-product-wrapper">
                                            {/* Product Image */}
                                            <div className="product-img">
                                                <img src="img/product-img/product-8.jpg" alt />
                                                {/* Hover Thumb */}
                                                <img className="hover-img" src="img/product-img/product-9.jpg" alt />
                                                {/* Favourite */}
                                                <div className="product-favourite">
                                                    <a href="#" className="favme fa fa-heart" />
                                                </div>
                                            </div>
                                            {/* Product Description */}
                                            <div className="product-description">
                                                <span>topshop</span>
                                                <a href="single-product-details.html">
                                                    <h6>Knot Front Mini Dress</h6>
                                                </a>
                                                <p className="product-price">$80.00</p>
                                                {/* Hover Content */}
                                                <div className="hover-content">
                                                    {/* Add to Cart */}
                                                    <div className="add-to-cart-btn">
                                                        <a href="#" className="btn essence-btn">Add to Cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Single Product */}
                                    <div className="col-12 col-sm-6 col-lg-4">
                                        <div className="single-product-wrapper">
                                            {/* Product Image */}
                                            <div className="product-img">
                                                <img src="img/product-img/product-9.jpg" alt />
                                                {/* Hover Thumb */}
                                                <img className="hover-img" src="img/product-img/product-1.jpg" alt />
                                                {/* Favourite */}
                                                <div className="product-favourite">
                                                    <a href="#" className="favme fa fa-heart" />
                                                </div>
                                            </div>
                                            {/* Product Description */}
                                            <div className="product-description">
                                                <span>topshop</span>
                                                <a href="single-product-details.html">
                                                    <h6>Knot Front Mini Dress</h6>
                                                </a>
                                                <p className="product-price">$80.00</p>
                                                {/* Hover Content */}
                                                <div className="hover-content">
                                                    {/* Add to Cart */}
                                                    <div className="add-to-cart-btn">
                                                        <a href="#" className="btn essence-btn">Add to Cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Pagination */}
                            <nav aria-label="navigation">
                                <ul className="pagination mt-50 mb-70">
                                    <li className="page-item"><a className="page-link" href="#"><i className="fa fa-angle-left" /></a></li>
                                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item"><a className="page-link" href="#">...</a></li>
                                    <li className="page-item"><a className="page-link" href="#">21</a></li>
                                    <li className="page-item"><a className="page-link" href="#"><i className="fa fa-angle-right" /></a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Shop

