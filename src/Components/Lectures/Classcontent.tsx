import "./classes.css";
import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa"; 

const Classcontent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="content">
      <div className="header-items">
        <h3 className="header">Lecture Listing</h3>
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
            <form>
              <label>Id:</label>
              <input type="text" />
              <label>Year:</label>
              <input type="text" />
              <label>College:</label>
              <input type="text" />
              <label>Status:</label>
              <select>
                <option>Active</option>
                <option>Inactive</option>
              </select>
              <label>Date/Time:</label>
              <input type="date" />
             
              <div className="button-container">
                <button>Save</button>
                <button onClick={closeModal}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
      <table className="class-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Year</th>
            <th>College</th>
            <th>Status</th>
            <th>Date/Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Year one</td>
            <td>COCIS</td>
            <td>Active</td>
            <td>March</td>
            <td>
              <FaEdit className="edit-icon"  title="edit"/>
              <span className="icon-gap" />
              <FaTrash className="delete-icon"  title="delete"/>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Year two</td>
            <td>COBAMS</td>
            <td>Active</td>
            <td>May</td>
            <td>
              <FaEdit className="edit-icon"  title="edit"/>
              <span className="icon-gap" />
              <FaTrash className="delete-icon"   title="delete"/>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Year three</td>
            <td>LAW</td>
            <td>Active</td>
            <td>June</td>
            <td>
              <FaEdit className="edit-icon" title="edit" />
              <span className="icon-gap" />
              <FaTrash className="delete-icon"  title="delete" />
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>Year four</td>
            <td>CEDAT</td>
            <td>Active</td>
            <td>July</td>
            <td>
              <FaEdit className="edit-icon"  title="edit" />
              <span className="icon-gap" />
              <FaTrash className="delete-icon"  title="delete" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Classcontent;
