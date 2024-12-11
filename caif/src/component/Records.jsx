import React, { useState, useEffect } from 'react';
import { Search, Trash2 } from 'lucide-react'; // Import Trash2 icon
import axios from 'axios';
import Navbar from "../component/Navbar";
import Sidebar from "../component/Sidebar";
import '../css files/Records.css';

const Records = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [records, setRecords] = useState([]);

  const fetchRecords = async () => {
    try {
      const storedUser = JSON.parse(localStorage.getItem('user'));
      if (!storedUser || !storedUser._id) {
        console.log('No user found');
        return;
      }

      const response = await axios.get(`http://localhost:5000/api/records/${storedUser._id}`);
      setRecords(response.data);
    } catch (error) {
      console.error('Error fetching records:', error);
    }
  };

  useEffect(() => {
    fetchRecords();
  }, []);

  const handleDelete = async (recordId) => {
    if (window.confirm('Are you sure you want to delete this record?')) {
      try {
        await axios.delete(`http://localhost:5000/api/records/delete/${recordId}`);
        // Refresh records after deletion
        fetchRecords();
        alert('Record deleted successfully');
      } catch (error) {
        console.error('Error deleting record:', error);
        alert('Failed to delete record');
      }
    }
  };

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
                <th>Fuel Required</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredRecords.map((record, index) => (
                <tr key={record._id}>
                  <td>{index + 1}</td>
                  <td>{record.instrumentName}</td>
                  <td>{record.purpose}</td>
                  <td>{new Date(record.fromDate).toLocaleDateString()}</td>
                  <td>{new Date(record.toDate).toLocaleDateString()}</td>
                  <td>{record.fuelRequired}</td>
                  <td>
                    <button 
                      className="btn-delete"
                      onClick={() => handleDelete(record._id)}
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
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