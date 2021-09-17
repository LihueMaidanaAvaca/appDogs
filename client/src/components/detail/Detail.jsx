import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../../actions";
import { useEffect, useState } from "react";


export default function Detail(props){
    console.log(props)
    const dispatch = useDispatch()
    const [stats, setStats] = useState([]);

    const myDog = useSelector ((state)=> state.detail)

    useEffect(()=> {
        dispatch(getDetail(props.match.params.id));
    },[dispatch])
    
    
    
    useEffect(() => {
        setStats(myDog);
    }, [myDog])
    
    return (
        <div>          
            
            {
                myDog.length>0?
                <div>
                    <h1>I'm {myDog[0].name} </h1>
                    <img src={myDog[0].image}/>
                    <h2></h2>

                    </div> :<p>Loading...</p>
            }
            <Link to= '/home'>
                <button>Back</button>
            </Link>
        </div>
    )
}