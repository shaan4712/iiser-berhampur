import React, { useState } from "react";
import Navbar from "../component/Navbar";
import Sidebar from "../component/Sidebar";
// import "../css files/FAQ1.css";

function FAQ1() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="faq-page">
      <style>
         {
          `
        .faq-accordion .accordion-button:focus {
          box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5); /* Focus shadow with slight transparency */
        }

        .faq-accordion .accordion-body {
          background-color: rgba(
            240,
            248,
            240,
            0.8
          ); /* Semi-transparent light green background for the body */
          border: 1px solid rgba(200, 230, 201, 0.8); /* Semi-transparent light green border for the body */
        }

        .faq-page {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          width: 100vw
        }

        .content-wrapper {
          display: flex;
          flex-grow: 1;
        }

        .faq-container {
          flex-grow: 1;
          padding: 100px;
          background-color: #DFF6E8;
          margin-top: 50px;
        }

        h1 {
          color: #2e7d32;
          margin-bottom: 20px;
          text-align: center;
        }

        .faq-accordion {
          max-width: 800px;
          margin: 0 auto;
        }

        .accordion-item {
          margin-bottom: 10px;
          border: none;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .accordion-button {
          background-color: #ffffff;
          color: #2e7d32;
          font-weight: 600;
          padding: 15px 20px;
        }

        .accordion-button:not(.collapsed) {
          background-color: #4caf50;
          color: #ffffff;
        }

        .accordion-button:focus {
          box-shadow: none;
          border-color: rgba(0, 0, 0, 0.125);
        }

        .accordion-button::after {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%232e7d32'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
        }

        .accordion-button:not(.collapsed)::after {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23ffffff'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
        }

        .accordion-body {
          background-color: #ffffff;
          color: #616161;
          padding: 15px 20px;
        }

        @media (max-width: 768px) {
          .faq-accordion {
            width: 100%;
          }
        }
          `
         }

      </style>

      <Navbar toggleSidebar={toggleSidebar} />
      <div className="content-wrapper">
        <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        <div className="faq-container">
          <h1>FAQs</h1>
          <div className="accordion faq-accordion" id="faqAccordion">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button faq-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  What is your first question?
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  This is the answer to the first question. It will be shown when
                  the question is clicked.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button faq-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  What is your second question?
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  This is the answer to the second question. It will be shown when
                  the question is clicked.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button faq-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  What is your third question?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  This is the answer to the third question. It will be shown when
                  the question is clicked.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ1;