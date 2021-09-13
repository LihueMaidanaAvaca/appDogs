import React, { useEffect, useState } from 'react'
// import {Landing} from '../landing/Landing';
import { useDispatch, useSelector } from 'react-redux';
import { getDogs,  filterDogsByTemp} from '../../actions';
import { Link } from 'react-router-dom';
import Card from '../card/Card';
import s from './home.module.css'
import Paginate from '../paginate/Paginate';

export function Home(){
    const dispatch= useDispatch()
    const allDogs = useSelector((state) => state.allDogs)
    const [loading, setLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)
    const [dogsPerPage, setDogsPerPaga] = useState(8)
    const indexOfLastDog = currentPage * dogsPerPage
    const indexOfFirstDog = indexOfLastDog - dogsPerPage
    const currentDogs = allDogs.slice(indexOfFirstDog, indexOfLastDog)

    
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }
    
    console.log('home', allDogs)
    useEffect(()=>{
        dispatch(getDogs());
        setLoading(false)
    },[dispatch])



    function handleClick(e){
        e.preventDefault();
        dispatch(getDogs());
    }

    function handleFilterTemp(e){
        dispatch(filterDogsByTemp(e.target.value))
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
               <select onChange= {e => handleFilterTemp(e)}>
                   <option value= 'allDogs'>ALL</option>
                   <option value= 'yaverequepongo'>temperamentos</option>
               </select>
               <select>
                   <option value= 'allDogs'>EVERYDOG</option>
                   <option value= 'created'>ADOPTED</option>
                   <option value= 'api'>BREEDS</option>
               </select>
               <Paginate
               dogsPerPage= {dogsPerPage}
               allDogs={allDogs.length}
               paginate= {paginate}
               />  

              <div className={`${s.cards}`} >

               { !loading ? currentDogs.map(dog=>{
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
    
    
    
    