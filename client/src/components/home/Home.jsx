import React, { useEffect, useState } from 'react'
// import {Landing} from '../landing/Landing';
import { useDispatch, useSelector } from 'react-redux';
import { getDogs } from '../../actions';
import { Link } from 'react-router-dom';
import Card from '../card/Card';
import s from './home.module.css'

export function Home(){
    const dispatch= useDispatch()
    const allDogs = useSelector((state) => state.allDogs)
    const [loading, setLoading] = useState(true)
    
    console.log('home', allDogs)
    useEffect(()=>{
        dispatch(getDogs());
        setLoading(false)
    },[dispatch])



    function handleClick(e){
        e.preventDefault();
        dispatch(getDogs());
    }
    
    return(
       <div>
           <h1>ADOG ME</h1>
           <Link to= '/dogs'>Adopt Dog</Link>
           <button onClick={e=> {handleClick(e)}}>
               Reload Dogs
           </button>
           <div>
               <select>
                   <option value= 'asd'>ASCENDING</option>
                   <option value= 'des'>DESCENDING</option>
               </select>
               <select>
                   <option value= 'all'>ALL</option>
                   <option value= 'yaverequepongo'>temperamentos</option>
               </select>
               <select>
                   <option value= 'alldogs'>EVERYDOG</option>
                   <option value= 'created'>ADOPTED</option>
                   <option value= 'api'>BREEDS</option>
               </select>
              <div className={`${s.cards}`} >

               { !loading ? allDogs.map(dog=>{
                   console.log('onedog', dog);
                   return (
                       <div key={dog.id}>
                          <Link to={"/home/" + dog.id }>
                          <Card name={dog.name} img={dog.img} weightmin={dog.weightmin} 
                          weightmax={dog.weightmax} temp={dog.temp}/>
                          </Link>
                      </div> 
                       );
                    }):<p>Loading...</p>
                }
                </div>
           </div>
       </div>
       
       )
       
}
    
    
    
    