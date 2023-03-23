import React from "react";
import Movie from "./Movie";


function MovieList(props) {
  const results = props.movies.Response === "True"? props.movies.Response === 'True'&& props.movies.Search.map((movie) => (
    <Movie
      key={movie.imdbID}
      title={movie.Title}
      year={movie.Year}
      imdbID={movie.imdbID}
      type={movie.Type}
      poster={movie.Poster}
      onMovieClick={props.onMovieClick}
    />
  )): props.movies.Error;
  return (
    <div className="Movie">
      {results}
    </div>
  );
}

export default MovieList;
