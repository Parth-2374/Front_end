import React, { use, useEffect, useState } from 'react'

function FakePro() {
    const[user,setuser]=useState([])
    useEffect(()=>{
        prodata()
    },[])
    const prodata =()=>{
        fetch("https://fakestoreapi.com/products",{
            method:"GET"
        })
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            console.log(data)
            setuser(data)
        })
    }

    
  return (
    <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap",gap:"30px",marginLeft:"40px"}} >
      {
        user && user.map((data,index)=>{
            return(
                <div key={index} className="card " style={{ width: '18rem' }}>
                <img src={data.image} style={{height:"500px",width:"100%", objectFit: "contain",padding: "10px"}} className="card-img-top " alt={data.title} />
                <div className="card-body" style={{display:"flex",flexDirection:"column",flexGrow:"1"}}>
                    <h5 className="card-title">{data.title}</h5>
                    <h5 className="card-title">Price:-${data.price}</h5>
                    <p className="card-text">{data.description}</p>
                    <div style={{marginTop:"auto"}}>
                    <button className='btn btn-success '>Buy Now</button>
                    <button className='btn btn-primary 'style={{marginLeft:"10px"}}>Add Cart</button>
                    </div>
                </div>
            </div>
            )
        })
      }
    </div>
  )
}

export default FakePro
