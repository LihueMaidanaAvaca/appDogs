import React from "react";
import { Link } from "react-router-dom";

export default function Card({name, img, weightmin, weightmax, temp, id}) {
    return (
        <div>
            {/* <Link to={`/${id}`}> */}
            <img src={img} alt="img not found" width="200px" height="200px" />
            <h3>{name}</h3>
            <h5>{weightmin}{weightmax}</h5>
            {console.log('aca esta temp', temp),
                temp?.map(t=> <div key={t.name}>{t.name}</div>    )
                
            }
            {/* </Link>            */}
        </div>
    )
}