import "../App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { BottomScrollListener } from "react-bottom-scroll-listener";

import Movies from "../components/Movies";

function SearchMovie() {
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [writtenTitle, setWrittenTitle] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (writtenTitle === "") {
      setPage([]);
    } else {
      async function getMovies() {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=213a151ab30e0e62d1aa5e5b570c94a4&language=es-ES&query=${writtenTitle}&page=1&include_adult=false`
        );
        setFilteredMovies(response.data.results);
      }
      getMovies();
    }
  }, [writtenTitle]);

  useEffect(() => {
    async function getMovies() {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=213a151ab30e0e62d1aa5e5b570c94a4&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&limit=20`
      );
      setFilteredMovies(response.data.results); //... desestructura el array
    }
    getMovies();
  }, [page]);

  return (
    <>
      <div className="container">
        <div className="input-group my-4">
          <span
            className="input-group-text bg-black bg-opacity-10 border-warning"
            id="inputGroup-sizing-default"
          >
            <i className="bi bi-search text-warning mx-3"></i>
          </span>
          <input
            onChange={(event) => {
              setWrittenTitle(event.target.value);
            }}
            type="text"
            className="form-control bg-black bg-opacity-10 border-warning text-warning text-end input-filter"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>
        <div className="row">
          <Movies movies={filteredMovies} />
        </div>
      </div>
    </>
  );
}

export default SearchMovie;
