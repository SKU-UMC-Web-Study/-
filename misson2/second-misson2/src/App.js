import logo from "./logo.svg";
import "./App.css";
import { movies } from "./movieDummy";

function App() {
  return (
    <div className="app-container">
      {movies.results.map((movie) => (
        <Movie key={movie.id} title={movie.title} poster={movie.poster_path} />
      ))}
    </div>
  );
}

function Movie(props) {
  return (
    <div className="movie">
      <div className="img">
        <img
          src={`https://image.tmdb.org/t/p/w500${props.poster}`}
          alt={props.title}
        />
      </div>
      <div className="title">
        <h2>{props.title}</h2>
      </div>
    </div>
  );
}

export default App;
