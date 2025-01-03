import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../css files/SignUp.css";
import LandingNavbar from "../component/LandingNavbar";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    category: "",
  });
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();

  // Update form values dynamically
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/users/signup`, formData);

      // Reset form data after successful submission
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        password: "",
        category: "",
      });

      navigate("/login");
    } catch (error) {
      console.error("Signup failed", error);
      setError(
        error.response?.data?.error || "Signup failed. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <LandingNavbar />
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="sign-up-container">
          <h1 className="text-white mb-4">Sign Up</h1>
          {error && <p className="text-danger">{error}</p>}
          <form onSubmit={handleSubmit}>
            {/* First and Last Name */}
            <div className="name-row mb-3">
              <input
                type="text"
                className="form-control"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                className="form-control"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>

            {/* Phone Number */}
            <div className="form-group mb-3">
              <input
                type="tel"
                className="form-control"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                pattern="[0-9]{10}"
                required
              />
            </div>

            {/* Email */}
            <div className="form-group mb-3">
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Email ID"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Password */}
            <div className="form-group mb-3">
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                // pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
                minLength="6"
                required
              />
            </div>

            {/* Category */}
            <div className="form-group mb-4">
              <select
                className="form-control"
                name="category"
                value={formData.category}
                onChange={handleChange}
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

            {/* Submit Button */}
            <button
              type="submit"
              className="btn btn-success btn-block mb-3"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Signing Up..." : "Sign Up"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;