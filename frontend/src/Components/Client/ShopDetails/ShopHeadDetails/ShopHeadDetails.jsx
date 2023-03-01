import React, { useContext, useEffect, useState } from 'react'
import "./_ShopHeadDetails.scss"
import { Link } from "react-router-dom"
import { AiOutlinePlus, AiOutlineMinus, AiFillStar, AiOutlineStar } from "react-icons/ai"
import { mainContext } from '../../../../Context/Context'

const ShopHeadDetails = ({data}) => {
    const filledStar = [
        "filled",
        "filled",
        "filled",
        "filled",
        "filled",
    ]
    const outlineStar = [
        "outlined",
        "outlined",
        "outlined",
        "outlined",
        "outlined",
    ]
    const { handleClick,decreaseQuantity,increaseQuantity,quantities } = useContext(mainContext)
    const [star, setStar] = useState([]);

   
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }, [])
    const generateRating = (rating) => {
        if (rating === 0)
            return setStar(outlineStar)

        setStar([
            ...filledStar.slice(0, rating),
            ...outlineStar.slice(0, 5 - rating),
        ]);
    };

    useEffect(() => {
        generateRating(data.rate)
    }, [data])

    return (
        <div className='shopHeadDetails'>
            <div className="container">
                <div className="row">
                    <div className="col-6 detailsImage">
                        <button> <img src={data.imagePath} alt="" /></button>
                        {data.sale ? <span>Sale</span> : <></>}
                    </div>
                    <div className="col-6 detailsContent">
                        <article>
                            <h2>{data.name}</h2>
                            <ul>
                                {
                                    star?.map((item, i) => (
                                        <li key={i}>{item === "filled" ? <AiFillStar /> : <AiOutlineStar />}</li>
                                    ))
                                }
                            </ul>
                            {data.sale ?
                                <div className="percentPrice">
                                    <del>£{data.price}</del>
                                    <span>£{data.price - parseInt((data.price * data.percantagePrice) / 100)}.00</span>
                                </div> : <div className="articleContent">
                                    <span>£{data.price}</span>
                                </div>
                            }
                            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                            <div className='countProduct'>
                                <button className='plusMinus'>
                                    <AiOutlinePlus  onClick={()=>increaseQuantity(data._id)} />
                                </button>
                                <span>{quantities[data._id] || 1}</span>
                                <button className='plusMinus'>
                                    <AiOutlineMinus onClick={()=>decreaseQuantity(data._id)} />
                                </button>
                                <button onClick={() => handleClick(data)} className='addBtn'>Add to Cart</button>
                            </div>

                            <div className="catagory">
                                <span>Catagory:</span>
                                <Link>{data.catagory}</Link>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShopHeadDetails
