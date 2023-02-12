import React from 'react'
import "./_Shop.scss"
import card1 from "../../media/hoodie_4_front-300x300.jpg"
import { AiFillStar } from "react-icons/ai"
const Shop = () => {
    return (
        <div className='allShop'>
            <div className='shopBackground'>
                <div className="container">
                    <div className="row">
                        <div className="col-6 col-lg-6 col-md-6 col-xs-12 col-s-12 shopContent">
                            <h3>Shop</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shopCardContent">
                <div className="container">
                    <div className="row">
                        <div className="col-3 shopCard">
                            <div className="shopCardImage">
                                <img src={card1} alt="" />
                                <div className='sale'>
                                    <span>sale!</span>
                                </div>
                            </div>
                            <article>
                                <h3>Flying Ninja</h3>
                                <div className="cardRate">
                                    <ul>
                                        <li><AiFillStar /></li>
                                        <li><AiFillStar /></li>
                                        <li><AiFillStar /></li>
                                        <li><AiFillStar /></li>
                                        <li><AiFillStar /></li>

                                    </ul>
                                </div>
                                <div className="articleContent">
                                    <del>£15.00</del>
                                    <span>£12.00</span>
                                </div>
                                <button>Add to card</button>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop
