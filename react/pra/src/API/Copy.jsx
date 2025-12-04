import React, { useEffect, useState } from 'react'

function Copy() {
    const [data, setdata] = useState([])

    useEffect(() => {
        fectdata()
    }, [])
    const fectdata = () => {
        fetch("https://jsonplaceholder.typicode.com/users",
            {
                method: "GET"
            }
        )
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                console.log(data)
                setdata(data)
            })
    }
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#id</th>
                        <th scope="col">name</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        data && data.map((user, index) => {
                            return(
                                <tr>
                                <th scope="row">{user.id}</th>
                                <td>{user.name}</td>
                               
                            </tr>
                            )
                        })
                    }
                </tbody>
            </table>

        </div>
    )
}

export default Copy
