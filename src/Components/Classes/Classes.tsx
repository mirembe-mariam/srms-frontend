import React from "react";
import NavBar from "../Dashboard/Navbar/Navbar";
import "./classes.css";
import Sidebar from "../Dashboard/Sidebar/Sidebar";
import Classcontent from "./Classcontent";
const Classes = () => {
  return (
    <div className="classes">
      <NavBar />
      <div className="side">
        <Sidebar />
     
        <Classcontent />
      </div>
    </div>
  );
};

export default Classes;
