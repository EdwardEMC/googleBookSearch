import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link to="/">
        <h4 className="navbar-brand">Home</h4>
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to="/saved">
              <h6 className="nav-link">Saved Books</h6>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/search">
              <h6 className="nav-link">Search</h6>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;