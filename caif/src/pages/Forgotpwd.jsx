import React from 'react';
import '../css files/ForgotPwd.css';

const ForgotPassword = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="forgot-password-container">
        <h1 className="text-white mb-4">Forgot Password</h1>
        <form>
          <div className="form-group">
            <input type="email" className="form-control mb-3" placeholder="Recovery Email Address" required />
          </div>
          <div className="form-group">
            <input type="tel" className="form-control mb-3" placeholder="Phone Number" required />
          </div>
          <div className="form-group">
            <input type="number" className="form-control mb-3" placeholder="Enter OTP" required />
          </div>
          <button type="submit" className="btn btn-success btn-block mb-3">
            <a href="/resetpwd" className="text-decoration-none">
            Submit
            </a>
            </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
