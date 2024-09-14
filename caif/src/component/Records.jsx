import React, { useState } from 'react';
import { Search } from 'lucide-react';
import Navbar from "../component/Navbar";
import Sidebar from "../component/Sidebar";
import '../css files/Records.css'; // Make sure this path is correct

const Records = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [records, setRecords] = useState([
    {
      instrumentName: "Spectrometer",
      purpose: "Analyze light spectra",
      fromDate: "2024-09-15",
      toDate: "2024-09-20",
      fuelLeft: "50",
    },
    {
      instrumentName: "Microscope",
      purpose: "Cell structure study",
      fromDate: "2024-09-16",
      toDate: "2024-09-18",
      fuelLeft: "75",
    },
    {
      instrumentName: "Centrifuge",
      purpose: "Sample separation",
      fromDate: "2024-09-17",
      toDate: "2024-09-19",
      fuelLeft: "60",
    },
  ]);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const filteredRecords = records.filter((record) =>
    record.instrumentName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="records-page">
      <Navbar toggleSidebar={toggleSidebar} />
      <div className="content-wrapper">
        <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        <div className="records-container">
          <h1>Records</h1>
          <div className="search-container">
            <div className="search-bar">
              <Search className="search-icon" size={20} />
              <input
                type="text"
                className="search-input"
                placeholder="Search by instrument name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <table className="records-table">
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Instrument Name</th>
                <th>Purpose</th>
                <th>From Date</th>
                <th>To Date</th>
                <th>Fuel left</th>
              </tr>
            </thead>
            <tbody>
              {filteredRecords.map((record, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{record.instrumentName}</td>
                  <td>{record.purpose}</td>
                  <td>{record.fromDate}</td>
                  <td>{record.toDate}</td>
                  <td>{record.fuelLeft}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Records;