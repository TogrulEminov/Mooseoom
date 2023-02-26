import React, { useContext, useEffect } from 'react'
import { AiFillStar } from "react-icons/ai"
import { mainContext } from '../../../Context/Context'
import { Link } from "react-router-dom"
import "./_Shop.scss"
import Pagination from './Pagination/Pagination'
const ShopContent = () => {
    const { currentShop, handleClick } = useContext(mainContext)
    useEffect(() => {
        window.scrollTo({
               top: 0,
               left: 0,
               behavior: "smooth"
             });
     },[])
    return (
        <div className="shopCardContent">
            <div className='shopBackground'>
                <div className="row">
                    <div className="col-6 col-lg-6 col-md-6 col-xs-12 col-s-12 shopContent">
                        <h3>Shop</h3>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    {
                        currentShop && currentShop.map((e, index) => (
                            <div key={index} className='col-3 col-lg-3 col-md-4 col-s-6  col-xs-12'>
                                <div className="shopCard" >
                                    <div className="shopCardImage">
                                        <Link to={`${e._id}`}>
                                            <img src={e.imagePath} alt="" />
                                        </Link>

                                        <div className='sale'>
                                            {e.sale ? <span>sale</span> : <></>}
                                        </div>
                                    </div>
                                    <article>
                                        <h3>{e.name}</h3>
                                        <div className="cardRate">
                                            <ul>
                                                <li><AiFillStar /></li>
                                                <li><AiFillStar /></li>
                                                <li><AiFillStar /></li>
                                                <li><AiFillStar /></li>
                                                <li><AiFillStar /></li>

                                            </ul>
                                        </div>
                                        {e.sale ?
                                            <div className="articleContent">
                                                <del>£{e.price}</del>
                                                <span>£{e.price - parseInt((e.price * e.percantagePrice) / 100)}.00</span>
                                            </div> : <div className="articleContent">
                                                <span>£{e.price}</span>
                                            </div>
                                        }
                                        <button onClick={() => handleClick(e)}>Add to card</button>
                                    </article>
                                </div>
                            </div>
                        ))
                    }

                </div>
                <Pagination />
            </div>
        </div>
    )
}

export default ShopContent
