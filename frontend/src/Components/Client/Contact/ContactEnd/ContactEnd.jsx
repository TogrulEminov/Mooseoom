import React from 'react'
import "./_ContactEnd.scss"
import { GoLocation } from "react-icons/go"
import { Link } from "react-router-dom"
import { BsFillTelephoneFill } from "react-icons/bs"
import { AiOutlineMail } from "react-icons/ai"
import { Swiper, SwiperSlide } from "swiper/react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";

const ContactEnd = () => {
    return (
        <div className='allContactEnd'>
            <div className="container">
                <div className="row">
                    <div className="col-6 col-lg-6 col-md-6 col-s-12 col-xs-12">
                        <div className="contactEndLeft">
                            <article>
                                <h1>Get in Touch With Us</h1>
                                <p>If you would like to hear about our exhibitions and events by email, please use the Subscribe button to the left. Otherwise in the message box you can ask to join our postal list.</p>
                            </article>

                            <Swiper
                                loop={true}
                                navigation={true}
                                modules={[Navigation]}
                                className="mySwiper">
                                <SwiperSlide>
                                    <div className="swiperCard">
                                        <h3>Barcelona</h3>
                                        <ul>
                                            <li>
                                                <div className='icon'>
                                                    <GoLocation />
                                                </div>
                                                <p>06 Khalil Mountain</p>
                                            </li>
                                            <li>
                                                <div className='icon'>
                                                    <BsFillTelephoneFill />
                                                </div>
                                                <Link to="">+3 731-988-2944</Link>
                                            </li>
                                            <li>
                                                <div className='icon'>
                                                    <AiOutlineMail />
                                                </div>
                                                <Link>barselona@mooseoom.com</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="swiperCard">
                                        <h3>Berlin</h3>
                                        <ul>
                                            <li>
                                                <div className='icon'>
                                                    <GoLocation />
                                                </div>
                                                <p>97 DuBuque Junctions</p>
                                            </li>
                                            <li>
                                                <div className='icon'>
                                                    <BsFillTelephoneFill />
                                                </div>
                                                <Link to="">+4 219-970-1034</Link>
                                            </li>
                                            <li>
                                                <div className='icon'>
                                                    <AiOutlineMail />
                                                </div>
                                                <Link>berlin@mooseoom.com</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="swiperCard">
                                        <h3>New York</h3>
                                        <ul>
                                            <li>
                                                <div className='icon'>
                                                    <GoLocation />
                                                </div>
                                                <p>7691 Jaclyn Circle Apt. 641</p>
                                            </li>
                                            <li>
                                                <div className='icon'>
                                                    <BsFillTelephoneFill />
                                                </div>
                                                <Link to="">+1  453-174-4056</Link>
                                            </li>
                                            <li>
                                                <div className='icon'>
                                                    <AiOutlineMail />
                                                </div>
                                                <Link>new-york@mooseoom.com</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </SwiperSlide>
                            </Swiper>

                            <div className="socialContact">
                                <ul>
                                    <li>
                                        <div className="icon">
                                            <FaFacebookF />
                                        </div>
                                        <Link to="">facebook</Link>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <FaLinkedinIn />
                                        </div>
                                        <Link to="">linkedin</Link>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <FaTwitter />
                                        </div>
                                        <Link to="">twitter</Link>
                                    </li>

                                </ul>
                            </div>
                        </div>

                    </div>
                    <div className="col-6 col-lg-6 col-md-6 col-s-12 col-xs-12">
                        <div className="contactEndRight">
                            <h1>Send us a Message</h1>
                            <form action="">
                                <div className="row">
                                    <div className="col-6 col-lg-6 col-md-6 col-s-12 col-xs-12">
                                        <div className="allInputs">
                                            <div className='inputOne'>
                                                <input type="text" placeholder='Your name*' />
                                                <p>Type</p>
                                            </div>
                                            <div className='inputOne'>
                                                <input type="email" placeholder='Email*' />
                                                <p>Type</p>
                                            </div>
                                            <div className='inputOne'>
                                                <input type="text" placeholder='Website' />
                                                <p>Type</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 col-lg-6 col-md-6 col-s-12 col-xs-12">
                                        <div className="allInputs">
                                            <div className='inputOne'>
                                                <input type="text" placeholder='Affilation*' />
                                                <p>Type</p>
                                            </div>
                                            <div className='inputOne'>
                                                <input type="tel" placeholder='Number*' />
                                                <p>Type</p>
                                            </div>
                                            <div className='inputOne'>
                                                <input type="text" placeholder='Inquiry Department**' />
                                                <p>Type</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-12 col-md-12 col-s-12 col-xs-12">
                                        <div className="allInputs">
                                            <div className="inputOne">
                                                <input type="text" placeholder='Topic*' />
                                                <p>Type</p>
                                            </div>
                                            <div className="inputOne">
                                                <textarea placeholder='Your Message'></textarea>
                                                <p>Type</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-12 col-md-12 col-s-12 col-xs-12">
                                        <div className="allInputs">
                                            <div className="inputOne">
                                                <button>Submit</button>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactEnd
