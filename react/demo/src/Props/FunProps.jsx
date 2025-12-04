import React from "react";

function FunPro({img,title,dec}) {
    return(
        <div className="col-md-4">
        <div className="card" style={{ width: '18rem' }}>
            <img src={img} class="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{dec}</p>
                
            </div>
        </div>
    </div>
)
    
}
export default FunPro

