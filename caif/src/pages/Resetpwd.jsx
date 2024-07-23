import React from 'react';
import '../css files/ResetPwd.css';

const ResetPassword = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="reset-password-container">
        <h1 className="text-white mb-4">Reset Password</h1>
        <form>
          <div className="form-group">
            <input type="password" className="form-control mb-3" placeholder="New Password" required />
          </div>
          <div className="form-group">
            <input type="password" className="form-control mb-3" placeholder="Re-enter New Password" required />
          </div>
          <button type="submit" className="btn btn-success btn-block mb-3">
            <a href="/login" className="text-decoration-none">
            Reset Password
            </a>
            </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
