import React, { useState } from 'react';
import '../css files/ViewLab.css'; // Separate CSS file for ViewLab

const ViewLab = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [blurBackground, setBlurBackground] = useState(false);

  const instruments = [
    { id: 1, name: 'Instrument 1', description: 'Brief description of Instrument 1', image: 'image1.jpg', longDescription: 'Long description of Instrument 1' },
    { id: 2, name: 'Instrument 2', description: 'Brief description of Instrument 2', image: 'image2.jpg', longDescription: 'Long description of Instrument 2' },
    { id: 3, name: 'Instrument 3', description: 'Brief description of Instrument 3', image: 'image3.jpg', longDescription: 'Long description of Instrument 3' },
    // Add more instruments as needed
  ];

  const handleCardClick = (instrument) => {
    setActiveCard(instrument);
    setBlurBackground(true);
  };

  const closePopup = () => {
    setActiveCard(null);
    setBlurBackground(false);
  };

  return (
    <div className={`view-lab ${blurBackground ? 'blur-background' : ''}`}>
      <div className="search-category">
        <button className="search-btn">Search</button>
        <div className="dropdown">
          <button className="category-btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            Category
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Category 1</a></li>
            <li><a className="dropdown-item" href="#">Category 2</a></li>
            <li><a className="dropdown-item" href="#">Category 3</a></li>
          </ul>
        </div>
      </div>
      <div className="instrument-list">
        {instruments.map((instrument) => (
          <div key={instrument.id} className="instrument-card" onClick={() => handleCardClick(instrument)}>
            <img src={instrument.image} alt={instrument.name} />
            <h3>{instrument.name}</h3>
            <p>{instrument.description}</p>
          </div>
        ))}
      </div>
      {activeCard && (
        <div className="popup" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <img src={activeCard.image} alt={activeCard.name} />
            <h2>{activeCard.name}</h2>
            <p>{activeCard.longDescription}</p>
            <button className="close-btn" onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewLab;
