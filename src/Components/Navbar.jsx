import React from "react";
import { Link } from "react-router-dom";
import './NavStyle.css';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow ">
        <div className="container-fluid">
          <a className="navbar-brand ms-5" >
            <h4>📖Guvi</h4>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center " id="navbarNavAltMarkup">
            <div className="navbar-nav ms-5 ">
              {/* All , full stack development, Data science , Cyber Security & Career */}
              <Link className="nav-link" to="/">ALL</Link>
              <Link className="nav-link" to="/fsd">FULL STACK DEVELOPMENT</Link>
              <Link className="nav-link" to="/ds">DATA SCIENCE</Link>
              <Link className="nav-link" to="/cyber">CYBER SECURITY</Link>
              <Link className="nav-link" to="/career">CAREER</Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
