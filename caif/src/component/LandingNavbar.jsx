import React from "react";
import { Link } from "react-router-dom";
import '../css files/LandingNavbar.css'
import AnchorTemporaryDrawer from "./Drawer";

function LandingNavbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light sticky-top shadow p-3 mb-5"
      style={{ backgroundColor: "#9acfa8" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center title" href="/">
          <img
            src="../iiser-logo.png"
            alt="Logo"
            className="logo"
            style={{ height: "40px", marginRight: "20px" }}
          />
          <img
            src="../iiser-chakra.png"
            alt="Logo"
            className="logo-chakra"
            style={{ height: "40px", marginRight: "10px", marginLeft: "-10px" }}
          />
          <b>CAIF DEPT - IISER BERHAMPUR</b>
        </a>
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item mx-3 d-none d-lg-block">
              <a
                className="nav-link px-4 py-2 hover:bg-success"
                aria-current="page"
                href="#faqSection"
              >
                FAQs
              </a>
            </li>
            <li className="d-none d-lg-block">
              <Link to="/login" className="text-decoration-none">
                <button
                  type="submit"
                  className="btn btn-success btn-block shadow-sm px-4 py-2"
                >
                  Login
                </button>
              </Link>
            </li>
            <li className="menu d-lg-none">
              <AnchorTemporaryDrawer />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default LandingNavbar;
