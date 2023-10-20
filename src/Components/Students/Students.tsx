import React from 'react'
import NavBar from '../Dashboard/Navbar/Navbar'
import Sidebar from '../Dashboard/Sidebar/Sidebar'
import Studcontent from './Studcontent'
import './students.css'
const Students = () => {
  return (
    <div className='students'>
      <NavBar/>
      <div className='studs'>
      <Sidebar/>
      <Studcontent/>
      </div>
     
    </div>
  )
}

export default Students