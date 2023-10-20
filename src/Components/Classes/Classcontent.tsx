import "./classes.css";
import React, { useState } from "react";
const Classcontent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    console.log("Modal opened");
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="content">
      <div className="header-items">
        <h3 className="header">Class Listing</h3>
        <input type="text" placeholder="Search" className="search-input" />
      </div>
      <div className="actions">
        <button className="add-button" onClick={openModal}>
          + Add Class
        </button>
      </div>
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <span className="close" onClick={closeModal}>
              &times; 
            </span>
            <form>
              <label>Id:</label>
              <input type="text" />
              <label>Level:</label>
              <input type="text" />
              <label>Section:</label>
              <input type="text" />
              <label>Status:</label>
              <select>
                <option>Active</option>
                <option>Inactive</option>
              </select>
              <label>Date/Time:</label>
              <input type="date" />
              <label>Action:</label>
              <select>
                <option>Pass</option>
                <option>Fail</option>
              </select>
            </form>
            <div className="button-container">
            <button>Save</button>
            <button>Cancel</button>
            </div>
          </div>
        </div>
      )}
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
            <td>1</td>
            <td>Level one</td>
            <td>COCIS</td>
            <td>Active</td>
            <td>March</td>
            <td>Pass</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Level two</td>
            <td>COBAMS</td>
            <td>Active</td>
            <td>May</td>
            <td>Pass</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Level three</td>
            <td>LAW</td>
            <td>Active</td>
            <td>June</td>
            <td>Pass</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Level four</td>
            <td>CEDAT</td>
            <td>Active</td>
            <td>July</td>
            <td>Pass</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Classcontent;
