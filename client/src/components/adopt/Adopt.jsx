import React, {useState, useEffect} from "react";
import {Link, useHistory} from 'react-router-dom';
import {postAdopted, getTemps} from '../../actions';
import { useDispatch, useSelector } from "react-redux";


// let temps = allDogs.map((dog) => {if (dog.temperament) {
//      dog.temperament.replace(/\s/g, '').split(',')}})

export function Adopt(){
    const dispatch = useDispatch()
    const temperaments = useSelector((state) => state.temperaments)

    const [input, setInput] = useState({
        name: "",
        heightmin: "",
        heightmax: "",
        weightmin: "",
        weightmax: "",
        lifespan: "",
        temperament: []
                
    })
    
    useEffect(() => {
        dispatch(getTemps());
    }, []);

    return(
        <div>
            <Link to= '/home'><button>Back</button></Link>
            <h1>Adopt a Dog!</h1>
            <form>
                <div>
                    <label>Name:</label>
                    <input type= "text" value= {input.name} name= "name"/>
                </div>
                <div>
                    <label>heightmin:</label>
                    <input type= "number" value= {input.weightmin} name= "heightmin"/>
                </div>
                <div>
                    <label>heightmax:</label>
                    <input type= "number" value= {input.heightmax} name= "heightmax"/>
                </div>
                <div>
                    <label>weightmin:</label>
                    <input type= "number" value= {input.weightmin} name= "weightmin"/>
                </div>
                <div>
                    <label>weightmax:</label>
                    <input type= "number" value= {input.weightmax} name= "weightmax"/>
                </div>
                <div>
                    <label>lifespan:</label>
                    <input type= "number" value= {input.lifespan} name= "lifespan"/>
                </div>
                <div>
                    <label>Image:</label>
                    <input type= "text" value= {input.Img} name= "Image"/>
                </div>
                <select>
                    {/* {temps.map((tem)=>(
                        <option value={tem}>{tem}</option>
                    ))  
                    } */}
                </select>
            </form>
        </div>
    )




}