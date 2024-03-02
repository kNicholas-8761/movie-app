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
  const [searchTerms, setSearchTerms] = useState("");

  const SearchMovies = async (title) => {
    const response = await fetch(`${URL_API}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    SearchMovies("Superman");
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
        <img
          src="https://raw.githubusercontent.com/gist/adrianhajdin/997a8cdf94234e889fa47be89a4759f1/raw/f13e5a9a0d1e299696aa4a0fe3a0026fa2a387f7/search.svg"
          alt={"search"}
          onClick={() => {}}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => {
            console.log(movie);
            return <MovieCard key={movie.imdbID} movie={movie} />;
          })}
        </div>
      ) : (
        <div className="empty">
          <h2>No movie found</h2>
        </div>
      )}
    </>
  );
}

export default App;
