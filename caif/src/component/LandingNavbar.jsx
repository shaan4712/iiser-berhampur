import React from "react";
import { Link } from "react-router-dom";

function LandingNavbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img
            src="../favicon.ico"
            alt="Logo"
            style={{ height: "30px", marginRight: "10px" }}
          />
          CAIF DEPT - IISER BERHAMPUR
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
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item mx-3">
              <a className="nav-link" aria-current="page" href="#faqSection">
                FAQs
              </a>
            </li>
            <li>
              <Link to="/login" className="text-decoration-none">
                <button type="submit" className="btn btn-success btn-block">
                  Login
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default LandingNavbar;
