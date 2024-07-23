import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingNavbar from "./component/LandingNavbar";
import LandingPage from "./component/LandingPage";
import Footer from "./component/Footer";
import FAQ from "./pages/FAQ";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <div>
        <LandingNavbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
