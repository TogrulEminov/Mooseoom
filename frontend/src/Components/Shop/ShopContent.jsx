import React, { useContext } from 'react'
import { AiFillStar } from "react-icons/ai"
import { mainContext } from '../../Context/Context'
const ShopContent = () => {
    const { data,handleAddProduct} = useContext(mainContext)
   
    return (
        <div className="shopCardContent">
            <div className="container">
                <div className="row">
                    {
                        data && data.map((e,index) => (
                            <div  key={index} className="col-3 shopCard">
                                <div className="shopCardImage">
                                    <img src={e.imagePath} alt="" />
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
                                    <button onClick={()=>handleAddProduct(e)}>Add to card</button>
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
