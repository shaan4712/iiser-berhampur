import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingNavbar from "./component/LandingNavbar";
import LandingPage from "./component/LandingPage";
import Footer from "./component/Footer";

function App() {
  return (
    <Router>
      <div>
        <LandingNavbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
