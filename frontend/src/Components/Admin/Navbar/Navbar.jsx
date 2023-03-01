import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from "react-router-dom"
import Logo from '../../Client/Logo/Logo'
import { RxHamburgerMenu } from "react-icons/rx"
import { AiOutlineClose } from "react-icons/ai"
import "./_Navbar.scss"
import { mainContext } from '../../../Context/Context'
const Navbar = () => {
    let activeStyle = {
        color: "red"
    };
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const getCookie = (name) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) {
            return parts.pop().split(';').shift();
        }
    };

    useEffect(() => {

        const token = getCookie('token');
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);
    const { clickHamburger, open } = useContext(mainContext)
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
                        <NavLink to="/"> <Logo /></NavLink>
                    </div>
                    <div className="navbarLinks">
                        <ul>
                            {isLoggedIn ? (
                                <li>
                                    <NavLink to="/admin/shop" style={({ isActive }) =>
                                        isActive ? activeStyle : undefined
                                    }>Shop</NavLink>
                                </li>
                            ) : (
                                <li></li>
                            )}
                            {isLoggedIn ? (
                                <li>
                                    <NavLink to='/admin/art' style={({ isActive }) =>
                                        isActive ? activeStyle : undefined
                                    }>Art</NavLink>
                                </li>
                            ) : (
                                <li></li>
                            )}
                            {isLoggedIn ? (
                                <li>
                                    <NavLink to="/admin/blog" style={({ isActive }) =>
                                        isActive ? activeStyle : undefined
                                    }>Blog</NavLink>
                                </li>
                            ) : (
                                <li></li>
                            )}
                            <li>
                                <NavLink to="/">Go to Home</NavLink>
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
                                {isLoggedIn ? (
                                    <li>
                                        <NavLink style={({ isActive }) =>
                                            isActive ? activeStyle : undefined
                                        } to="/admin/shop">Shop</NavLink>
                                    </li>
                                ) : (
                                    <li></li>
                                )}
                                {isLoggedIn ? (
                                    <li>
                                        <NavLink style={({ isActive }) =>
                                            isActive ? activeStyle : undefined
                                        } to='/admin/art'>Art</NavLink>
                                    </li>
                                ) : (
                                    <li></li>
                                )}
                                {isLoggedIn ? (
                                    <li>
                                        <NavLink style={({ isActive }) =>
                                            isActive ? activeStyle : undefined
                                        } to="/admin/blog">Blog</NavLink>
                                    </li>
                                ) : (
                                    <li></li>
                                )}
                                <li>
                                    <NavLink to="/">Go to Home</NavLink>
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
