import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <div>
      <nav
        className={`navbar fixed-top navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <strong style={{ color: "#0066b2", fontSize: "30px" }}>
              Finder
            </strong>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/jobs"
                >
                  Jobs
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/services">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/resources"
                >
                  Resources
                </Link>
              </li>
            </ul>

            <Link className="navbar-brand mr-3" to="/auth">
              Signup
            </Link>
            <Link className="navbar-brand mr-5" to="/auth">
              Login
            </Link>
          </div>
          <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form-check-input mr-1"
              onClick={props.toggleMode}
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            {/* <label className="form-check-label" htmlFor="flexSwitchCheckDefault"> Dark mode</label> */}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
