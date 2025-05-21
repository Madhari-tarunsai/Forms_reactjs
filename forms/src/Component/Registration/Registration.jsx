import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const navigator = useNavigate();
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });

  const HandlerClick = (e) => {
    e.preventDefault();

    const data = JSON.parse(localStorage.getItem("signupDetails")) || [];

   
    const emailExists = data.some((user) => user.email === state.email);

    if (emailExists) {
      alert("Email already registered. Please use a different email.");
      return; 
    }

    data.push(state);
    localStorage.setItem("signupDetails", JSON.stringify(data));
    alert("Signup successfully");
    navigator("/Login");
  };

  return (
    <div className="outer-container">
      <div className="form-container">
        <h1>Registration Form</h1>
        <form onSubmit={HandlerClick}>
          <input
            type="text"
            id="name"
            placeholder="Name"
            required
            onChange={(e) => setState({ ...state, name: e.target.value })}
          />
          <input
            type="email"
            id="email"
            placeholder="Email"
            required
            onChange={(e) => setState({ ...state, email: e.target.value })}
          />
          <input
            type="password"
            id="password"
            placeholder="Password"
            required
            onChange={(e) => setState({ ...state, password: e.target.value })}
          />
          <select
            id="role"
            required
            onChange={(e) => setState({ ...state, role: e.target.value })}
          >
            <option value="">Choose Role</option>
            <option value="admin">Admin</option>
            <option value="student">Student</option>
          </select>
          <button type="submit">Sign In</button>
          <p className="login-link">
            <a href="">I already have an account</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Registration;
