import React, { useState } from "react";
import "./signup.css";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    if (
      !formData?.email ||
      !formData?.password ||
      !formData?.firstName ||
      !formData?.lastName
    ) {
      alert("Please Enter Details");
      return;
    }

    e.preventDefault();
    localStorage.setItem(
      "userData",
      JSON.stringify({ ...formData, lastLogin: new Date().toLocaleString() })
    );
    navigate("/dashboard");
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="form-field">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="form-field">
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="form-field">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-field">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <div className="login-link">
        Already have an account? <Link to="/">Login</Link>
      </div>
    </div>
  );
};

export default SignUp;
