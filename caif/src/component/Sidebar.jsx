import React from "react";
import { Link } from "react-router-dom";
import "../css files/Sidebar.css";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
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
  );
};

export default Sidebar;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "../css files/Sidebar.css"; // Separate CSS file for Sidebar

// const Sidebar = ({ isOpen, toggleSidebar, handleSectionChange }) => {
//   return (
//     <div className={`sidebar ${isOpen ? "open" : ""}`}>
//       <button className="sidebar-close" onClick={toggleSidebar}>
//         &times;
//       </button>
//       <br></br>
//       <br></br>
//       <ul className="sidebar-menu">
//         <li onClick={() => handleSectionChange("ViewLab")}>View Lab</li>
//         <li onClick={() => handleSectionChange("Records")}>Records</li>
//         <li onClick={() => handleSectionChange("FAQ")}>FAQ</li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;
