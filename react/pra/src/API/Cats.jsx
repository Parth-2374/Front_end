import React, { useEffect, useState } from 'react'

function Cats() {
    const [card, setcard] = useState([])

    useEffect(() => {
        carddata()
    }, [])

    const carddata = (() => {
        fetch("https://dummyjson.com/carts",
            {
                method: "GET"
            }
        )
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                console.log(data)
                setcard(data.carts)
            })
    })
    return (
        <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap",height:"100%",marginLeft:"30px",gap:"50px"}}>
            {
                card && card.map((user, index) => {
                    // console.log(user)
                    return(
                        user && user.products.map((data,index)=>{
                            return(
                                <div className="card" style={{ width: '18rem' }}>
                                <img src={data.thumbnail} className="card-img-top" alt="..." />
                                <div className="card-body" style={{display:"flex",flexDirection:'column',flexGrow:"1"}}>
                                    <h5 className="card-title">{data.title}</h5>
                                    <p className="card-text">Price:-{data.price}</p>
                                    <div style={{marginTop:"auto"}}>
                                    <button>Buy Now</button>
                                    </div>
                                </div>
                            </div>
                            )
                        })
                    )
                   
                })
            }
        </div>
    )
}

export default Cats
