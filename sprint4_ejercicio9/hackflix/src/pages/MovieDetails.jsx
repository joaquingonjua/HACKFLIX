import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

import { MutatingDots } from "react-loader-spinner";

function movieDetails() {
  const [movie, setMovie] = useState([]);
  const params = useParams();

  useEffect(() => {
    async function getMovies() {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=213a151ab30e0e62d1aa5e5b570c94a4&language=es-ES`
      );
      setMovie(response.data);
    }
    getMovies();
  }, []);

  return (
    <>
      {movie.length === 0 ? (
        <div className="container">
          <div className=" w-100 d-flex justify-content-center align-items-center">
            <MutatingDots
              height="100"
              width="100"
              color="#ffc107"
              secondaryColor="#ffc107"
              radius="12.5"
              ariaLabel="mutating-dots-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="my-3">
            <a
              className="text-decoration-none"
              href={movie.homepage}
              target="_blank"
            >
              <h2 className="text-warning fs-1 text-center">{movie.title}</h2>
            </a>
          </div>
          <div className="row">
            <div className="col-5">
              <div className="text-center d-flex justify-content-around">
                <div
                  className="overflow-hidden my-3 text-center"
                  style={{ height: "500px" }}
                >
                  <img
                    src={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                        : `https://st3.depositphotos.com/1653909/18083/i/450/depositphotos_180839616-stock-photo-movie-theater-with-empty-seats.jpg`
                    }
                    alt="Imagen"
                    className="object-fit-cover h-100 rounded border border-warning"
                  />
                </div>
              </div>
            </div>
            <div className="col-7">
              <div className="">
                <div className="my-3">
                  <p className="text-warning fs-5 fw-semibold">
                    Fecha de publicacion: {movie.release_date}
                  </p>
                  <p className="text-warning fs-5 fw-semibold mt-4 mb-1">
                    Sinopsis
                  </p>
                  <p className="text-warning">{movie.overview}</p>

                  <div className=" ">
                    <p className="text-warning fw-semibold fs-5 mb-1">
                      Generos
                    </p>
                    {movie.genres.map((genre) => (
                      <small className="text-warning rounded border border-warning px-1 me-1">
                        {genre.name}
                      </small>
                    ))}
                  </div>
                </div>
                <Link to={"/"}>
                  <button className="btn btn-outline-warning form-control fs-6 fw-semibold">
                    ← Volver al inicio
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default movieDetails;
