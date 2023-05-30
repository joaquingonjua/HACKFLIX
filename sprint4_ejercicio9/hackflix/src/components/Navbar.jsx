import "../App.css";
import { Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-black bg-gradient container-fluid p-0">
        <div className="container">
          <Link
            to="/"
            className="navbar-brand text-warning font-titles p-0 fs-1"
          >
            <h1>H A C K F L I X</h1>
          </Link>
          <div>
            <NavDropdown
              title="Opciones"
              className="text-warning"
              menuVariant="dark"
            >
              <NavDropdown.Item>
                <Link to={"/aboutus"} className="text-decoration-none">
                  <small className="text-warning fs-6">Sobre Nosotros</small>
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to={"/contact"} className="text-decoration-none">
                  <small className="text-warning fs-6">Contactanos</small>
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
