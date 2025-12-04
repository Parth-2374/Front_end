import React, { useEffect, useState } from 'react'

function Dummy() {
    const [user, setuser] = useState([])

    useEffect(() => {
        fctdata()
    },[])

    const fctdata = () => {
        fetch("https://dummyjson.com/users", {
            method: "GET"
        })
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                console.log(data)
                setuser(data.users)
            })
    }
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#id</th>
                        <th scope="col">name</th>
                        <th scope="col">email</th>
                        <th scope="col">city</th>
                        <th scope="col">university</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        user && user.map((data, index) => {
                            return (
                                <tr>
                                    <th scope="row">{data.id}</th>
                                    <td>{data.firstName}</td>
                                    <td>{data.email}</td>
                                    <td>{data.address.city}</td>
                                    <td>{data.university}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

        </div>
    )
}

export default Dummy
