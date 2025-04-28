import React, { useEffect } from "react";
import "./Dashboard.css";
import Sidebar from "./Sidebar/Sidebar";
import Feed from "./Feed/Feed";
import Navbar from "./Navbar/Navbar";
import { useLocation, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get('token');

    if (token) {
      localStorage.setItem('token', token);

      navigate('/dashboard', { replace: true });
    }
  }, [location, navigate]);

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
