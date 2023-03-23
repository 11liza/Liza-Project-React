import React from "react";

function Movie({ title, year, imdbID, type, poster }) {
  return (
    <div className="movie">
      <div className="movie-info">
        <h3>{title}</h3>
        <p>{year}</p>
        <p>{type}</p>
        IMDB ID
        <a
          href={`https://www.imdb.com/title/${imdbID}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <br />
          {imdbID}
        </a>
        <p>
          {" "}
          <img src={poster} alt={`${title} Poster`} />
        </p>
      </div>
    </div>
  );
}

export default Movie;
