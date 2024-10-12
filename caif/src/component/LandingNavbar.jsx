import React from "react";
import { Link } from "react-router-dom";

function LandingNavbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light sticky-top shadow p-3 mb-5"
      style={{ backgroundColor: "#9acfa8" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img
            src="../public/iiser-logo.png"
            alt="Logo"
            style={{ height: "40px", marginRight: "20px" }}
          />
          <b>CAIF DEPT - IISER BERHAMPUR</b>
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
              <a
                className="nav-link px-4 py-2 hover:bg-success"
                aria-current="page"
                href="#faqSection"
              >
                FAQs
              </a>
            </li>
            <li>
              <Link to="/login" className="text-decoration-none">
                <button
                  type="submit"
                  className="btn btn-success btn-block shadow-sm px-4 py-2"
                >
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
