import React from 'react';
import '../css files/PastTestRecordings.css'; // Separate CSS file for PastTestRecordings

const PastTestRecordings = () => {
  return (
    <div className="past-test-recordings">
      <h1>Past Test Recordings</h1>
      <table className="recordings-table">
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Instrument Name</th>
            <th>Test 1</th>
            <th>Test 2</th>
            <th>From Date</th>
            <th>To Date</th>
            <th>Fuel</th>
          </tr>
        </thead>
        <tbody>
          {/* Example Row */}
          <tr>
            <td>1</td>
            <td>Instrument A</td>
            <td>Result 1</td>
            <td>Result 2</td>
            <td>2024-07-01</td>
            <td>2024-07-02</td>
            <td>Type A</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
};

export default PastTestRecordings;
