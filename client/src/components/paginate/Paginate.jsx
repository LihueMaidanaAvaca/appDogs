import React from "react";

export default function Paginate ({dogsPerPage, allDogs, paginate}){
    const pageNumber= []

    for (let i = 0; i <= Math.floor(allDogs/dogsPerPage); i++) {
         pageNumber.push(i+1)
    }
    return(
        <nav>
            <ul className='paginate'>
                {pageNumber && pageNumber.map(num =>(
                    <div className='paginate' key={num}>
                    <div onClick={()=> paginate(num)}>{num}</div>
                    </div>                
                ))}
            </ul>
        </nav>
    )

}