import React from 'react'
import Sidebar from '../Dashboard/Sidebar/Sidebar'
import NavBar from '../Dashboard/Navbar/Navbar'
import Resultscontent from './Resultscontent'
import '../Lectures/classes.css'
const Results = () => {
  return (
    <div className='classes'>
      <NavBar/>
      <div className='side'>
      <Sidebar/>
      <Resultscontent/>
      </div>
     
   
    </div>
  )
}

export default Results