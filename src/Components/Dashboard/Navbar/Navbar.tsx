import React, { useState } from "react";
import {Link, useNavigate} from 'react-router-dom'
import "./navbar.css";
import { FaUser, FaSignOutAlt, FaFileAlt } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";
import { useAuth } from "../../AuthContext/context";

const NavBar = () => {
  const {user, logout}=  useAuth();
  const navigate = useNavigate();
  console.log("user", user)
  const username = user?.name || "Guest";

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

 const handleLogout = () => {
    logout(); 
    navigate('/login');
  };


  return (
    <div className="navbar">
      <div className="navbar-left">
        <h1>SRMS</h1>
      </div>
      <div className="navbar-right">
        <div className="user-dropdown">
          <div className="user-info" onClick={handleDropdownToggle}>
            <FaUser className="user-avatar" size={24} />
            <span className="user-name">{username}</span>
            <MdArrowDropDown className="dropdown-icon" size={24} />
          </div>
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <ul>
                <li onClick={handleLogout}>
                  <FaSignOutAlt className="menu-icon" />
                  <span className="menu-text">Logout</span>
                </li>
                <li>
                  <FaFileAlt className="menu-icon" />
                  <Link to = "/docs" className="nav-link">
                  <span className="menu-text">Docs</span>
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
