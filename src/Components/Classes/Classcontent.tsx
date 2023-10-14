import React from "react";
import "./classes.css";

const Classcontent = () => {
  return (
    <div className="content">
      <div className="header-items">
        <h3 className="header">Class Listing</h3>
        <input type="text" placeholder="Search" className="search-input" />
      </div>
      <div className="actions">
        <button className="add-button"> + Add Class</button>
      </div>
      <table className="class-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Level</th>
            <th>Section</th>
            <th>Status</th>
            <th>Date/Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Row 1, Cell 1</td>
            <td>Row 1, Cell 2</td>
            <td>Row 1, Cell 3</td>
            <td>Row 1, Cell 4</td>
            <td>Row 1, Cell 5</td>
            <td>Row 1, Cell 6</td>
          </tr>
          <tr>
            <td>Row 2, Cell 1</td>
            <td>Row 2, Cell 2</td>
            <td>Row 2, Cell 3</td>
            <td>Row 2, Cell 4</td>
            <td>Row 2, Cell 5</td>
            <td>Row 2, Cell 6</td>
          </tr>
          <tr>
            <td>Row 2, Cell 1</td>
            <td>Row 2, Cell 2</td>
            <td>Row 2, Cell 3</td>
            <td>Row 2, Cell 4</td>
            <td>Row 2, Cell 5</td>
            <td>Row 2, Cell 6</td>
          </tr>
          <tr>
            <td>Row 2, Cell 1</td>
            <td>Row 2, Cell 2</td>
            <td>Row 2, Cell 3</td>
            <td>Row 2, Cell 4</td>
            <td>Row 2, Cell 5</td>
            <td>Row 2, Cell 6</td>
          </tr>
          <tr>
            <td>Row 2, Cell 1</td>
            <td>Row 2, Cell 2</td>
            <td>Row 2, Cell 3</td>
            <td>Row 2, Cell 4</td>
            <td>Row 2, Cell 5</td>
            <td>Row 2, Cell 6</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Classcontent;
