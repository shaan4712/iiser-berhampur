import React from "react";
import { Link } from "react-router-dom";
import "../css files/Sidebar.css";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      {isOpen && (
        <div
          className="sidebar-overlay"
          onClick={toggleSidebar}
        />
      )}

      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <button className="sidebar-close" onClick={toggleSidebar}>
          &times;
        </button>
        <br />
        <br />
        <ul className="sidebar-menu">
          <li>
            <Link to="/viewlab" className="text-decoration-none text-white" onClick={toggleSidebar}>View Lab</Link>
          </li>
          <li>
            <Link to="/records" className="text-decoration-none text-white" onClick={toggleSidebar}>Records</Link>
          </li>
          <li>
            <Link to="/faq1" className="text-decoration-none text-white" onClick={toggleSidebar}>FAQ</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
