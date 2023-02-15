import React, { useContext } from 'react'
import "../_Card.scss"
import { AiFillDelete, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"
import { mainContext } from '../../../../Context/Context'
const CardBody = () => {
    const navigate = useNavigate();
    const { data, cardItems, handleAddProduct, handleRemoveProduct } = useContext(mainContext)


    return (
        <div className='cardBody'>
            <div className="container">
                <div className="row">
                    {cardItems.length === 0 && <h3>No items added</h3>}
                    {cardItems.map((product) => (
                        <table  key={product._id} className='col-12 table'>
                            <thead >
                                <tr>
                                <th></th>
                                <th></th>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Subtotal</th>
                                </tr>
                            </thead>
                            <tbody>
                            
                                    <tr>
                                        <td>
                                            <button><AiFillDelete /></button>
                                        </td>
                                        <td>
                                            <Link>
                                                <img src={product.imagePath} alt="" />
                                            </Link>
                                        </td>
                                        <td>
                                            <h4>
                                                <Link>
                                                    {product.name}
                                                </Link>
                                            </h4>
                                        </td>
                                        <td>

                                            {product.sale ?
                                                <div>
                                                    <span>£{product.price - parseInt((product.price * product.percantagePrice) / 100)}.00</span>
                                                </div> : <div>
                                                    <span>£{product.price}</span>
                                                </div>
                                            }
                                        </td>
                                        <td>
                                            <button onClick={() => handleAddProduct(product)}><AiOutlinePlus /></button>
                                            <button onClick={() => handleRemoveProduct(product)}><AiOutlineMinus /></button>
                                        </td>
                                        <td>
                                        {product.sale ?
                                                <div>
                                                    <span>£{product.quantity}*{product.price - parseInt((product.price * product.percantagePrice) / 100)}.00</span>
                                                </div> : <div>
                                                    <span>£{parseInt(product.quantity*product.price)}.00</span>
                                                </div>
                                            }
                                        </td>
                                    </tr>
                              
                            </tbody>
                        </table>
                   ))}
                </div>
            </div>
        </div>
    )
}

export default CardBody
