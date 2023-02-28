import "./_Curators.scss"
import img1 from "../../../../media/team1.jpg"
import img2 from "../../../../media/team2.jpg"
import img3 from "../../../../media/team3.jpg"
import { useEffect } from "react"
import AOS from 'aos';
import 'aos/dist/aos.css'; 
const Curators = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])
    return (
        <div className='curatorSection'>
            <div className="container">
                <div className="curatorHead">
                    <div className="row">
                        <div className="col-12 col-lg-12 col-md-12 col-xs-12 col-s-12 title">
                            <h5>We have the</h5>
                            <h1>Professional Team of Curators</h1>
                            <p>The role that curators play, like the art they care for, is constantly evolving. As culture shifts, moving with changes in the social and political landscape or technological innovations, so does the art being produced.</p>
                        </div>
                    </div>
                </div>
                <div className="curatorsBody">
                    <div className="row">
                        <div data-aos="fade-up" className="col-4 col-lg-4 col-md-4 col-xs-10 col-s-12 curatorsCard">
                            <div className='curatorsImage'>
                                <img src={img1} alt="" />
                            </div>
                            <article>
                                <h4>Assistant Curator</h4>
                                <h3>Louis Toadvine</h3>
                            </article>
                        </div>
                        <div data-aos="fade-up" className="col-4 col-lg-4 col-md-4 col-xs-10 col-s-12 curatorsCard">
                            <div className='curatorsImage'>
                                <img src={img2} alt="" />
                            </div>
                            <article>
                                <h4>Lead curator</h4>
                                <h3>Oedipa Mass</h3>
                            </article>
                        </div>
                        <div data-aos="fade-up" className="col-4 col-lg-4 col-md-4 col-xs-10 col-s-12 curatorsCard">
                            <div className='curatorsImage'>
                                <img src={img3} alt="" />
                            </div>
                            <article>
                                <h4>Artist resident</h4>
                                <h3>Tyrone Di Presso</h3>
                            </article>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Curators
