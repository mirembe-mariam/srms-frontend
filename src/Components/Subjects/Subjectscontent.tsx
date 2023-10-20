 import React from 'react'
import './subjects.css'
import '../Classes/classes.css'

 const Subjectscontent = () => {
   return (
     <div className='sub-content'>
      <div className='header-items'>
      <h3 className='header-sub'>Subject Management</h3>
      <hr/>
      <input type="text" placeholder="Search" className="search-input" />
      </div>
      <div className="actions">
        <button className="add-button" >
          + Add Subject
        </button>
      </div>
      <table className="class-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Subject Name</th>
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
            <td>Pass</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Web 1</td>
           
            <td>Active</td>
            <td>June</td>
            <td>Pass</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Software testing</td>
            
            <td>Active</td>
            <td>July</td>
            <td>Pass</td>
          </tr>
          <tr>
            <td>4</td>
            <td>IT Law </td>
          
            <td>Active</td>
            <td>August</td>
            <td>Pass</td>
          </tr>
        </tbody>
      </table>
      </div>
  )
 }

export default Subjectscontent;