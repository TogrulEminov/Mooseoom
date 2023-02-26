import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../Components/Admin/Footer/Footer'
import Navbar from '../../Components/Admin/Navbar/Navbar'

const AdminRoot = () => {
    return (
        <div >
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default AdminRoot
