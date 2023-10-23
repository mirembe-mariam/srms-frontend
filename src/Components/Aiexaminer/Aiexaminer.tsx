import React from "react";
import NavBar from "../Dashboard/Navbar/Navbar";
import Sidebar from "../Dashboard/Sidebar/Sidebar";
import Examinercontent from "./Examinercontent";
import '../Classes/classes.css'
import './aiexaminer.css'
const Aiexaminer = () => {
  return (
    <div className="ai">
      <NavBar />
      <div className="side">
      <Sidebar />
      <Examinercontent/>
      </div>
     
    </div>
  );
};

export default Aiexaminer;
