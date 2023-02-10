import "./_NavbarBottom.scss"
import { RxHamburgerMenu } from "react-icons/rx"
import { BsFacebook, BsInstagram, BsTwitter, BsDribbble } from "react-icons/bs"
import Logo from '../../../Logo/Logo'
import { Link, NavLink } from "react-router-dom"
import { AiOutlineClose } from "react-icons/ai"
import { FaAngleDown } from "react-icons/fa"
import { useContext } from "react"
import { mainContext } from "../../../../Context/Context"
const NavbarBottom = () => {
    const { clickHamburger, open, clickBtn, faq } = useContext(mainContext)
    return (
        <div className="navbarBottom">
            <div className="container">
                <div className="row">
                    <div className="hamburger">
                        <button onClick={() => clickHamburger()} >
                            <RxHamburgerMenu />
                        </button>
                    </div>
                    <div className="logo">
                        <Link> <Logo /></Link>
                    </div>
                    <div className="navbarBottomLinks">
                        <ul>
                            <li>
                                <NavLink to="/home1">Home</NavLink>

                            </li>
                            <li>
                                <NavLink to="/museum">museum</NavLink>

                            </li>
                            <li>
                                <NavLink to="/exhibitions">exhibiutions</NavLink>
                            </li>
                            <li>
                                <NavLink to="/events">events</NavLink>
                            </li>
                            <li>
                                <NavLink to="/collections">collections</NavLink>
                            </li>
                            <li>
                                <NavLink to="/galery">our gallery</NavLink>
                            </li>
                            <li>
                                <NavLink to="/blog">blog</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contuctUs">contuct us</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="navbarBottomSocial">
                        <ul>
                            <li><Link><BsFacebook /></Link></li>
                            <li><Link ><BsInstagram /></Link></li>
                            <li><Link><BsTwitter /></Link></li>
                            <li><Link><BsDribbble /></Link></li>
                        </ul>
                    </div>

                    <div className="logoMobile">
                        <Logo />
                    </div>
                    <div className="sidebar-nav" style={{ transform: open ? "translate(0%)" : "translate(-100%)" }} >
                        <div className='sidebarHead'>
                            <h1>Menu</h1>
                            <button onClick={() => clickHamburger()} ><AiOutlineClose /></button>
                        </div>
                        <div className="sidebarLinks">
                            <ul>
                                <li>
                                    <div className='dropdownSide' onClick={clickBtn}>
                                        <NavLink>Home</NavLink>
                                        <FaAngleDown style={{ transform: faq ? "rotate(0)" : "rotate(180deg)" }} />
                                    </div>
                                </li>
                                <div className='submenuSide' style={{ display: faq ? "block" : "none" }}>
                                    <ul>
                                        <li><Link>Home1</Link></li>
                                        <li><Link>Home2</Link></li>
                                        <li><Link>Home3</Link></li>
                                    </ul>
                                </div>
                                <li>
                                    <div className='dropdownSide' onClick={clickBtn}>
                                        <NavLink>museum</NavLink>
                                        <FaAngleDown style={{ transform: faq ? "rotate(0)" : "rotate(180deg)" }} />
                                    </div>
                                </li>
                                <div className='submenuSide' style={{ display: faq ? "block" : "none" }}>
                                    <ul>
                                        <li><Link>Home1</Link></li>
                                        <li><Link>Home2</Link></li>
                                        <li><Link>Home3</Link></li>
                                    </ul>
                                </div>


                                <li>
                                    <NavLink>exhibiutions</NavLink>
                                </li>
                                <li>
                                    <NavLink>events</NavLink>
                                </li>
                                <li>
                                    <NavLink>collections</NavLink>
                                </li>
                                <li>
                                    <NavLink>our gallery</NavLink>
                                </li>
                                <li>
                                    <NavLink>blog</NavLink>
                                </li>
                                <li>
                                    <NavLink>contuct us</NavLink>
                                </li>
                                <li>
                                    <div className="mobileSocial">
                                        <a href=""><BsFacebook /></a>
                                        <a href=""><BsInstagram /></a>
                                        <a href=""><BsTwitter /></a>
                                        <a href=""><BsDribbble /></a>
                                    </div>

                                </li>
                            </ul>
                        </div>

                    </div>
                    <div className="overlay-sidebar"></div>
                </div>
            </div >
        </div >
    )
}

export default NavbarBottom
