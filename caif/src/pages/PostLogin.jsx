import React, { useState } from "react";
import { Search } from "lucide-react";
import Sidebar from "../component/Sidebar";
import Navbar from "../component/Navbar";
import instruments from "../data/instrumentData"; // Make sure this path is correct
import "../css files/PostLogin.css"; // Make sure this path is correct
import { useAuth } from "../context/AuthContext";
import axios from "axios";

const ViewLab = () => {
  const { user } = useAuth();

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

  const handleDialogSubmit = async (e) => {
    e.preventDefault();
    
    const storedUser = JSON.parse(localStorage.getItem('user'));
    
    if (!storedUser || !storedUser._id) {
        console.log('No user found in localStorage');
        return;
    }

    try {
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/records`, {
            userId: storedUser._id,
            instrumentName: selectedInstrument.name,
            purpose: newRecord.purpose,
            fromDate: newRecord.fromDate,
            toDate: newRecord.toDate,
            fuelRequired: newRecord.fuelRequired
        });

        setShowDialog(false);
        setNewRecord({
            purpose: "",
            fromDate: "",
            toDate: "",
            fuelRequired: "",
        });
        alert('Record added successfully!');
    } catch (error) {
        console.error('Error:', error);
        alert(error.response?.data?.error || 'Failed to create record');
    }
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
                    min={new Date().toISOString().split('T')[0]}
                    onChange={(e) =>
                      setNewRecord({ ...newRecord, fromDate: e.target.value })
                    }
                    required
                  />
                  <input
                    type="date"
                    placeholder="To Date"
                    value={newRecord.toDate}
                    min={newRecord.fromDate || new Date().toISOString().split('T')[0]}
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
                    <button type="button" onClick={() => setShowDialog(false)}>
                      Cancel
                    </button>
                    <button type="submit">Add</button>
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

