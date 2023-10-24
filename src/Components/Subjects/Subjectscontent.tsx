import React, { useState } from "react";
import './subjects.css'
import '../Classes/classes.css'
import { FaEdit, FaTrash } from "react-icons/fa"; 

const Subjectscontent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

   return (
     <div className='sub-content'>
      <div className='header-items'>
      <h3 className='header-sub'>Courseunit Management</h3>
      <hr/>
      <input type="text" placeholder="Search" className="search-input" />
      </div>
      <div className="actions">
        <button className="add-button" onClick={openModal} >
          + Add Courseunit
        </button>
      </div>
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <form>
              <label>Courseunit Name:</label>
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
            <th>Courseunit Name</th>
            <th>Status</th>
            <th>Date/Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Java</td>
            <td>Active</td>
            <td>May</td>
            <td>
              <FaEdit className="edit-icon" title="edit" />
              <span className="icon-gap" />
              <FaTrash className="delete-icon"  title="delete" />
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Web 1</td>
            <td>Active</td>
            <td>June</td>
            <td>
              <FaEdit className="edit-icon" title="edit" />
              <span className="icon-gap" />
              <FaTrash className="delete-icon"  title="delete" />
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Software testing</td>
            <td>Active</td>
            <td>July</td>
            <td>
              <FaEdit className="edit-icon" title="edit" />
              <span className="icon-gap" />
              <FaTrash className="delete-icon"  title="delete" />
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>IT Law </td>
            <td>Active</td>
            <td>August</td>
            <td>
              <FaEdit className="edit-icon" title="edit" />
              <span className="icon-gap" />
              <FaTrash className="delete-icon"  title="delete" />
            </td>
          </tr>
        </tbody>
      </table>
      </div>
  )
 }

export default Subjectscontent;