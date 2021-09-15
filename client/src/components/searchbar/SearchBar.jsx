import React from "react";
import {useState} from 'react'
import { useDispatch } from "react-redux";
import { setFilterName, getDogs } from "../../actions";


export default function SearchBar(){
    const dispatch = useDispatch()
    const [name, setBreed] = useState("")

    function handleInputChange(e){
        e.preventDefault()
        setBreed(e.target.value)
    }

    function handleSubmit(e){
        // e.preventDefault()
        dispatch(setFilterName(name))
    }

    return (
        <div>
            <input
            type= 'text'
            placeholder = "Search..."
            onChange= {(e) => handleInputChange(e)}
            />
            <button onClick={handleSubmit}>Search</button>
        </div>
    )
}