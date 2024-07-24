import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingNavbar from "./component/LandingNavbar";
import LandingPage from "./component/LandingPage";
import Footer from "./component/Footer";
import FAQ from "./pages/FAQ";
import Login from "./pages/Login";
import ForgotPassword from "./pages/Forgotpwd";
import SignUp from "./pages/Signup";
import ResetPassword from "./pages/Resetpwd";

import Navbar from './component/Navbar'; // Import Navbar
import FAQ1 from './component/FAQ1';
import ViewLab from './component/ViewLab';
import PastTestRecordings from './component/PastTestRecordings';
import NewReservations from './component/NewReservations';
import PostLogin from './pages/PostLogin';

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
            <Route path="/forgotpwd" element={<ForgotPassword />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/resetpwd" element={<ResetPassword />} />

            <Route path="/view-lab" element={<ViewLab />} />
            <Route path="/past-test-recordings" element={<PastTestRecordings />} />
            <Route path="/new-reservations" element={<NewReservations />} />
            <Route path="/faq1" element={<FAQ1 />} />
            <Route path="/PostLogin" element={<PostLogin />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
