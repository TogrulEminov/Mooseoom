import React, { useContext } from 'react'
import "../_Card.scss"
import { AiOutlineDelete, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"
import { Link } from "react-router-dom"
import { MdContentPaste } from "react-icons/md"
import { mainContext } from '../../../../../Context/Context'
const CardBody = () => {
    const { cardItems, emptyBasket,price,decreaseQuantity,increaseQuantity,quantities } = useContext(mainContext)

    return (

        <div className='allCardBasket'>
            <div className="container">
            {cardItems.length > 0 && (
                <table>
                    <thead>
                        <th>Delete</th>
                        <th>Image</th>
                        <th>Products</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                    </thead>
                    {cardItems.map((product) => (
                        <tbody key={product._id}>
                            <tr >
                                <td data-aria-label='Delete'>
                                    <button  onClick={() => emptyBasket()}><AiOutlineDelete /></button>
                                </td>
                                <td data-aria-label='Image'>
                                    <Link to={`/shop/${product._id}`}>
                                        <img src={product?.imagePath} alt={product.name} /></Link>
                                </td>
                                <td data-aria-label='Products'>
                                    <Link to={`/shop/${product._id}`}>  <span>
                                        {product.name}
                                    </span></Link>
                                </td>
                                <td data-aria-label='Price'>
                                    {product.sale ?
                                        <span>£{product.price - parseInt((product.price * product.percantagePrice) / 100)}.00</span>
                                        :
                                        <span>£{product.price}</span>
                                    }
                                </td>
                                <td data-aria-label='Quantity'>
                                    <div className="quantity">
                                    <button className='plus'>
                                        <AiOutlinePlus onClick={()=>increaseQuantity(product._id)} />
                                    </button>
                                    <span>{quantities[product._id] || 1}</span>
                                    <button className='minus'>
                                        <AiOutlineMinus onClick={()=>decreaseQuantity(product._id)} />
                                    </button>
                                    </div>
                                </td>
                                <td data-aria-label='Subtotal'>
                                    <h5> ${parseFloat(product.price) * (quantities[product._id] || 1)}</h5>
                                </td>
                            </tr>
                        </tbody>
                    ))}
                    
                </table>
            )}
            {cardItems.length === 0 && (
                <div className='emptyCardBasket'>
                        <div className="emptyBasketContent">
                            <div className='horizontal'></div>
                            <p>
                                <MdContentPaste />
                                <span>Your cart is currently empty.</span>
                            </p>
                            <Link to="/shop">Return to shop</Link>
                        </div>
                    </div>
               
            )}
        </div>
        </div>
    )
}

export default CardBody
