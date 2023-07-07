import { useState, useEffect } from "react";
import { BottomScrollListener } from "react-bottom-scroll-listener";
import Movies from "./Movies";
import Filter from "./Filter";
import axios from "axios";
import Header from "./Header";

import "./Content.css";

function Content() {
  const [movies, setMovies] = useState([]);
  const [count, setCount] = useState(1);
  const [rates, setRates] = useState(0);
  const [newMovies, setNewMovies] = useState(null);

  useEffect(() => {
    async function getMovies() {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=213a151ab30e0e62d1aa5e5b570c94a4&language=es-ES&sort_by=popularity.desc&certification_country=US&include_video=false&page=${count}&vote_average.gte=${
          rates - 0.99
        }&certification.lte=R&limit=20`
      );
      setMovies([...movies, ...response.data.results]); //... desestructura el array
    }
    getMovies();
  }, [count]);

  useEffect(() => {
    async function getMovies() {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=213a151ab30e0e62d1aa5e5b570c94a4&language=es-ES&sort_by=popularity.desc&certification_country=US&include_video=false&page=1&vote_average.gte=${
          rates - 0.99
        }&certification.lte=R&limit=20`
      );
      setMovies(response.data.results); //... desestructura el array // No se parametriza la pagina en ese effect, para que siempre te filtre segun el rating desde la pagina 1
    }
    getMovies();
  }, [rates]);

  useEffect(() => {
    async function getNewMovies() {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=213a151ab30e0e62d1aa5e5b570c94a4&language=es-ES&sort_by=popularity.desc&certification_country=US&include_video=false&page=1&certification.lte=R&limit=20&primary_release_year=2023`
      );
      setNewMovies(response.data.results);
    }
    getNewMovies();
  }, []);

  return (
    <>
      <div id="header" className="">
        <Header newMovies={newMovies} />
      </div>
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
    </>
  );
}

export default Content;
