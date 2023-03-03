import React, { useState } from 'react';
import logoimg from './images/rectangle_2.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const handleToggle = () => {
    setShowLinks(!showLinks);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary ">
        <div className="container-fluid">
          <nav className="navbar bg-body-tertiary fw-bolder">
            <div className="container-fluid">
              <Link className="navbar-brand text-success" to="#">
                <img
                  src={logoimg}
                  alt="Logo"
                  width="80"
                  height="60"
                  className="d-inline-block"
                />
                CropDetector
              </Link>
            </div>
          </nav>
          <div
            className={`collapse navbar-collapse ${
              showLinks ? 'show' : ''
            }`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-5 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active text-success  mx-3"
                  aria-current="page"
                  to="/"
                >
                  <h5 className="navtext">Home</h5>
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-success fw-bolder  mx-3"
                  href="#features"
                >
                  <h5 className="navtext">Features</h5>
                </a>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-success fw-bolder mx-3"
                  to="#"
                >
                  <h5 className="navtext">Aboutus</h5>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-success fw-bolder mx-3"
                  to="#"
                >
                  <h5 className="navtext">Contact</h5>
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <button className="btn btn-outline-success mx-3 fw-bolder" type="submit">
                Login
              </button>
              <button className="btn btn-outline-success mx-3 fw-bolder" type="submit">
                Signup
              </button>
            </form>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            onClick={handleToggle}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
