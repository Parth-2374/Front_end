import React from "react";
import "./style.css"

function Style() {
    const intercss ={
        background :"blue",
        color :"red"
    }
    return (
        <div>
            <h1 style={{background :"red",color :"white"}}>Hello This is Inline Css</h1>
            <h1 style={intercss}>This Is a internal Css</h1>
            <h1 className="excss">This Is a External Css</h1>
        </div>

    )
}
export default Style