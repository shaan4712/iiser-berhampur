import React from "react";
import { Link } from "react-router-dom";
import "../css files/ForgotPwd.css";

const ForgotPassword = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="forgot-password-container">
        <h1 className="text-white mb-4">Forgot Password</h1>
        <form>
          <div className="form-group">
            <input
              type="email"
              className="form-control mb-3"
              placeholder="Recovery Email Address"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="tel"
              className="form-control mb-3"
              placeholder="Phone Number"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control mb-3"
              placeholder="Enter OTP"
              required
            />
          </div>
        </form>
        <Link to="/resetpwd" className="text-decoration-none">
          <button
            type="button"
            className="btn btn-signup btn-outline-light btn-block"
          >
            Submit
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ForgotPassword;
