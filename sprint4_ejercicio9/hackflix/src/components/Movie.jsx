import "../App.css";
import React, { useState } from "react";

import MovieModal from "./Modal";

function Movie({ movies }) {
  return (
    <>
      {movies.map((movie) => (
        <MovieModal
          key={Math.floor(String(Math.random() * 10000000000000000))}
          movie={movie}
        />
      ))}
    </>
  );
}

export default Movie;
