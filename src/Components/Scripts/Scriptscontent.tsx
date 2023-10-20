import React from 'react'
import './scripts.css'

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
            <th>Subject Name</th>
            <th>Student</th>
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
            <td>Pass</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Web 1</td>
            <td>Mirembe</td>
            <td>2</td>
            <td>June</td>
            <td>Pass</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Software testing</td>
            <td>Jamirah</td>
            <td>3</td>
            <td>July</td>
            <td>Pass</td>
          </tr>
          <tr>
            <td>4</td>
            <td>IT Law </td>
            <td>Amirah</td>
            <td>2</td>
            <td>August</td>
            <td>Pass</td>
          </tr>
        </tbody>
      </table>
        
        
        
        
        
        </div>
  )
}

export default Scriptscontent