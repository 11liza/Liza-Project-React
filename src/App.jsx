import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MovieAPI from "./components/MovieAPI";
import "./StyleModule.css";



function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);


  return (
    <div className="App">
      <Header />
      <hr />
      
      <MovieAPI
      /> 
      <hr />
      <Footer />
    </div>
   
  );
}

export default App;
