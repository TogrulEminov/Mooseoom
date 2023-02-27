import React, { useContext, useEffect, useState } from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { mainContext } from '../../../../Context/Context'



const ShopCard = ({ e }) => {
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
    
    const { handleClick } = useContext(mainContext)
    const [star, setStar] = useState([]);


    const generateRating = (rating) => {
        if (rating === 0)
            return setStar(outlineStar)
            
        setStar([
            ...filledStar.slice(0, rating),
            ...outlineStar.slice(0, 5 - rating),
        ]);
    };

    useEffect(() => {
        generateRating(e.rate)
    }, [e])


    return (
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
                        {
                            star?.map((item, i) => (
                                <li key={i}>{item === "filled" ? <AiFillStar /> : <AiOutlineStar />}</li>
                            ))
                        }
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
    )
}

export default ShopCard
