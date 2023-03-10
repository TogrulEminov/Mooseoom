import React, { useContext, useEffect } from 'react'
import { Link } from "react-router-dom"
import "./_ContuctHome1.scss"
import { BsFacebook, BsInstagram, BsTwitter, BsDribbble } from "react-icons/bs"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { mainContext } from '../../../../Context/Context';

const ContuctHome1 = () => {
    const { postMessage, handleMessage, message } = useContext(mainContext)

  
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])
    return (
        <div data-aos="fade-up" className='allContuctHome'>
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
                        <form onSubmit={postMessage}>
                            <div className='contuctTextarea'>
                                <textarea
                                    name='message'
                                    value={message.message}
                                    onChange={handleMessage} placeholder='Your message'></textarea>
                            </div>
                            <div className="contuctInput">
                                <div className='inputYup'>
                                    <input
                                        name='name'
                                        value={message.name}
                                        onChange={handleMessage} type="text" placeholder='Your name' />
                                </div>
                                <div className='inputYup'>
                                    <input
                                        name='email'
                                        value={message.email}
                                        onChange={handleMessage} type="email" placeholder='Your e-mail' />

                                </div>
                            </div>
                            <button>Submit Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContuctHome1
