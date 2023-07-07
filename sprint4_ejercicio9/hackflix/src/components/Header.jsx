import Carousel from "react-bootstrap/Carousel";
import "./Header.css";
import { useState, useEffect } from "react";

function Header({ newMovies }) {
  const [carouselMovies, setCarouselMovies] = useState(null);

  useEffect(() => {
    if (newMovies) {
      let moviesToPush = [];
      for (let i = 0; i < 5; i++) {
        let index = Math.floor(Math.random() * 20);
        if (moviesToPush.includes(newMovies[index])) {
          index = Math.floor(Math.random() * 20);
        }
        if (!moviesToPush.includes(newMovies[index])) {
          moviesToPush.push(newMovies[index]);
        }
      }
      setCarouselMovies(moviesToPush);
    }
  }, [newMovies]);

  return (
    carouselMovies && (
      <Carousel className="carousel-style">
        {carouselMovies.map((movie) => (
          <Carousel.Item key={movie.id}>
            <img
              className="d-block w-100 backdrop-styles d-none d-sm-block"
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              alt="First slide"
            />
            <img
              className="d-block w-100 backdrop-styles d-block d-sm-none"
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt="First slide"
            />
            <Carousel.Caption className="d-none d-sm-block">
              <h3>{movie.title}</h3>
              <p>{movie.vote_average}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    )
  );
}

export default Header;
