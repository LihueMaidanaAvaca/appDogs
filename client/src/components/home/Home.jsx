import React, { useEffect, useState } from 'react'
// import {Landing} from '../landing/Landing';
import { useDispatch, useSelector } from 'react-redux';
import { getDogs, filterDogsByTemp, filterCreated, orderByName} from '../../actions';
import { Link } from 'react-router-dom';
import Card from '../card/Card';
import Paginate from '../paginate/Paginate';
import SearchBar from '../searchbar/SearchBar';
import styles from './home.module.css'


export function Home(){
    const dispatch= useDispatch()
    const allDogs = useSelector((state) => state.allDogs)
    const [orden, setOrden] = useState('')
    const [loading, setLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)
    const [dogsPerPage, setDogsPerPage] = useState(8)
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

    function handleSort(e){
        e.preventDefault();
        dispatch(orderByName(e.target.value))
        setCurrentPage(1);
        setOrden(`Ordered ${e.target.value}`)    
    }

    function handleFilterTemp(e){
        dispatch(filterDogsByTemp(e.target.value))
    }

    function handleFilterCreated(e){
        dispatch(filterCreated(e.target.value))
    }

    
    return(
       <div className={styles.div_render}>
           <h1>ADOG ME</h1>
           <Link to= '/adopt'>Adopt Dog</Link>
           <button onClick={e=> {handleClick(e)}}>
               Reload Dogs
           </button>
           <div>
               <select onChange= {e => handleSort(e)}>
                   <option value= 'asd'>ASCENDING</option>
                   <option value= 'des'>DESCENDING</option>
               </select>
               <select onChange= {e => handleFilterTemp(e)}>
                   <option value= 'allDogs'>ALL</option>
                   <option value= 'yaverequepongo'>temperamentos</option>
               </select>
               <select onChange= {e => handleFilterCreated(e)}>
                   <option value= 'allDogs'>EVERYDOG</option>
                   <option value= 'created'>ADOPTED</option>
                   <option value= 'api'>BREEDS</option>
               </select>
               <Paginate
               dogsPerPage= {dogsPerPage}
               allDogs={allDogs.length}
               paginate= {paginate}
               />  
               <SearchBar/>

              <div className={`${styles.cards}`} >

               { !loading ? currentDogs.map(dog=>{
                   console.log('onedog', dog);
                   return (
                       <div key={dog.id}>
                          <Link to={`/${dog.id}`}>
                          <Card name={dog.name} img={dog.image} weightmin={dog.weightmin} 
                          weightmax={dog.weightmax} temp={dog.Temperaments} id={dog.id}
                          />
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
    
    
    
    