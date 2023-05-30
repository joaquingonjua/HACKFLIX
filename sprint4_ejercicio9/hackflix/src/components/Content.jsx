import { useState, useEffect } from "react";
import { BottomScrollListener } from "react-bottom-scroll-listener";
import Movies from "./Movies";
import Filter from "./Filter";
import axios from "axios";

function Content() {
  const [movies, setMovies] = useState([]);
  const [count, setCount] = useState(1);
  const [rates, setRates] = useState(0);

  useEffect(() => {
    async function getMovies() {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=213a151ab30e0e62d1aa5e5b570c94a4&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=${count}&vote_average.gte=${
          rates - 0.99
        }&limit=20`
      );
      setMovies([...movies, ...response.data.results]); //... desestructura el array
    }
    getMovies();
  }, [count]);

  useEffect(() => {
    async function getMovies() {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=213a151ab30e0e62d1aa5e5b570c94a4&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=${count}&vote_average.gte=${
          rates - 0.99
        }&limit=20`
      );
      setMovies(response.data.results); //... desestructura el array
    }
    getMovies();
  }, [rates]);

  return (
    <div className="container">
      <BottomScrollListener onBottom={() => setCount(count + 1)} />
      <div className="row">
        <Filter rates={rates} setRates={setRates} />
      </div>
      <div className="row">
        {movies.length > 0 ? (
          <Movies movies={movies} />
        ) : (
          <>
            <div className="fs-5 text-center text-warning bg-warning bg-opacity-25 rounded border border-warning py-2 border-3 spacing">
              No hay peliculas disponibles de momento
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Content;
