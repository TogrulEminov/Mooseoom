import React from 'react'
import Navbar from '../Components/Home2/Navbar/Navbar'
import { Outlet } from "react-router-dom"
const MainRoot2 = () => {
    return (
        <div className='mainRoot2'>
            <Navbar />
            <Outlet />
        </div>
    )
}

export default MainRoot2
