import React, { useEffect } from 'react'
import { Link } from "react-router-dom"
import "./_ElementorSection.scss"
import block1 from "../../../../media/block1.jpg"
import block2 from "../../../../media/block2.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css'; 
const ElementorSection = () => {
    useEffect(()=>{
        AOS.init({duration:2000});
    },[])
    return (
        <div className='elementorSection'  >
            <div className="container">
                <div className="elementorHead">
                <div className="row">
                    <div  data-aos="fade-up" className="col-8 col-lg-8  col-md-11 col-xs-12 col-s-12 elementorTitle" >
                        <h1>The MooM with it’s unique collection is among those museums that attracts a wide array of people and is among the rare that have residencies.</h1>
                    </div>
                    </div>
                </div>
                <div data-aos="fade-up" className="elementorBody">
                    <div className="row">
                        <div className="col-6 col-lg-6 col-md-6 col-xs-12 col-s-12 elementorImage">
                            <div className='image'>
                            <img src={block1} alt="block" />
                            </div>
                            <div className='elementorContent'>
                                <h3>Buy Tickets Online</h3>
                                <Link>Buy Ticket</Link>
                            </div>
                        </div>
                        <div className="col-6  col-lg-6 col-md-6 col-xs-12 col-s-12 elementorImage">
                        <div className='image'>
                            <img src={block2} alt="block" />
                            </div>
                            <div className='elementorContent'>
                                <h3>Get Your Discounts</h3>
                                <Link>Learn More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ElementorSection
