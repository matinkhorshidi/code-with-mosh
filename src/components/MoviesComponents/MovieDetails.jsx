import React from 'react';
import { useParams } from 'react-router-dom';
const MovieDetails = (props) => {
  let { id } = useParams();
  let movie = props.movies.filter((m) => m._id === id)[0];
  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <h1>MovieDetails </h1>
      <h2>MovieID : {id} </h2>
      <h2>MovieName : {movie.title}</h2>
      <h2>MovieGenre : {movie.genre.name}</h2>
    </div>
  );
};

export default MovieDetails;
