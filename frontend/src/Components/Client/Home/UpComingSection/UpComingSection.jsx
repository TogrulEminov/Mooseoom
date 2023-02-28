import React, { useContext,useEffect} from 'react'
import "./_UpComingSection.scss"
import { Link } from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import "swiper/css/navigation";
import { mainContext } from '../../../../Context/Context';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
const UpComingSection = () => {
  const { blog } = useContext(mainContext)
  useEffect(()=>{
    AOS.init({duration:2000});
},[])
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
        <div data-aos="flip-up" className="upComingBody">
          <Swiper
            slidesPerView={"auto"}
            className="mySwiper"
          >
            {blog && blog
              .filter(item => item.catagories === "Home1")
              .map((e) => (
                <SwiperSlide key={e._id} className="card">
                  <Link to={`/blog/${e._id}`} className="cardImage">
                    <img src={e?.blogImage} alt="" />
                  </Link>
                  <article>
                    <h5>{e.date}</h5>
                    <h2>{e.title}</h2>
                    <p>{e.information}</p>
                  </article>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default UpComingSection
