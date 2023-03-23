import React, { useState, useEffect } from "react";
import Form from "./Form";
import MovieList from "./MovieList";

const apiKey = "baad570d";

function MovieAPI() {
  const [query, setQuery] = useState("Liza");
  const [type, setType] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (query) {
      setLoading(true);
      setError(null);
      fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${query}&type=${type}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          console.log('query',query)
          return response.json();
        })
        .then((data) => {
            setMovies(data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setError(error.message);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setMovies([]);
    }
  }, [query, type]);

  return (
    <div>
      <Form onSearch={setQuery} onTypeChange={setType} initialKeyword={query} />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && <MovieList movies={movies} />}
    </div>
  );
}

export default MovieAPI;
 