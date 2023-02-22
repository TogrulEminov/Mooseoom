import React, { useContext } from 'react'
import "./_UpComingSection.scss"
import { Link } from "react-router-dom"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Pagination } from "swiper";

import { mainContext } from '../../../Context/Context';
const UpComingSection = () => {
  const { blog } = useContext(mainContext)
  return (
    <div className='upComingSection'>
      <div className="container">
        <div className="upComingSectionHead">
          <div className="row">
            <div className="col-8 col-lg-8 col-md-8 col-xs-12 col-s-12 title">
              <h6>Here are our</h6>
              <h1>Upcoming Exhibitions</h1>
              <p>The role that curators play, like the art they care for, is constantly evolving. As culture shifts, moving with changes in the social and political landscape or technological innovations so does the art being produced.</p>
            </div>
          </div>
        </div>
        <div className="upComingBody">
          <Swiper
            slidesPerView={4}
            spaceBetween={30}

            modules={[Pagination]}
            className="mySwiper"
          >
            {blog && blog
              .filter(item => item.catagories === "Home1")
              .map((e) => (
                <SwiperSlide key={e._id}>
                  <div className="card">
                    <Link className="cardImage">
                      <img src={e?.blogImage} alt="" />
                    </Link>
                    <article>
                      <h5>{e.date}</h5>
                      <h2>{e.title}</h2>
                      <p>{e.information}</p>
                    </article>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default UpComingSection
