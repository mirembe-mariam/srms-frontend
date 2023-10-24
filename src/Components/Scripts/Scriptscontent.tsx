import React from 'react'
import './scripts.css'
import { FaEdit, FaTrash } from "react-icons/fa"; 

const Scriptscontent = () => {
  return (
    <div className='scripts-content'>
         <div className='header-items'>
      <h3 className='header-sub'>Script List</h3>
      <hr/>
      <input type="text" placeholder="Search" className="search-input" />
      </div>
      <div className="actions">
        <button className="add-button" >
          + Add Script
        </button>
      </div>
      <table className="class-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Courseunit Name</th>
            <th>Student Name</th>
            <th>Semester</th>
            <th>Date/Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Java</td>
            <td>Mariam</td>
            <td>1</td>
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
            <td>Mirembe</td>
            <td>2</td>
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
            <td>Jamirah</td>
            <td>3</td>
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
            <td>Amirah</td>
            <td>2</td>
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

export default Scriptscontent