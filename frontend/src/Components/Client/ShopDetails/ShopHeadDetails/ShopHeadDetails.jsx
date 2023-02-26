import React from 'react'
import "./_ShopHeadDetails.scss"
import { Link } from "react-router-dom"
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"
const ShopHeadDetails = () => {

    return (
        <div className='shopHeadDetails'>
            <div className="container">
                <div className="row">
                    <div className="col-6 detailsImage">
                       <button> <img src="https://mooseoom.foxthemes.me/wp-content/uploads/2020/01/poster_2_up.jpg" alt="" /></button>
                        <span>Sale</span>
                    </div>
                    <div className="col-6 detailsContent">
                        <article>
                            <h2>Flying Ninja</h2>
                            <ul>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                            <div className='percentPrice'>
                                <del>£15.00</del>
                                <span>£12.00</span>
                            </div>
                            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                            <div className='countProduct'>
                                <button className='plusMinus'>
                                    <AiOutlinePlus />
                                </button>
                                <span>0</span>
                                <button className='plusMinus'>
                                    <AiOutlineMinus />
                                </button>
                                <button className='addBtn'>Add to Cart</button>
                            </div>

                            <div className="catagory">
                                <span>Catagory:</span>
                                <Link>Posters</Link>
                                <Link>Posters</Link>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShopHeadDetails
