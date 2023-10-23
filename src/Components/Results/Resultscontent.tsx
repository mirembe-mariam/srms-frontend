import React from "react";
import "./results.css";
import "../Classes/classes.css";
const Resultscontent = () => {
  return (
    <div className='results-content'>
    <div className='header-items'>
    <h3 className='header-sub'>Results</h3>
    <hr/>
    <input type="text" placeholder="Search" className="search-input" />
    </div>
    <div className="actions">
      <button className="add-button" >
        + Add Result
      </button>
    </div>
    <table className="class-table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Student</th>
          <th>Semester</th>
          <th>Subject</th>
          <th>Average</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mariam</td>
          <td>3</td>
          <td>Java</td>
          <td>56</td>
          <td>Pass</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Hanna</td>
          <td>1</td>
          <td>Computer Literacy</td>
          <td>80</td>
          <td>Pass</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Josh</td>
          <td>2</td>
          <td>IT Law</td>
          <td>40</td>
          <td>Fail</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Joan</td>
          <td>1</td>
          <td>Software testing</td>
          <td>30</td>
          <td>Pass</td>
        </tr>
      </tbody>
    </table>
    </div>
  );
};

export default Resultscontent;
