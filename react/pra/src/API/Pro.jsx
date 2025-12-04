import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Pro() {
  const [data, setdata] = useState([])
  useEffect(() => {
    fectdata()
  }, [])

  const fectdata = async () => {
    const res = await axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=chicken")
    console.log(res)
    setdata(res.data.meals)
  }
  return (
    <div className='row' style={{ gap: "30px",width:"100%",justifyContent:"center",overflow:"hidden"}}>
      {
        data && data.map((user, index) => {
          return (
            <div key={index} className="card col-md-6 " style={{ width: '18rem' }}>
              <img src={user.strMealThumb} className="card-img-top"alt='' />
              <div className="card-body" style={{ display: "flex", flexDirection: "column", flexGrow: "1" }}>
                <h5 className="card-title">{user.strMeal}</h5>
                {/* <h5 className="card-title">Price:-{user.price}</h5> */}
                <p className="card-text">{user.strArea}</p>
                {/* <p className="card-text btn">{user.strYoutube}</p> */}
                <a href={user.strYoutube} target='_blank' rel='noreferrer' className="btn btn-warning" style={{marginBottom:"20px"}}>Watch on YouTube</a>
                <div style={{ marginTop: "auto" }}>
                  <button className='btn btn-success '>Buy Now</button>
                  <button className='btn btn-primary ' style={{ marginLeft: "10px" }}>Add Cart</button>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Pro
