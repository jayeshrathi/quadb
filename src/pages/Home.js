import React from 'react';

import MoviesList from '../components/MoviesList';


 function Home(props) {

  return (
    <React.Fragment>
      
      <section><MoviesList movies={props.movies}/></section>
    </React.Fragment>
  );
}

export default Home;
