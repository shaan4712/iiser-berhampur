import React from "react";
import { Link } from "react-router-dom";
import "../css files/SignUp.css";

const SignUp = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="sign-up-container">
        <h1 className="text-white mb-4">Sign Up</h1>
        <form>
          <div className="name-row mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="First Name"
              required
            />
            <input
              type="text"
              className="form-control"
              placeholder="Last Name"
              required
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Phone Number"
              required
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email ID"
              required
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              required
            />
          </div>
          <div className="form-group mb-4">
            <select className="form-control" required>
              <option value="" disabled selected>
                Category
              </option>
              <option value="corporate">Corporate</option>
              <option value="personal">Personal</option>
              <option value="institute">Institute</option>
            </select>
          </div>
          <Link to="/login" className="text-decoration-none">
            <button type="submit" className="btn btn-success btn-block mb-3">
              Sign Up
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
