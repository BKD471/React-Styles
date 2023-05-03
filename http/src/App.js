import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchMoviesHandler() {
    try {
      const response = await fetch("https://swapi.py4e.com/api/film/");

      if (!response.ok) throw new Error("Dil tut gya");
      const data = await response.json();

      const transformedData = data.results.map((data) => {
        return {
          id: data.episode_id,
          title: data.title,
          openingText: data.opening_crawl,
          releaseDate: data.release_date,
        };
      });

      setMovies(transformedData);
    } catch (e) {
      setError(e.message);
    }
    setIsLoading(false);
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && <p>No Movies Found</p>}
        {isLoading && <p>Click to fetch movies</p>}
        {!isLoading && <p>{error}</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
