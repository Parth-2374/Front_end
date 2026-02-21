import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Img1 from  "../Image/Img1.jpg"
import Img2 from  "../Image/Img2.jpg"
import Img3 from  "../Image/Img3.jpg"

export default function Index() {
  return (
    <div className="position-relative">

      {/* 🔹 INLINE CSS (ONLY CSS LOGIC) */}
      <style>{`
        /* slider height */
        .carousel-item img {
          height: 500px;
          object-fit: cover;
        }

        /* indicators left side */
       .carousel-indicators {
        position: absolute;
        top: 50%;
        left: 20px;
        transform: translateY(-50%);
        right: auto;
       bottom: auto;
       display: flex;
       flex-direction: column;
       gap: 15px;
       margin: 0;
      z-index: 100;
        }

        .carousel-indicators [data-bs-target] {
          width: 90px;
          height: 60px;
          padding: 0;
          border: none;
          background: none;
        }

        /* default gray thumbnails */
        .carousel-indicators img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(100%) brightness(0.6);
          transition: all 0.3s ease;
        }

        /* active slide thumbnail = white */
        .carousel-indicators .active img {
          filter: none;
        }

        /* optional hover */
        .carousel-indicators img:hover {
          filter: none;
        }

        .pop-text {
          opacity: 0;
          animation: smoothPop 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }


        .pop-1 { animation-delay: 0.3s; }
        .pop-2 { animation-delay: 0.6s; }
        .pop-3 { animation-delay: 0.9s; }


        @keyframes smoothPop {
          0% {
            opacity: 0;
            letter-spacing: 0px;
            text-shadow: 0 0 0 rgba(255,255,255,0);
          }
          50% {
            opacity: 1;
            letter-spacing: 2px; 
            text-shadow: 0 0 18px rgba(255,255,255,0.6);
          }
          100% {
            opacity: 1;
            letter-spacing: 0.5px;
            text-shadow: 0 0 0 rgba(255,255,255,0);
          }
        }


      `}</style>


      {/* 🔹 BOOTSTRAP CAROUSEL */}
      <div
        id="heroCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="1000"
      >
        <div className="uppercase" style={{
          position: "absolute",
          top: "50%",
          left: "45%",
          transform: "translate(-50%, -50%)",
          zIndex: 200,
          color: "white",
          textAlign: "center",
          // border:"2px solid",
          pointerEvents: "none",
          fontFamily: "Poppins",
          width: "90%",

          // maxWidth:"1000px",
        }}>
          <h1 className="pop-text pop-1  ml-16 md:!ml-[40px] lg:!ml-[-10px] !text-2xl sm:!text-6xl lg:!text-[90px] inline-block" >Best{" "}
  <span className="block sm:inline">
    Metalcraft
  </span></h1><br />
      <h1 className="pop-text pop-2  !ml-14 !text-2xl sm:!text-6xl lg:!text-[70px] sm:!ml-[-90px]   inline-block lg:!ml-[-450px]"  >Solutions</h1>
<br />
<button
  className="
    pop-text pop-3 btn
    !bg-orange-500 text-white
     hover:!text-black
    transition-all duration-300
    !uppercase
    pointer-events-auto

    /* 🔹 SIZE (mobile → desktop) */
    px-3 py-2 text-xs
    sm:px-4 sm:py-2 sm:text-sm
    lg:px-6 lg:py-3 lg:text-[18px]

    /* 🔹 POSITION */
    !ml-16       /* 📱 mobile → thoda left */
    sm:ml-0
    lg:!ml-[-460px]        /* 💻 laptop → left shift */

    mt-4 sm:mt-6
  
  "
>
  explore more
</button>

          {/* <button className="px-6 py-3  w-2xs lg:!text-[20px]  pop-text pop-3 btn !bg-orange-500 text-white  hover:!text-black transition-all duration-300"
            style={{ transform: "translate(-470px,60px)", pointerEvents: "auto", textTransform: "uppercase" }}>
            explore more</button> */}
        </div>
        {/* THUMBNAILS */}
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
          >
            <img
              src={Img1}
              alt=""
            />
          </button>

          <button
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide-to="1"
          >
            <img
              src={Img2}
              alt=""
            />
          </button>

          <button
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide-to="2"
          >
            <img
              src={Img3}
              alt=""
            />
          </button>

        </div>


        {/* SLIDES */}
        <div className="carousel-inner" style={{filter:" grayscale(70%) brightness(0.6)"}}>
          <div className="carousel-item active" >
            <img
              src={Img1}
              className="d-block w-100"
              alt=""
            />
          </div>

          <div className="carousel-item">
            <img
              src={Img2}
              className="d-block w-100"
              alt=""
            />
          </div>

          <div className="carousel-item">
            <img
              src={Img3}
              className="d-block w-100"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
