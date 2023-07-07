import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Routes, Route, Link } from "react-router-dom";
import "../app.css";

import { Rate, ConfigProvider, theme } from "antd";

function movieModal({ movie }) {
  const [lgShow, setLgShow] = useState(false);
  return (
    <>
      <div className="col-10 mx-auto col-sm-6 col-md-4 col-lg-3 my-3">
        <div
          className="card h-100 bg-warning bg-gradient"
          id="movie-card"
          onClick={() => setLgShow(true)}
        >
          <img
            className="card-img-top object-fit-cover h-100"
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : `https://st3.depositphotos.com/1653909/18083/i/450/depositphotos_180839616-stock-photo-movie-theater-with-empty-seats.jpg`
            }
            alt="Imagen"
          />
          <div className="card-body text-center">
            <h2 href="" className="card-title text-truncate fs-5">
              {movie.title}
            </h2>
            <span className="card-subtitle">
              <Rate
                disabled
                defaultValue={Math.round(movie.vote_average / 2)}
                style={{ color: "#FF6C00" }}
              />
            </span>
          </div>
        </div>
      </div>
      <Modal
        className="bg-modal"
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        centered
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Body className="bg-warning rounded">
          <div className="row">
            <div className="col">
              <div
                className="overflow-hidden rounded border border-black mx-3"
                style={{ height: "500px" }}
              >
                <img
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                      : `https://st3.depositphotos.com/1653909/18083/i/450/depositphotos_180839616-stock-photo-movie-theater-with-empty-seats.jpg`
                  }
                  alt="Imagen"
                  className="card-img-top object-fit-cover h-100"
                />
              </div>
            </div>
            <div className="col">
              <div className="mx-3 d-flex flex-column justify-content-between h-100">
                <div>
                  <Modal.Title id="example-modal-sizes-title-lg">
                    <h2 className=" text-black">
                      {movie.title} ({movie.release_date?.substring(0, 4)})
                    </h2>
                  </Modal.Title>
                  <p className="text-black">{movie.overview}</p>
                  <div className="text-black d-flex justify-content-between align-items-end">
                    <span>
                      <Rate
                        disabled
                        defaultValue={Math.round(movie.vote_average / 2)}
                        style={{ color: "#FF6C00" }}
                      />
                    </span>
                    <span className="fw-semibold">{movie.vote_average}</span>
                  </div>
                </div>
                <div>
                  <Link to={`/movie/${movie.id}`}>
                    <button className="btn btn-outline-dark form-control fw-semibold">
                      Mas info
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default movieModal;
