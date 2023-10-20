import React from 'react'
import NavBar from '../Dashboard/Navbar/Navbar'
import Sidebar from '../Dashboard/Sidebar/Sidebar'
import Scriptscontent from './Scriptscontent'

const Scripts = () => {
  return (
    <div className='scripts'>
      <NavBar/>
      <div className='script'>
      <Sidebar/>
      <Scriptscontent/>
      </div>
      
    </div>
  )
}

export default Scripts