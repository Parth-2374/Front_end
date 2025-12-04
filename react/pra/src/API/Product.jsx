import React, { useEffect, useState } from 'react'

function Product() {
    const [user, setuser] = useState([])

    useEffect(() => {
        techdata()
    }, [])
    const techdata = () => {
        fetch("https://dummyjson.com/products", {
            method: "GET"
        })
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                console.log(data)
                setuser(data.products)
            })
    }

    return (
        <div style={{display:"flex",flexDirection:"row",height:"100%",flexWrap:"wrap",gap:"50px",marginLeft:"30px"}}>
            {
                user && user.map((data,index)=>{
                   return(
                    <div key={index} className="card " style={{ width: '18rem' }}>
                    <img src={data.thumbnail} className="card-img-top" alt={data.title} />
                    <div className="card-body" style={{display:"flex",flexDirection:"column",flexGrow:"1"}}>
                        <h5 className="card-title">{data.title}</h5>
                        <h5 className="card-title">Price:-${data.price}</h5>
                        <h5 className="card-title">Rating:-{data.rating}</h5>
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
export default Product 
