import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css files/Sidebar.css"; // Separate CSS file for Sidebar

const Sidebar = ({ isOpen, toggleSidebar, handleSectionChange }) => {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <button className="sidebar-close" onClick={toggleSidebar}>
        &times;
      </button>
      <br></br>
      <br></br>
      <ul className="sidebar-menu">
        <li onClick={() => handleSectionChange("ViewLab")}>View Lab</li>
        <li onClick={() => handleSectionChange("Records")}>Records</li>
        <li onClick={() => handleSectionChange("FAQ")}>FAQ</li>
      </ul>
    </div>
  );
};

export default Sidebar;
