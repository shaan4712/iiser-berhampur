import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../css files/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:5000/api/login`, {
        email,
        password,
      });
      navigate("/PostLogin");
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="login-container">
        <h1 className="text-white mb-4">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="email"
              className="form-control mb-3"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control mb-3"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-success btn-block mb-3">
            Log in
          </button>
        </form>
        <button className="btn btn-forgot btn-outline-light btn-block mb-3">
          <a href="/forgotpwd" className="text-decoration-none text-black-50">
            Forgot Password
          </a>
        </button>
        <a href="/signup" className="text-decoration-none">
          <button className="btn btn-signup btn-outline-light btn-block">
            Sign up
          </button>
        </a>
      </div>
    </div>
  );
};

export default Login;
