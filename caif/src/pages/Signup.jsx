import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../css files/SignUp.css";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [category, setCategory] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:5000/api/signup`, {
        firstName,
        lastName,
        phone,
        email,
        password,
        category,
      });
      navigate("/login");
    } catch (error) {
      console.error("Signup failed", error);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="sign-up-container">
        <h1 className="text-white mb-4">Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="name-row mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <input
              type="text"
              className="form-control"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email ID"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group mb-4">
            <select
              className="form-control"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="" disabled>
                Category
              </option>
              <option value="corporate">Corporate</option>
              <option value="personal">Personal</option>
              <option value="institute">Institute</option>
            </select>
          </div>
          <button type="submit" className="btn btn-success btn-block mb-3">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;