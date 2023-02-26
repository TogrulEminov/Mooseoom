import React from 'react'
import { Link } from "react-router-dom"

import "./_HeroSection.scss"
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Navigation } from "swiper";

const HeroSection = () => {

    return (
        <div className='swiperSlider'>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='swp-1'>
                        <div className="row">
                            <div className='col-lg-8 col-md-10 col-xs-12 col-s-12 swiperContent'>
                                <h3>The Most Expected Events</h3>
                                <h1>Opening Night On November 25th
                                    <br/>
                                     "Space-Intertwinded" Installation</h1>
                                <Link>Buy Ticket</Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='swp-1 swp2'>
                        <div className="row">
                            <div className='col-lg-8 col-md-12 col-xs-12 col-s-12 swiperContent'>
                                <h3>New York Gallery</h3>
                                <h1>Royal Society of Miniature Painters Sculptors and Gravers</h1>
                                <Link>Buy Ticket</Link>
                            </div>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className='swp-1 swp3'>
                        <div className="row">
                            <div className='col-lg-8 col-md-12 col-xs-12 col-s-12 swiperContent'>
                                <h3>Your New Art World</h3>
                                <h1>Art Gallery Society Event: Christmas Eve in the Art Gallery</h1>
                                <Link>Buy Ticket</Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default HeroSection
