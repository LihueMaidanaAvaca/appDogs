import React, { useEffect } from 'react'
import {Landing} from '../landing/Landing';
import { useState } from 'react';
import { getDogs } from '../../redux/actions';
import { useDispatch } from 'react-redux';

export function Home(){
    const dispatch= useDispatch()
    const [view, setView] = useState('landing'); 
    useEffect(()=>{dispatch(getDogs())})
    return(

       <div>
           {view === 'landing'? <Landing/> : null}
       </div>
        
    )
}