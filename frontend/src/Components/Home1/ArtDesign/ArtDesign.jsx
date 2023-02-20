import React, { useContext } from 'react'
import "./_ArtDesign.scss"
import card from "../../../media/block1.jpg"
import { Link } from "react-router-dom"
import { mainContext } from '../../../Context/Context'
const ArtDesign = () => {
    const { artData } = useContext(mainContext)
    return (
        <div className='artDesign'>
            <div className="container">
                <div className="row">
                    {artData && artData.map((item) => (
                        <div className="col-4 col-lg-4 col-md-6 col-xs-12 col-s-12 cardImage" key={item._id}>
                            <div className='image'>
                                <img src={item.artPath} alt={item.name} />
                                <div className="imageHover">
                                    <div>
                                        <h3>{item.title}</h3>
                                        <h3><Link to="">{item.name}</Link></h3>
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
