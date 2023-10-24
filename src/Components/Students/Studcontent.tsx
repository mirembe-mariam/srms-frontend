import React from 'react'
import './students.css'
import '../Courseunits/subjects.css'
import { FaEdit, FaTrash } from "react-icons/fa"; 

const Studcontent = () => {
  return (
    <div className='stud-content'>
     <div className='header-items'>
      <h3 className='header-sub'>Students List</h3>
      <hr/>
      <input type="text" placeholder="Search" className="search-input" />
      </div>
      <div className="actions">
        <button className="add-button" >
          + Add Student
        </button>
      </div>
      <table className="class-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Student Id</th>
            <th>Student Name</th>
            <th>Status</th>
            <th>Date/Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>2000703436</td>
            <td>Hanna</td>
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
            <td>2000705687</td>
            <td>Amira</td>
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
            <td>190003433</td>
            <td>Mirembe</td>
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
            <td>2000703432</td>
            <td>Mariam</td>
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

export default Studcontent;