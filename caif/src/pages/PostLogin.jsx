import React, { useState } from "react";
import Sidebar from "../component/Sidebar";
import Navbar from "../component/Navbar";
import "../css files/ViewLab.css";
import "../css files/PostLogin.css";
import { Search } from "lucide-react"; // Import the Search icon

import instruments from "../data/instrumentData";

const ViewLab = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("ViewLab");
  const [searchTerm, setSearchTerm] = useState("");

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const handleSectionChange = (section) => {
    setActiveSection(section);
    setSidebarOpen(false);
  };

  const filteredInstruments = instruments.filter((instrument) =>
    instrument.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="view-lab-container">
      <Navbar toggleSidebar={toggleSidebar} />
      <div className="content-wrapper">
        <Sidebar
          isOpen={sidebarOpen}
          toggleSidebar={toggleSidebar}
          handleSectionChange={handleSectionChange}
        />
        <div className="main-content">
          <div className="search-container">
            <div className="search-bar">
              <Search className="search-icon" size={20} />
              <input
                type="text"
                className="search-input"
                placeholder="Search Instruments..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="instrument-list">
            {filteredInstruments.map((instrument) => (
              <div key={instrument.id} className="instrument-card">
                <div className="card-img-wrapper">
                  <img
                    src={instrument.image}
                    className="card-img-top"
                    alt={instrument.name}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{instrument.name}</h5>
                  <p className="card-text">{instrument.description}</p>
                  <div className="card-footer">
                    <small className="text-muted">{instrument.category}</small>
                    <button className="btn btn-outline-success btn-sm">
                      Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewLab;



// import React, { useState } from "react";
// import Sidebar from "../component/Sidebar";
// import Navbar from "../component/Navbar";
// import "../css files/ViewLab.css";
// import "../css files/PostLogin.css";

// import instruments from "../data/instrumentData";

// const ViewLab = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState("ViewLab");
//   const [searchTerm, setSearchTerm] = useState("");

//   const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
//   const handleSectionChange = (section) => {
//     setActiveSection(section);
//     setSidebarOpen(false);
//   };

//   const filteredInstruments = instruments.filter((instrument) =>
//     instrument.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="view-lab-container">
//       <Navbar toggleSidebar={toggleSidebar} />
//       <div className="content-wrapper">
//         <Sidebar
//           isOpen={sidebarOpen}
//           toggleSidebar={toggleSidebar}
//           handleSectionChange={handleSectionChange}
//         />
//         <div className="main-content">
//           <div className="search-bar mt-5 p-5">
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Search Instruments..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//           </div>

//         <div className="instrument-list row mt-4">
//           {filteredInstruments.map((instrument) => (
//             <div key={instrument.id} className="col-lg-4 col-md-6 mb-4">
//               <div className="card h-100 shadow-sm border-0 instrument-card">
//                 <div className="card-img-wrapper">
//                   <img
//                     src={instrument.image}
//                     className="card-img-top"
//                     alt={instrument.name}
//                   />
//                 </div>
//                 <div className="card-body d-flex flex-column">
//                   <h5 className="card-title text-success mb-2">{instrument.name}</h5>
//                   <p className="card-text flex-grow-1">{instrument.description}</p>
//                   <div className="mt-auto d-flex justify-content-between align-items-center">
//                     <small className="text-muted">{instrument.category}</small>
//                     <button className="btn btn-outline-success btn-sm">
//                       <i className="fas fa-plus me-1"></i>
//                       Add
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ViewLab;