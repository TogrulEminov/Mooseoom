import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import Logo from '../../Client/Logo/Logo'
import { RxHamburgerMenu } from "react-icons/rx"
import { AiOutlineClose } from "react-icons/ai"
import "./_Navbar.scss"
import { mainContext } from '../../../Context/Context'
const Navbar = () => {
    const {clickHamburger,open} =useContext(mainContext)
    return (
        <div className='navbarAdmin'>
            <div className="container">
                <div className="row">
                    <div className="hamburger">
                        <button onClick={() => clickHamburger()} >
                            <RxHamburgerMenu />
                        </button>
                    </div>
                    <div className="logo">
                        <Link to="/"> <Logo /></Link>
                    </div>
                    <div className="navbarLinks">
                        <ul>
                            <li>
                                <Link to="/admin/shop">Shop</Link>
                            </li>
                            <li>
                                <Link to='/admin/art'>Art</Link>
                            </li>
                            <li>
                                <Link to="/admin/blog">Blog</Link>
                            </li>
                            <li>
                                <Link to="/">Go to Home</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="logoMobile">
                        <Logo />
                    </div>
                    <div className="sidebar-nav" style={{ transform: open ? "translate(0%)" : "translate(-100%)" }} >
                        <div className='sidebarHead'>
                            <h1>Admin Menu</h1>
                            <button onClick={() => clickHamburger()} ><AiOutlineClose /></button>
                        </div>
                        <div className="sidebarLinks">
                            <ul>
                                <li>
                                    <Link to="/admin/shop">Shop</Link>
                                </li>
                                <li>
                                    <Link to='/admin/art'>Art</Link>
                                </li>
                                <li>
                                    <Link to="/admin/blog">Blog</Link>
                                </li>
                                <li>
                                    <Link to="/">Go to Home</Link>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
