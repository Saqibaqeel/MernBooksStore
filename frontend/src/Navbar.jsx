import React from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary px-5 mb-5">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Book Store
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item me-4">
              <Link to ='/'className="nav-link active" aria-current="page" href="#">
                Home
              </Link>
            </li>
            <li className="nav-item me-4">
              <Link to='/courses' className="nav-link" href="#">
                Courses
              </Link>
            </li>
            <li className="nav-item me-5">
              <Link to='About' className="nav-link" href="#">
                About
              </Link>
            </li>
          </ul>

          <form className="d-flex me-3" role="search">
            <input
              className="form-control me-2 border-0 border-bottom border-success"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>

          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item me-3">
              <a className="nav-link" href="#">
                Dark-mode
              </a>
            </li>
            <li className="nav-item">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#loginModal"
              >
                Login
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Render the Login Component */}
      <Login />
    </nav>
  );
}

export default Navbar;
