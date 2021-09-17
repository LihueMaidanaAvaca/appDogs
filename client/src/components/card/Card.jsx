import React from "react";
import style from './Card.module.css'

export default function Card({name, img, weightmin, weightmax, temp, id}) {
    return (
        <div className={style.card}>
            
            <img src={img} alt="img not found" width="150px" height="150px" />
            <h3>{name}</h3>
            <label>W min:{weightmin} max:{weightmax}</label>
        
            {temp?.map(t=> <div key={t.name}>{t.name}</div>)}
           
        </div>
    )
}