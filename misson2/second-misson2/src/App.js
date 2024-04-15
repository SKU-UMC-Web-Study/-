import React, { useState } from 'react';
import { movies } from "./movieDummy";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      {movies.results.map((movie) => (
        <Movie key={movie.id} title={movie.title} poster={movie.poster_path} overview={movie.overview} />
      ))}
    </div>
  );
}

function Movie(props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="movie" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className="img">
        <img
          src={`https://image.tmdb.org/t/p/w500${props.poster}`}
          alt={props.title}
        />
      </div>
      <div className="title">
        <h2>{props.title}</h2>
      </div>
      {isHovered && (
        <div className="details">
          <p>{props.overview}</p>
        </div>
      )}
    </div>
  );
}

export default App;