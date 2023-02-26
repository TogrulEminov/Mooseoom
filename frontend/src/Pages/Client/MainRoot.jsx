import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../Components/Client/Home/Footer/Footer'
import Navbar from '../../Components/Client/Home/Navbar/Navbar'

const MainRoot = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default MainRoot
