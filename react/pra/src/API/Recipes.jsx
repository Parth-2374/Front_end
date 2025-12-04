import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Recipes() {
    const[rec,setrec]=useState([])
    
    useEffect(()=>{
        recdata()
    },[])
    const recdata = async ()=>{
        const res= await axios.get("https://dummyjson.com/recipes")
        console.log(res)
        setrec(res.data.recipes)
    }
  return (
    <div>
    <h1>hello</h1>
    <div className="container">
        <div className="row h-100" >
            {
                rec && rec.map((data,index)=>{
                    console.log(data)
                    return(
                        <div className="col-md-4" key={index}>
                        <div className="card" style={{ width: '18rem' }}>
                            <img src={data.image} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{data.name}</h5>
                                {/* <h5 className="card-title">{data.price} $</h5> */}
                                <p className="card-text">{data.ingredients}</p>
                                <button className='btn btn-success'>Buy now</button>
                            </div>
                        </div>
                    </div>
                    )
                })
            }
        </div>

    </div>
    </div>
  )
}

export default Recipes
