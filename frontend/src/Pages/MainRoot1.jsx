import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Home1/Footer/Footer'
import Navbar from '../Components/Home1/Navbar/Navbar'

const MainRoot1 = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default MainRoot1
