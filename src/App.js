import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import "./App.css";

const URL_API = "https://www.omdbapi.com/?apikey=ab39c9c0";

const movie1 = {
  Title: "Xmen: Contest of Champions Part 2",
  Year: "2020",
  imdbID: "tt14920216",
  Type: "movie",
  Poster: "N/A",
};

function App() {
  const [movies, setMovies] = useState([]);

  const SearchMovies = async (title) => {
    const response = await fetch(`${URL_API}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    SearchMovies("Xmen");
  }, []);

  return (
    <>
      <div className="app">
        <h1>Movie Land</h1>
      </div>
      <div className="search">
        <input
          placeholder="Search for movies"
          value="Superman"
          onChange={() => {}}
        ></input>
        <img src="" alt={"search"} onClick={() => {}} />
      </div>

      <div className="container">
        <MovieCard movie1={movie1} />
      </div>
    </>
  );
}

export default App;
