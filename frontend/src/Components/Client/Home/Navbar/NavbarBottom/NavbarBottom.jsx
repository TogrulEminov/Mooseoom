import "./_NavbarBottom.scss"
import { RxHamburgerMenu } from "react-icons/rx"
import { BsFacebook, BsInstagram, BsTwitter, BsDribbble } from "react-icons/bs"
import { Link, NavLink } from "react-router-dom"
import { AiOutlineClose } from "react-icons/ai"
import { FaAngleDown } from "react-icons/fa"
import { useContext } from "react"
import { mainContext } from "../../../../../Context/Context"
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"
import Logo from "../../../../Client/Logo/Logo"
const NavbarBottom = () => {
    const { clickHamburger, open, clickBtn, faq } = useContext(mainContext)
    let activeStyle = {
        color: "red"
    };
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
                        <Link to="/"> <Logo /></Link>
                    </div>
                    <div className="navbarBottomLinks">
                        <ul>
                            <li>
                                <NavLink style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                } to="/">Home</NavLink>
                                <div className="submenu">
                                    <ul>
                                        <li>
                                            <NavLink to="/" style={({ isActive }) =>
                                                isActive ? activeStyle : undefined
                                            }>Home1</NavLink>
                                        </li>
                                        <li>
                                            <NavLink style={({ isActive }) =>
                                                isActive ? activeStyle : undefined
                                            } to="/home2">Home2</NavLink>
                                        </li>
                                        <li>
                                            <NavLink style={({ isActive }) =>
                                                isActive ? activeStyle : undefined
                                            } to="/home3">Home3</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <NavLink to="/cart" style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }>museum</NavLink>
                                <div className="submenu-2">
                                    <div className="row">
                                        <div className="col-6 submenuLeft">
                                            <h3>Column One</h3>
                                            <ul>
                                                <li>
                                                    <NavLink to="/about-us" style={({ isActive }) =>
                                                        isActive ? activeStyle : undefined
                                                    }>About us</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/mission-history" style={({ isActive }) =>
                                                        isActive ? activeStyle : undefined
                                                    }>Mission and History</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/leadership" style={({ isActive }) =>
                                                        isActive ? activeStyle : undefined
                                                    }>Leadership</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/location" style={({ isActive }) =>
                                                        isActive ? activeStyle : undefined
                                                    }>Location</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/awards" style={({ isActive }) =>
                                                        isActive ? activeStyle : undefined
                                                    }>Awards</NavLink>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-6 submenuLeft submenuRight">
                                            <h3>Column Two</h3>
                                            <ul>
                                                <li>
                                                    <NavLink to="/magazine" style={({ isActive }) =>
                                                        isActive ? activeStyle : undefined
                                                    }>Magazine</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/membership" style={({ isActive }) =>
                                                        isActive ? activeStyle : undefined
                                                    }>MemberShip</NavLink>
                                                </li>
                                                <li>
                                                    <Link to="/gutenberg">Gutenberg</Link>
                                                    <AiOutlinePlus className="plus" />
                                                    <AiOutlineMinus className="minus" />
                                                    <div className="submenu-3">
                                                        <ul>
                                                            <li>
                                                                <NavLink to="/accordionblock" style={({ isActive }) =>
                                                                    isActive ? activeStyle : undefined
                                                                }>Accordion Block</NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink to="/advancedcolumns" style={({ isActive }) =>
                                                                    isActive ? activeStyle : undefined
                                                                }>Advanced Columns Block</NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink to="/author" style={({ isActive }) =>
                                                                    isActive ? activeStyle : undefined
                                                                }>Author Profile Block</NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink to="/buttonblock" style={({ isActive }) =>
                                                                    isActive ? activeStyle : undefined
                                                                }>Button Block</NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink to="/calltoaction" style={({ isActive }) =>
                                                                    isActive ? activeStyle : undefined
                                                                }>Call to Action Block</NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink to="/container" style={({ isActive }) =>
                                                                    isActive ? activeStyle : undefined
                                                                }>Container</NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink to="/drop-cap" style={({ isActive }) =>
                                                                    isActive ? activeStyle : undefined
                                                                }>Drop Cap Block</NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink to="/email-newsletter" style={({ isActive }) =>
                                                                    isActive ? activeStyle : undefined
                                                                }>Email Newsletter Block</NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink to="/inline-notice" style={({ isActive }) =>
                                                                    isActive ? activeStyle : undefined
                                                                }>Inline Notice Block</NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink to="/post-page" style={({ isActive }) =>
                                                                    isActive ? activeStyle : undefined
                                                                }>Post and Page Grid</NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink to="/pricing" style={({ isActive }) =>
                                                                    isActive ? activeStyle : undefined
                                                                }>Pricing Box</NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink to="/sharing" style={({ isActive }) =>
                                                                    isActive ? activeStyle : undefined
                                                                }>Sharing Icons</NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink to="/spacer" style={({ isActive }) =>
                                                                    isActive ? activeStyle : undefined
                                                                }>Spacer Block</NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink to="testimonial" style={({ isActive }) =>
                                                                    isActive ? activeStyle : undefined
                                                                }>Testimonial Block</NavLink>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                </li>
                                                <li>
                                                    <NavLink to="/carrers" style={({ isActive }) =>
                                                        isActive ? activeStyle : undefined
                                                    }>Carreers</NavLink>

                                                    <AiOutlinePlus className="plus plus-2" />
                                                    <AiOutlineMinus className="minus minus-2" />

                                                    <div className="submenu-3">
                                                        <ul>
                                                            <li>
                                                                <NavLink to="/exhibition" style={({ isActive }) =>
                                                                    isActive ? activeStyle : undefined
                                                                }>Exhibition Program</NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink to="/director" style={({ isActive }) =>
                                                                    isActive ? activeStyle : undefined
                                                                }>Director of Human Resources</NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink to="/visitor" style={({ isActive }) =>
                                                                    isActive ? activeStyle : undefined
                                                                }>Visitor Experience Manager</NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink to="/commercial" style={({ isActive }) =>
                                                                    isActive ? activeStyle : undefined
                                                                }>Commercial Art  Manager</NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink to="/senior" style={({ isActive }) =>
                                                                    isActive ? activeStyle : undefined
                                                                }>Senior Collection Coordinator</NavLink>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li>
                                                    <NavLink to="/shop" style={({ isActive }) =>
                                                        isActive ? activeStyle : undefined
                                                    }>Shop</NavLink>
                                                    <AiOutlinePlus className="plus plus-3" />
                                                    <AiOutlineMinus className="minus minus-3" />

                                                    <div className="submenu-3 submenu-4">
                                                        <ul>
                                                            <li>
                                                                <NavLink to="/shop" style={({ isActive }) =>
                                                                    isActive ? activeStyle : undefined
                                                                }>Shop</NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink to="/checkout" style={({ isActive }) =>
                                                                    isActive ? activeStyle : undefined
                                                                }>Chekcout</NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink to="/cart" style={({ isActive }) =>
                                                                    isActive ? activeStyle : undefined
                                                                }>Cart</NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink to="/myaccount" style={({ isActive }) =>
                                                                    isActive ? activeStyle : undefined
                                                                }>My Account</NavLink>
                                                            </li>

                                                        </ul>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <NavLink to="/exhibitions" style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }>exhibitions</NavLink>
                            </li>
                            <li>
                                <NavLink to="/events" style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }>events</NavLink>
                            </li>
                            <li>
                                <NavLink to="/collections" style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }>collections</NavLink>
                            </li>
                            <li>
                                <NavLink to="/galery" style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }>our gallery</NavLink>
                            </li>
                            <li>
                                <NavLink to="/blog" style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }>blog</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contuctUs" style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }>contact us</NavLink>
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
                                    <div className='dropdownSide'>
                                        <NavLink to="/">Home</NavLink>
                                    </div>
                                </li>
                                <li>
                                    <div className='dropdownSide' onClick={clickBtn}>
                                        <NavLink to="/shop">Museum</NavLink>
                                        <FaAngleDown style={{ transform: faq ? "rotate(0)" : "rotate(180deg)" }} />
                                    </div>
                                </li>
                                <div className='submenuSide' style={{ display: faq ? "block" : "none" }}>
                                    <ul>
                                        <li><Link to="/shop">Shop</Link></li>
                                        <li><Link to="/cart">Card</Link></li>
                                        <li to="/cart"><Link>Checkout</Link></li>
                                    </ul>
                                </div>


                                <li>
                                    <NavLink to="/exhibitions">exhibitions</NavLink>
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
                                    <NavLink to="contuctUs">contuct us</NavLink>
                                </li>
                                <li>
                                    <div className="mobileSocial">
                                        <NavLink href=""><BsFacebook /></NavLink>
                                        <NavLink href=""><BsInstagram /></NavLink>
                                        <NavLink href=""><BsTwitter /></NavLink>
                                        <NavLink href=""><BsDribbble /></NavLink>
                                    </div>

                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div >
        </div >
    )
}

export default NavbarBottom
