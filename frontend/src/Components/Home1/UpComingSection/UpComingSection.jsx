import React, { useContext } from 'react'
import "./_UpComingSection.scss"
import { Link } from "react-router-dom"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Navigation } from "swiper";
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
            spaceBetween={20}
            slidesPerView={4}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            {blog && blog.map((e) => (
              <SwiperSlide key={e._id}>
                <div className='col-3'>
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
