import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Movie.module.css';

const Movie = (props) => {
  return (
    <li className={classes.movie}>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.openingText}</p>
      <Link className={classes.button} style={{textDecoration:'none', }} to={{pathname:`/summary/${props.id}`,state:props.summary}} >Summary</Link>
    </li>
  );
};

export default Movie;
