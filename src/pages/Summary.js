import classes from './Summary.module.css'
import { useParams } from "react-router-dom"
import React from 'react'
import HTMLReactParser from 'html-react-parser';
function Summary(props){
    const param=useParams()
   
    const ar=props.movies
    let short=''
    console.log('aata kama nahi',ar[2].id)
    for(let i=0;i<ar.length;i++){
        if(ar[i].id=== +param.movie_id){
            short=ar[i].summary
        }
    }
    short=HTMLReactParser(short)
    return(<><div className={classes.summary}>{short}</div></>)
    
}

export default Summary