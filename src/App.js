import { useEffect } from "react";
import "./App.css";

const URL_API = "https://www.omdbapi.com?apikey=ab39c9c0";

function App() {
  const SearchMovies = async (title) => {
    const response = await fetch(`${URL_API}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);
  };

  useEffect(() => {
    SearchMovies("Xmen");
  }, []);

  return <h1>Movie Land</h1>;
}

export default App;
