
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

const Sidebar = () => {
  return (
    <div className="side-bar">
      <div className="sidebar-item">
        <FaTachometerAlt  className="sidebar-icon"/>
        <span className="sidebar-label">Dashboard</span>
      </div>
      <div className="sidebar-item">
        <FaGraduationCap  className="sidebar-icon"/>
        <span className="sidebar-label">Classes</span>
      </div>
      <div className="sidebar-item">
        <FaBook  className="sidebar-icon"/>
        <span className="sidebar-label">Subjects</span>
      </div>
      <div className="sidebar-item">
        <FaUsers  className="sidebar-icon"/>
        <span className="sidebar-label">Students</span>
      </div>
      <div className="sidebar-item">
        <FaFileAlt  className="sidebar-icon"/>
        <span className="sidebar-label">Scripts</span>
      </div>
      <div className="sidebar-item">
        <FaRobot  className="sidebar-icon"/>
        <span className="sidebar-label">AI examiners</span>
      </div>
      <div className="sidebar-item">
        <FaPoll  className="sidebar-icon"/>
        <span className="sidebar-label">Results</span>
      </div>

      <div className="copyright-notice">
        Copyright 2023 SRMS. All Rights Reserved.
      </div>
    </div>
  );
};

export default Sidebar;
