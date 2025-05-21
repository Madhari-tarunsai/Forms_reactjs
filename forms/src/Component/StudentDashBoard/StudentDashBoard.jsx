import React from 'react';
import { useNavigate } from 'react-router-dom';

const StudentDashBoard = () => {
  const navigate = useNavigate();

  
  const loggedinAdmin = JSON.parse(localStorage.getItem("signupDetails"));

  const handlerClick = () => {
    localStorage.removeItem("signupDetails");

    if (localStorage.getItem("signupDetails")) {
   
      navigate(`/${loggedinAdmin.role}DashBoard`);
    } else {
     
      navigate("/login");
    }
  };

  return (
    <div>
      <h2>Student Dashboard</h2>
      <div>
        <h3>Name: {loggedinAdmin[0].name}</h3>
        <p>Email: {loggedinAdmin[0].email}</p>
        <p>Role: {loggedinAdmin[0].role}</p>
      </div>
      <button onClick={handlerClick}>Logout</button>
    </div>
  );
};

export default StudentDashBoard;
