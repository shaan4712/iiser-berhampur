import React from "react";
import telescope from "../../public/telescope.png";
import spectrometer from "../../public/spectrometer.png";
import microscope from "../../public/microscope.png";
import "../css files/instrument.css";

const instruments = [
  {
    id: 1,
    name: "Telescope",
    image: telescope,
    description: "A powerful telescopehjeeqwkje for astronomical observations.",
  },
  {
    id: 2,
    name: "Spectrometer",
    image: spectrometer,
    description: "An advanced spectrometer for analyzing light spectra.",
  },
  {
    id: 3,
    name: "Microscope",
    image: microscope,
    description: "A high-resolution microscope for biological studies.",
  },
  // Add more instruments as needed
];

function InstrumentsSection() {
  return (
    <section className="my-5">
      <h2>Instruments</h2>
      <div className="accordion" id="instrumentsAccordion">
        {instruments.map((instrument) => (
          <div key={instrument.id} className="accordion-item">
            <h2 className="accordion-header" id={`heading${instrument.id}`}>
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${instrument.id}`}
                aria-expanded="false"
                aria-controls={`collapse${instrument.id}`}
              >
                <div className="d-flex align-items-center">
                  <img
                    src={instrument.image}
                    className="img-thumbnail rounded-circle me-3"
                    alt={instrument.name}
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                    }}
                  />
                  <span>{instrument.name}</span>
                </div>
              </button>
            </h2>
            <div
              id={`collapse${instrument.id}`}
              className="accordion-collapse collapse"
              aria-labelledby={`heading${instrument.id}`}
              data-bs-parent="#instrumentsAccordion"
            >
              <div className="accordion-body">{instrument.description}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default InstrumentsSection;
