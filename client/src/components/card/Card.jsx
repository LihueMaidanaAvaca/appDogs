import React from "react";


export default function Card({name, img, weightmin, weightmax, temp}) {
    return (
        <div>
            <img src={img} alt="img not found" width="200px" height="200px" />
            <h3>{name}</h3>
            <h5>{weightmin}{weightmax}</h5>
            <h5>{temp}</h5>            
        </div>
    )
}