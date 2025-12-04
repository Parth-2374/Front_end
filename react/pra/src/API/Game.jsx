import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Game() {
    const[game,setgame]=useState([])
    useEffect(()=>{
        gamedata()
    },[])
    const gamedata = async()=>{
        const res = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
        console.log(res)
        setgame(res.data.drinks)
        
    }
  return (
    <div className='container row mx-auto gap-4'>
      {
        game && game.map((data,index)=>{
            return(
                <div className='col'>
                     <div key={index} className="card" style={{ width: '18rem' }}>
              <img src={data.strDrinkThumb} className="card-img-top"alt='' />
              <div className="card-body" style={{ display: "flex", flexDirection: "column" }}>
                <h5 className="card-title">{data.strDrink}</h5>
                <p className="card-text">{data.strGlass}</p>
                <p className="card-text">{data.strCategory}</p>
                <div style={{ marginTop: "auto" }}>
                  <button className='btn btn-success '>Buy Now</button>
                  <button className='btn btn-primary ' style={{ marginLeft: "10px" }}>Add Cart</button>
                </div>
              </div>
            </div>
                </div>
            )

        })
      }
    </div>
  )
}

export default Game
