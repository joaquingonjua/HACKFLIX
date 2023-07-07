import Carousel from "react-bootstrap/Carousel";
import "./Header.css";
import { useState, useEffect } from "react";

function Header({ newMovies }) {
  const [carouselMovies, setCarouselMovies] = useState(null);

  useEffect(() => {
    if (newMovies) {
      let moviesToPush = [];
      for (let i = 0; i < 5; i++) {
        moviesToPush.push(newMovies[Math.floor(Math.random() * 20)]);
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
              className="d-block w-100 backdrop-styles"
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              alt="First slide"
            />
            <Carousel.Caption>
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
