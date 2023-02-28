import React, { useContext, useEffect } from 'react'
import "./_ArtDesign.scss"
import { Link } from "react-router-dom"
import { mainContext } from '../../../../Context/Context'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
const ArtDesign = () => {
    const { artData } = useContext(mainContext)
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])
    return (
        <div data-aos="fade-up" className='artDesign'>
            <div className="container">
                <div className="row">
                    {artData && artData
                    .filter((item)=>item.title==="Gallery Hall")
                    .map((item) => (
                        <div className="col-4 col-lg-4 col-md-6 col-xs-12 col-s-12 cardImage" key={item._id}>
                            <div className='image'>
                                <img src={item.artPath} alt={item.name} />
                                <div className="imageHover">
                                    <div>
                                        <h3>{item.title}</h3>
                                        <h3><Link to={`/galery/${item._id}`}>{item.name}</Link></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ArtDesign
