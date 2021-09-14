import React from "react";
import {useState} from 'react'
import { useDispatch } from "react-redux";
import { getBreeds } from "../../actions";


export default function SearchBar(){
    const dispatch = useDispatch()
    const [name, setBreed] = useState("")

    function handleInputChange(e){
        e.preventDefault()
        setBreed(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        dispatch(getBreeds(name))
    }

    return (
        <div>
            <input
            type= 'text'
            placeholder = "Search..."
            onChange= {(e) => handleInputChange(e)}
            />
            <button type = 'submit'onClick= {(e) => handleSubmit}>Search</button>
        </div>
    )
}