import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import '../css files/Navbar.css'; // Separate CSS file for Navbar

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="navbar">
      <button className="menu-btn" onClick={toggleSidebar}>
        &#9776;
      </button>
      <h3>Welcome to CAIF Laboratory</h3>
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="navbar-right">
        <img 
          src="https://pics.craiyon.com/2023-07-15/dc2ec5a571974417a5551420a4fb0587.webp" 
          alt="Profile" 
          className="profile-pic" 
          onClick={() => document.querySelector('.profile-dropdown').classList.toggle('show')}
        />
        <div className="profile-dropdown">
          <Link to="/profile-settings">Profile Settings</Link>
          <Link to="/help">Help</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
