import { useEffect } from "react";
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
  const SearchMovies = async (title) => {
    const response = await fetch(`${URL_API}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);
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
        <div className="movie">
          <p style={{ color: "red" }}>{movie1.Year}</p>
        </div>
        <div>
          <img
            src={
              movie1.Poster !== "N/A"
                ? movie1.Poster
                : "https://via.placeholder.com/400"
            }
            alt={movie1.Title}
          />
        </div>
        <span>{movie1.Type}</span>
        <h3>{movie1.Title}</h3>
      </div>
    </>
  );
}

export default App;
