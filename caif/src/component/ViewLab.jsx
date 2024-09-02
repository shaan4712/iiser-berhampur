import React, { useState } from "react";
import "../css files/ViewLab.css"; // Separate CSS file for ViewLab
import instruments from "../data/instrumentData"; // Import the instruments data

const ViewLab = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredInstruments = instruments.filter((instrument) =>
    instrument.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="view-lab container">
      <div className="search-bar m-5 p-5">
        <input
          type="text"
          className="form-control"
          placeholder="Search Instruments..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="instrument-list row mt-4">
        {filteredInstruments.map((instrument) => (
          <div key={instrument.id} className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100">
              <img
                src={instrument.image}
                className="card-img-top"
                alt={instrument.name}
              />
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="card-title mb-0">{instrument.name}</h5>
                  <button className="btn btn-primary">
                    <i className="fas fa-plus"></i>
                    <span className="ml-2">
                      <strong>+</strong>
                    </span>
                  </button>
                </div>
                <p className="card-text mt-2">{instrument.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewLab;
