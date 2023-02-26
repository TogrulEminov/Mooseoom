import React from 'react'
import "./_Information.scss"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import card1 from "../../../../media/member-2-150x150-1.jpg"
import card2 from "../../../../media/member-5-150x150-1.jpg"
import card3 from "../../../../media/testimonaial-image_1.png"
import card4 from "../../../../media/testimonaial-image_2.png"

const Information = () => {
    return (
        <div className='informationSection'>
            <div className="container">
                <Swiper
                    slidesPerView={"auto"}
                    spaceBetween={30}
                    grabCursor={true}
                    loop={true}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className='swiperCard'>
                            <div className="swiperHeader">
                                <h4>"I am very grateful to The MooM Gallery for representing my work in NY. Its wonderful staff have so much joy for the new pieces, which will ..."</h4>
                            </div>
                            <div className="swiperContent">
                                <div className='swiperContentImage'>
                                    <img src={card1} alt="" />
                                </div>
                                <div className="swiperContentAbout">
                                    <h3>Karla Moneco</h3>
                                    <p>Artist / Curator</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='swiperCard'>
                            <div className="swiperHeader">
                                <h4>“I have been represented by The MooM Gallery now for the past 6 years. The staff there have been lovely with us over..."</h4>
                            </div>
                            <div className="swiperContent">
                                <div className='swiperContentImage'>
                                    <img src={card2} alt="" />
                                </div>
                                <div className="swiperContentAbout">
                                    <h3>Leroy Monec</h3>
                                    <p>Visitor / Curator</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='swiperCard'>
                            <div className="swiperHeader">
                                <h4>"My experience with MooM gallery has been truly delightful. Preparation for the exhibition was done very smoothly..."</h4>
                            </div>
                            <div className="swiperContent">
                                <div className='swiperContentImage'>
                                    <img src={card3} alt="" />
                                </div>
                                <div className="swiperContentAbout">
                                    <h3>Steve Buschemi</h3>
                                    <p>Artist / Curator</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='swiperCard'>
                            <div className="swiperHeader">
                                <h4>"We were fortunate enough to attend the opening reception of a landscape exhibit. What an experience to meet the artists. This is one of those ..."</h4>
                            </div>
                            <div className="swiperContent">
                                <div className='swiperContentImage'>
                                    <img src={card4} alt="" />
                                </div>
                                <div className="swiperContentAbout">
                                    <h3>Norma Jean Thomas</h3>
                                    <p>Visitor / Curator</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                
                </Swiper>
            </div>
        </div>
    )
}

export default Information
