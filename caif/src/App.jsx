import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./component/LandingPage";
import Footer from "./component/Footer";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import ResetPassword from "./pages/Resetpwd";
import FAQ1 from "./component/FAQ1";
import ViewLab from "./pages/PostLogin";
import Records from "./component/Records";
import { AuthProvider } from "./context/AuthContext"; // Import your AuthProvider

function App() {
  return (
    <AuthProvider>
      {" "}
      {/* Wrap your Router with AuthProvider */}
      <Router>
        <div className="app-container">
          <div className="content-wrapper"> 
            <Routes>
              <Route path="/" element={<LandingPage />} />
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
