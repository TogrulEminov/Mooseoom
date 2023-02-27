import React, { useContext } from 'react'
import "../_Card.scss"
import { AiOutlineDelete, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"
import { Link } from "react-router-dom"
import { MdContentPaste } from "react-icons/md"
import { mainContext } from '../../../../../Context/Context'
const CardBody = () => {
    const { cardItems, emptyBasket } = useContext(mainContext)

    return (

        <div className='allCardBasket'>
            <div className="container">
            {cardItems.length > 0 && (
                // <div className="Table">
                //     <div className="container">
                //         <div className="tableHead">
                //             <div className="row">
                //                 <div className='col-2 content'>
                //                     Delete
                //                 </div>
                //                 <div className='col-2 content'>
                //                     Image
                //                 </div>
                //                 <div className='col-2 content'>
                //                     Products
                //                 </div>
                //                 <div className='col-2 content'>
                //                     Price
                //                 </div>
                //                 <div className='col-2 content'>
                //                     Quantity
                //                 </div>
                //                 <div className='col-2 content'>
                //                     Subtotal
                //                 </div>

                //             </div>
                //         </div>
                //         {cardItems.map((product) => (
                //             <div className="tableBody" key={product._id}>
                //                 <div className="row">
                //                     <div className="col-2 content">
                //                         <button onClick={() => emptyBasket()}><AiOutlineDelete /></button>
                //                     </div>
                //                     <div className="col-2 content">
                //                         <Link>
                //                             <img src={product?.imagePath} alt={product.name} /></Link>
                //                     </div>
                //                     <div className="col-2 content">
                //                         <Link>  <span>
                //                             {product.name}
                //                         </span></Link>
                //                     </div>
                //                     {product.sale ?
                //                         <div className="col-2 content">
                //                             <span>£{product.price - parseInt((product.price * product.percantagePrice) / 100)}.00</span>
                //                         </div> : <div className="col-2 content">
                //                             <span>£{product.price}</span>
                //                         </div>
                //                     }
                //                     <div className="col-2 content">
                //                         <div className="quantity">
                //                             <button className='plus'>
                //                                 <AiOutlinePlus />
                //                             </button>
                //                             <span></span>
                //                             <button className='minus'>
                //                                 <AiOutlineMinus />
                //                             </button>
                //                         </div>
                //                     </div>
                //                     <div className="col-2 content">
                //                         <h5>Total</h5>
                //                     </div>
                //                 </div>
                //             </div>
                //         ))}
                //         <div className="uptadeTotal">
                //             <button >Uptade</button>
                //         </div>
                //     </div>
                // </div>
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
                        <tbody>
                            <tr key={product._id}>
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
                                        <AiOutlinePlus />
                                    </button>
                                    <span>0</span>
                                    <button className='minus'>
                                        <AiOutlineMinus />
                                    </button>
                                    </div>
                                </td>
                                <td data-aria-label='Subtotal'>
                                    <h5>Subtotal</h5>
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
