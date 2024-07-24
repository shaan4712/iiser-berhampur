import React from "react";
import { Link } from "react-router-dom";
import "../css files/Login.css";

const Login = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="login-container">
        <h1 className="text-white mb-4">Login</h1>
        <form>
          <div className="form-group">
            <input
              type="email"
              className="form-control mb-3"
              placeholder="Email"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control mb-3"
              placeholder="Password"
              required
            />
          </div>
        </form>
        <button type="submit" className="btn btn-success btn-block mb-3">
        <Link to="/PostLogin" className="text-decoration-none text-black-50">
            Log in
          </Link>
        </button>
        <br />
        <button
          type="button"
          className="btn btn-forgot btn-outline-light btn-block mb-3"
        >
          <Link to="/forgotpwd" className="text-decoration-none text-black-50">
            Forgot Password
          </Link>
        </button>
        <br />
        <Link to="/signup" className="text-decoration-none">
          <button
            type="button"
            className="btn btn-signup btn-outline-light btn-block"
          >
            Sign up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
