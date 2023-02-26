import React from 'react'
import { Link } from "react-router-dom"
import "./_ContuctHome1.scss"
import { BsFacebook, BsInstagram, BsTwitter, BsDribbble } from "react-icons/bs"
const ContuctHome1 = () => {
    return (
        <div className='allContuctHome'>
            <div className="container">
                <div className="row">
                    <div className="col-6 col-lg-6 col-md-6 col-xs-12 col-s-12 contuctLeft">
                        <h3>Contact Us</h3>
                        <h1>Got Some Questions For Us?</h1>
                        <div className="contuctLeftBody">
                            <div className='contuctContent'>
                                <h3>Museum</h3>
                                <p>3 Wakehurst Street
                                    <br />
                                    New York, NY 10002
                                </p>
                                <Link to="tel:+1234567890">+1-202-555-0133</Link>
                                <p>
                                    <Link to="mailto:mooseoom@example.com">mooseoom@example.com</Link>
                                </p>
                            </div>
                            <div className='contuctContent'>
                                <h3>Box Office</h3>
                                <p>2249  Turkey Pen Road
                                    <br />
                                    New York, NY 10002
                                </p>
                                <Link to="tel:+1234567890">+1-202-555-0133</Link>
                                <p>
                                    <Link to="mailto:mooseoom@example.com">mooseoom@example.com</Link>
                                </p>
                            </div>
                        </div>
                        <div className="contuctSocial">
                            <ul>
                                <li><Link><BsFacebook /></Link></li>
                                <li><Link ><BsInstagram /></Link></li>
                                <li><Link><BsTwitter /></Link></li>
                                <li><Link><BsDribbble /></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-6 col-lg-6 col-md-6 col-xs-12 col-s-12 contuctRight">
                        <div className='contuctTextarea'>
                            <textarea placeholder='Your message'></textarea>
                        </div>
                        <div className="contuctInput">
                            <div className='inputYup'>
                                <input type="text" placeholder='Your name' />
                            </div>
                            <div className='inputYup'>
                                <input type="email" placeholder='Your e-mail' />
                            </div>
                        </div>
                        <button>Submit Message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContuctHome1
