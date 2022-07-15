
import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import Home from './pages/Home';
import { Route, Switch} from 'react-router-dom';
import Summary from './pages/Summary';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('https://api.tvmaze.com/search/shows?q=all');
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();
      const transformedMovies = data.map((movieData) => {
        return {
          key:Math.random(),
          id: movieData.show.id,
          title: movieData.show.name,
          openingText: movieData.show.type,
          releaseDate: movieData.show.premiered,
          summary:movieData.show.summary
        };
      });
      setMovies(transformedMovies);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  let content = <p>Found no movies.</p>;

  if (movies.length > 0) {
    content =  1 ;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }
 


  return (<>
  {content!==1 && content}
  {content && 
      <Switch>
         {movies.length>0 &&
        <Route path='/summary/:movie_id'>
          <Summary movies={movies}/></Route>}
         
        <Route path='*'><Home movies={movies}/></Route>
      </Switch>
      }
      </>
  );
}

export default App;
