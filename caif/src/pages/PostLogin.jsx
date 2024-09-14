import React, { useState } from "react";
import { Search } from "lucide-react";
import Sidebar from "../component/Sidebar";
import Navbar from "../component/Navbar";
import instruments from "../data/instrumentData"; // Make sure this path is correct
import "../css files/PostLogin.css"; // Make sure this path is correct

const ViewLab = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showDialog, setShowDialog] = useState(false);
  const [selectedInstrument, setSelectedInstrument] = useState(null);
  const [newRecord, setNewRecord] = useState({
    purpose: "",
    fromDate: "",
    toDate: "",
    fuelRequired: "",
  });

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const filteredInstruments = instruments.filter((instrument) =>
    instrument.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddClick = (instrument) => {
    setSelectedInstrument(instrument);
    setShowDialog(true);
  };

  const handleDialogSubmit = (e) => {
    e.preventDefault();
    // Here you would typically add the record to your state or send it to a backend
    console.log("New record:", { ...newRecord, instrumentName: selectedInstrument.name });
    setShowDialog(false);
    setNewRecord({
      purpose: "",
      fromDate: "",
      toDate: "",
      fuelRequired: "",
    });
  };

  return (
    <div className="view-lab-page">
      <Navbar toggleSidebar={toggleSidebar} />
      <div className="content-wrapper">
        <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        <div className="view-lab-container">
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

          <div className="instrument-grid">
            {filteredInstruments.map((instrument) => (
              <div key={instrument.id} className="instrument-card">
                <img
                  src={instrument.image}
                  className="card-img-top"
                  alt={instrument.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{instrument.name}</h5>
                  <p className="card-text">{instrument.description}</p>
                  <button
                    className="btn-add"
                    onClick={() => handleAddClick(instrument)}
                  >
                    Add
                  </button>
                </div>
              </div>
            ))}
          </div>

          {showDialog && (
            <div className="dialog-overlay">
              <div className="dialog">
                <h3>Add {selectedInstrument.name} to Records</h3>
                <form onSubmit={handleDialogSubmit}>
                  <input
                    type="text"
                    placeholder="Purpose"
                    value={newRecord.purpose}
                    onChange={(e) =>
                      setNewRecord({ ...newRecord, purpose: e.target.value })
                    }
                    required
                  />
                  <input
                    type="date"
                    placeholder="From Date"
                    value={newRecord.fromDate}
                    onChange={(e) =>
                      setNewRecord({ ...newRecord, fromDate: e.target.value })
                    }
                    required
                  />
                  <input
                    type="date"
                    placeholder="To Date"
                    value={newRecord.toDate}
                    onChange={(e) =>
                      setNewRecord({ ...newRecord, toDate: e.target.value })
                    }
                    required
                  />
                  <input
                    type="number"
                    placeholder="Fuel Required"
                    value={newRecord.fuelRequired}
                    onChange={(e) =>
                      setNewRecord({ ...newRecord, fuelRequired: e.target.value })
                    }
                    required
                  />
                  <div className="dialog-buttons">
                    <button type="submit">Add</button>
                    <button type="button" onClick={() => setShowDialog(false)}>
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewLab;

