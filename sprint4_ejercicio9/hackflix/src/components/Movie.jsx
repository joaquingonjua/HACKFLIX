import "../App.css";
import React, { useState } from "react";
import { nanoid } from "nanoid";

import MovieModal from "./Modal";

function Movie({ movies }) {
  return (
    <>
      {movies.map((movie) => (
        <MovieModal key={nanoid()} movie={movie} />
      ))}
    </>
  );
}

export default Movie;
