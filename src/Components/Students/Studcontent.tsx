import React from 'react'
import './students.css'
import '../Subjects/subjects.css'

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
            <th> Student Name</th>
            <th>Status</th>
            <th>Date/Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mariam</td>
      
            <td>Active</td>
            <td>May</td>
            <td>Pass</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Mirembe</td>
           
            <td>Active</td>
            <td>June</td>
            <td>Pass</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Jamirah</td>
            
            <td>Active</td>
            <td>July</td>
            <td>Pass</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Amira</td>
          
            <td>Active</td>
            <td>August</td>
            <td>Pass</td>
          </tr>
        </tbody>
      </table>
      










      </div>
  )
}

export default Studcontent;