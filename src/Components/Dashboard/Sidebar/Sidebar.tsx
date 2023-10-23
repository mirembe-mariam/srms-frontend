import React from "react";
import "./sidebar.css";
import {
  FaTachometerAlt,
  FaGraduationCap,
  FaBook,
  FaUsers,
  FaFileAlt,
  FaRobot,
  FaPoll,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="side-bar">
      <Link to="/dashboard" className="sidebar-link">
        <div className="sidebar-item">
          <FaTachometerAlt className="sidebar-icon" />
          <span className="sidebar-label">Dashboard</span>
        </div>
      </Link>

      <Link to="/classes" className="sidebar-link">
        <div className="sidebar-item">
          <FaGraduationCap className="sidebar-icon" />
          <span className="sidebar-label">Classes</span>
        </div>
      </Link>

      <Link to="/subjects" className="sidebar-link">
        <div className="sidebar-item">
          <FaBook className="sidebar-icon" />
          <span className="sidebar-label">Courseunits</span>
        </div>
      </Link>

      <Link to="/students" className="sidebar-link">
        <div className="sidebar-item">
          <FaUsers className="sidebar-icon" />
          <span className="sidebar-label">Students</span>
        </div>
      </Link>

      <Link to="/scripts" className="sidebar-link">
        <div className="sidebar-item">
          <FaFileAlt className="sidebar-icon" />
          <span className="sidebar-label">Scripts</span>
        </div>
      </Link>

      <Link to="/ai-examiner" className="sidebar-link">
        <div className="sidebar-item">
          <FaRobot className="sidebar-icon" />
          <span className="sidebar-label">AI examiners</span>
        </div>
      </Link>

      <Link to="/results" className="sidebar-link">
        <div className="sidebar-item">
          <FaPoll className="sidebar-icon" />
          <span className="sidebar-label">Results</span>
        </div>
      </Link>

       <div className="copyright-notice">
        Copyright 2023 SRMS. All Rights Reserved.
      </div> 
    </div>
  );
};

export default Sidebar;
