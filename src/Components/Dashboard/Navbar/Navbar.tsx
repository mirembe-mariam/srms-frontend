import React from "react";
import "./navbar.css";
import { FaUser } from "react-icons/fa";

const NavBar = () => {
  const loggedInUser = {
    name: "mariam",
  };

  return (
    <div className="navbar">
      <div className="navbar-left">
        <h1>SRMS</h1>
      </div>
      <div className="navbar-right">
        <FaUser className="user-avatar" size={24} />
          <span className="user-name">{loggedInUser.name}</span>
         </div>
      </div>
   
  );
};

export default NavBar;
