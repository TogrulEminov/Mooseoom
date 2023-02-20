import React, { useContext } from 'react'
import { AiFillStar } from "react-icons/ai"
import { mainContext } from '../../Context/Context'
import { Link } from "react-router-dom"
const ShopContent = () => {
    const { data,handleClick } = useContext(mainContext)

    return (
        <div className="shopCardContent">
            <div className="container">
                <div className="row">
                    {
                        data && data.map((e,index) => (
                            <div className="col-3 shopCard" key={index}>
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

                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default ShopContent
