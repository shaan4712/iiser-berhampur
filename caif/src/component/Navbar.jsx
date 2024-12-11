import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import "../css files/Navbar.css"; // Ensure you have this CSS file

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="navbar">
      <button className="menu-btn" onClick={toggleSidebar}>
        &#9776; {/* Hamburger menu icon */}
      </button>
      <h3>Welcome to CAIF Laboratory</h3>
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="navbar-right">
        <img
          src="https://avatar.iran.liara.run/public"
          alt="Profile"
          className="profile-pic"
          onClick={() =>
            document.querySelector(".profile-dropdown").classList.toggle("show")
          }
        />
        <div className="profile-dropdown">
          <Link to="/profile-settings">Profile Settings</Link>
          <Link to="/faq1">Help</Link>
          <Link
            to="/"
            onClick={() => {
              /* handle logout here */
            }}
          >
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
