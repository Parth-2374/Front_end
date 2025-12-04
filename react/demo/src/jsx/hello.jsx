import React from "react";

function Hello() {
    const data = "Data"
    console.log(data)

    const person = {
        id: 1,
        name: "BMW"
        
    }
//     let htmldata = <ol>
//     <li>Home</li>
//     <li>Home</li>
//     <li>Home</li>
//     <li>Home</li>
//    </ol>
    return (
        <div>
            <h1>Hello This Is Jsx Componet</h1>
            <p>Hello :- {data}</p>
            <p>Person :-{person.name}</p>
            <p>Person :-{person.id}</p>
            {/* {htmldata} */}
            {
            console.log("hello")
        }

        </div>
    )
}
export default Hello