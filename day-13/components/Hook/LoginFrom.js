import React, { useState } from "react";

import './styles.css';

const LoginForm = () => {
  // State to store form values and validation messages
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = formData;

    let isValid = true;
    let newErrors = {};

    // Basic email validation
    if (!email) {
      newErrors.email = "Please enter your email.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email.";
      isValid = false;
    }

    // Basic password validation
    if (!password) {
      newErrors.password = "Please enter your password.";
      isValid = false;
    } else if (password.length <6) {
      newErrors.password = "Password must be at least 6 characters.";
      isValid = false;
    }


    if (!isValid) {
      setErrors(newErrors);
    } else {
      setErrors({});
      // Here you can handle login logic
      console.log("Login successful with data:", formData);
    }
  };

  // Function to handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="div-container ">
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit} className="from-container">
        <div>
          <label htmlFor="email">Enter Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="password">Enter Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
          {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
