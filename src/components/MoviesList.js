import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';
import { Link } from 'react-router-dom';


const MoviesList = ({ moviesArray}) => {
  return (
        <div  className='row mt-2 justify-content-center'>
          {moviesArray.map((movie, key) => (
         <Link to={`/${movie.title}`} style={{width:'33%'}}>
            <MovieCard movie={movie} key={key} />
            </Link>
          ))}
        </div>
  );
};


MoviesList.propTypes = {
  moviesArray: PropTypes.array.isRequired,
};

export default MoviesList;