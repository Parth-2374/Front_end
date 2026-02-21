import React from "react";
import Img1 from "../Image/Img1.jpg"; // apni image ka path

export default function Card() {
  return (
    <div style={{ padding: "40px" }}>
      
   
      <style>{`
       .card-wrapper {
  position: relative;
  padding-top: 80px;
}
        .card-main {
                position: relative;
                background: white;
                // border-radius: 14px;
                padding: 20px;
                width: 320px;
                box-shadow: 0 12px 30px rgba(0,0,0,0.15);
                overflow: visible;
                z-index: 1; 
                }

              
                .card-main::before {
                content: '';
                position: absolute;
                inset: 0;
                background: orange;

                transform: scaleY(0);
                transform-origin: top;
                transition: transform 0.8s ease;

                z-index: 0; 
                 transform-origin:bottom
                }

                .card-main:hover::before {
                transform: scaleY(1);
                 transform-origin:top;
                
                }

               
                .card-main * {
                position: relative;
                z-index: 2;
                }
                


      
        .card-img {
          position: relative;
          margin-left:20px;
          top:-70px;
        }

        .card-img img {
          width: 80%;
          
        //   border-radius: 12px;
        }

      
        .card-content {
        //   margin-top: 20px;
          width:80%;
        //   overflow: hidden;
        }

        .card-content h3 {
          text-transform: uppercase;
          font-size: 28px;
          margin-bottom: 8px;
          margin-left:30px;
          width:100%
        }
       

        .card-content p {
          font-size: 20px;
          color: #555;
          margin-bottom: 12px;
          margin-left:30px;
          width:100%
        }
       .card-main:hover .card-content h3,
        .card-main:hover .card-content p {
        color: white;
        }
        
        .card-content button {
        text-transform: uppercase;
        width:80%;
        padding: 8px 16px;
        color: black;
     
        cursor: pointer;
        transition: 0.3s ease;
        margin-left:0px;

        transform: translateX(-20px);
        box-shadow: 6px 0px 12px rgba(0, 0, 0, 0.35);
        margin-bottom: 30px;
        }

        .card-main:hover .card-content button {
            transform: translateX(10px);
            }
         
      `}</style>


     
      <div className="card-wrapper">
      <div className="card-main ">

        
        <div className="card-img">
          <img src={Img1} style={{width:"100%",height:"100%"}} alt="service" />
        </div>

      
        <div className="card-content ">
          <h3>Metal Welding</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus augue
          </p>
          <button>Read More <i class="bi bi-chevron-double-right ms-1"></i></button>
        </div>

      </div>
      
    </div>
    </div>
  );
}

// import React from 'react'

// function Card() {
//   return (
   
//     <div>
//         <style>
//             {`
//             h1{
//             border:2px solid;
//             position:relative;
//             font-size:5rem;
//             }
//             h1::before{
//              content:' ';
//              display:block;
//              position:absolute;
//              left:0;
//              right:0;bottom:0;
//              top:0;
//              background:orange;
//              transform:scaleY(0);
//              transition:transform 0.8s ease;
//              z-index:-1;
//              transform-origin:bottom;
//             }
//              h1:hover::before{
//                transform:scaleY(1);
//                transform-origin:top;
//              }
//             `}
//         </style>
//       <h1>hello</h1>
//     </div>
//   )
// }

// export default Card
