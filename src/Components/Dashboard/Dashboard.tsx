import React from "react";
import "./Dashboard.css";
import Sidebar from "./Sidebar/Sidebar";
import Feed from "./Feed/Feed";
import Navbar from "./Navbar/Navbar";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Navbar />
      <div className="dash-content">
        <Sidebar />
        <Feed />
      </div>
    </div>
  );
};

export default Dashboard;
