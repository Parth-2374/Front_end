import React, { useEffect, useState }  from 'react'

function Api() {
    const[user,setuser] =useState([])

    useEffect(()=>{
        fectdata()
    },[])
    const fectdata= ()=>{
        fetch("https://jsonplaceholder.typicode.com/users",
            {
                method:"GET"
            }
        )
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            console.log(data)
            setuser(data)
        })
    }
  return (
    <div>
       <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Company</th>
                        <th scope="col">address</th>
                    </tr>
                </thead>
                <tbody>
                   {
                    user && user.map((data,index)=>{
                        return(
                            <tr key={index}>
                                    <th scope="row">{data.id}</th>
                                    <td>{data.name}</td>
                                    <td>{data.email}</td>
                                    <td>{data.company.name}</td>
                                    <td>{data.address.city}</td>
                                </tr>
                        )
                    }) 
                   }
                </tbody>
            </table>
    </div>
  )
}

export default Api
