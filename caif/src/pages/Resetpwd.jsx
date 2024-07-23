import React from "react";
import { Link } from "react-router-dom";
import "../css files/ResetPwd.css";

const ResetPassword = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="reset-password-container">
        <h1 className="text-white mb-4">Reset Password</h1>
        <form>
          <div className="form-group">
            <input
              type="password"
              className="form-control mb-3"
              placeholder="New Password"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control mb-3"
              placeholder="Re-enter New Password"
              required
            />
          </div>
          <Link to="/login" className="text-decoration-none">
            <button
              type="button"
              className="btn btn-signup btn-outline-light btn-block"
            >
              Reset Password
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
