import React from 'react';

import '../css files/Login.css';

const Login = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="login-container">
        <h1 className="text-white mb-4">Login</h1>
        <form>
          <div className="form-group">
            <input type="email" className="form-control mb-3" placeholder="Email" required />
          </div>
          <div className="form-group">
            <input type="password" className="form-control mb-3" placeholder="Password" required />
          </div>
          <button type="button" className="btn btn-forgot btn-outline-light btn-block mb-3">
            <a href="/forgotpwd" className="text-decoration-none">
            Forgot Password
            </a>
            </button>
          <button type="submit" className="btn btn-success btn-block mb-3">Log in</button>
          <button type="button" className="btn btn-signup btn-outline-light btn-block">
            <a href="/signup" className="text-decoration-none">
            Sign up
            </a>
            </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
