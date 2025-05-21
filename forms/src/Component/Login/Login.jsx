import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import './Login.css';

const Login = () => {
  const navigator=useNavigate()
  const [loginDetails, setLoginDetails] = useState({ email: '', password: '' });

  const handleClick = (e) => {
    e.preventDefault();
    console.log(loginDetails);
    let storeDate=JSON.parse(localStorage.getItem("signupDetails")) || []
    const matcheLoginedUse=storeDate.find(Admin=>Admin.email === loginDetails.email && Admin.password=== loginDetails.password)
    console.log(matcheLoginedUse)
    if(matcheLoginedUse){
      alert('login sucessfully.....!')
      navigator(`/${matcheLoginedUse.role}DashBoard`)
      alert(`Successfully loggedin and re-direct to ${matcheLoginedUse.role}DashBoard`)
    }
  };

  return (
    <div className="outer-container">
      <div className="form-container">
        <h1>Login Form</h1>
        <form onSubmit={handleClick}>
          <input
            type="email"
            id="email"
            placeholder="Email"
            required
            onChange={(e) =>
              setLoginDetails({ ...loginDetails, email: e.target.value })
            }
          />
          <input
            type="password"
            id="password"
            placeholder="Password"
            required
            onChange={(e) =>
              setLoginDetails({ ...loginDetails, password: e.target.value })
            }
          />
          <button type="submit">Login</button>
          <p className="login-link">
            <a href="#">I don't have an account</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
