import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingNavbar from "./component/LandingNavbar";
import LandingPage from "./component/LandingPage";
import Footer from "./component/Footer";
import FAQ from "./pages/FAQ";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import ResetPassword from "./pages/Resetpwd";
import Navbar from "./component/Navbar"; // Import Navbar
import FAQ1 from "./component/FAQ1";
import PostLogin from "./pages/PostLogin";
import ViewLab from "./pages/PostLogin";
import Records from "./component/Records";
import { AuthProvider } from "./context/AuthContext"; // Import your AuthProvider

function App() {
  return (
    <AuthProvider>
      {" "}
      {/* Wrap your Router with AuthProvider */}
      <Router>
        <div>
          <div className="container">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              {/* <Route path="/faq" element={<FAQ />} /> */}
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/resetpwd" element={<ResetPassword />} />
              <Route path="/records" element={<Records />} />
              <Route path="/faq1" element={<FAQ1 />} />
              <Route path="/viewlab" element={<ViewLab />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
