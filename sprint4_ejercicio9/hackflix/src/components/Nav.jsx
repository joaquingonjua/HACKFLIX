import { Link } from "react-router-dom";
import { NavDropdown, Navbar } from "react-bootstrap";
import "./Nav.css";

function Nav() {
  return (
    <>
      <Navbar className="navbar navbar-expand-lg container-fluid p-0 position-fixed z-3 navbar-style">
        <div className="container">
          <Link
            to="/"
            className="navbar-brand text-warning font-titles p-0 fs-1"
          >
            <h1 className="my-auto">H A C K F L I X</h1>
          </Link>
          <div className="d-flex flex-row my-auto">
            <Link to={"/searchmovies"}>
              <i className="bi bi-search text-warning mx-3 my-auto"></i>
            </Link>
            <NavDropdown
              title="Opciones"
              className="text-warning my-auto"
              menuVariant="dark"
              drop="down-centered"
            >
              <div className="mx-auto d-flex flex-column">
                <Link
                  to={"/aboutus"}
                  className="text-decoration-none text-warning fs-6 ms-2 my-1"
                >
                  Sobre Nosotros
                </Link>
                <Link
                  to={"/contact"}
                  className="text-decoration-none text-warning fs-6 ms-2 my-1"
                >
                  Contactanos
                </Link>
              </div>
            </NavDropdown>
          </div>
        </div>
      </Navbar>
    </>
  );
}

export default Nav;
