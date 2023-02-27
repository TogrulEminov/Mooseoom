import React, { useContext } from 'react'
import "./_ShopForm.scss"
import { Link } from "react-router-dom"
import { mainContext } from '../../../../Context/Context';
const ShopForm = () => {
    const { setShopFile, postShopData, shopForm, handleShopChange } = useContext(mainContext)
    return (
        <div className='shopAdmin'>
            <div className="container">
                <div className="row">
                    <div className="col-6 col-lg-6 col-md-10 col-s-12 col-xs-12">
                        <div className="postShopInformation">
                            <Link to="">Go to Shop Api</Link>
                            <form onSubmit={postShopData}>
                                <div className="allInput">
                                    <div className="inputOne">
                                        <input type="text"
                                            name='name'
                                            value={shopForm.name}
                                            onChange={handleShopChange}
                                            placeholder='Product name'

                                        />
                                    </div>
                                    <div className="inputOne">
                                        <input type="text"
                                            placeholder='Porduct catagory'
                                            value={shopForm.catagory}
                                            onChange={handleShopChange}
                                            name='catagory' />
                                    </div>
                                    <div className="inputOne">
                                        <input type="number"
                                            name='rate'
                                            value={shopForm.rate}
                                            min={0}
                                            max={5}
                                            onChange={handleShopChange}
                                            placeholder='enter the rate number'
                                        />
                                    </div>
                                    <div className="inputOne">
                                        <input type="number"
                                            name='price'
                                            min={1}
                                            value={shopForm.price}
                                            onChange={handleShopChange}
                                            placeholder='enter the price'
                                        />
                                    </div>
                                    <div className="inputOne">
                                        <input type="number"
                                            name='percantagePrice'
                                            min={0}
                                            max={100}
                                            value={shopForm.percantagePrice}
                                            onChange={handleShopChange}
                                            placeholder='enter the percantage'
                                        />
                                    </div>
                                    <div className="inputOne">
                                        <label>Click the checkbox</label>
                                        <input type="checkbox"
                                            name='sale'
                                            placeholder='enter the percantage'
                                        />
                                    </div>
                                    <div className="inputOne">
                                        <input type="file"
                                            name='photo'
                                            onChange={(e) => setShopFile(e.target.files[0])}
                                        />
                                    </div>
                                    <div className="inputOne">
                                        <textarea
                                            placeholder='Enter the description'
                                            name='description'
                                            value={shopForm.description}
                                            onChange={handleShopChange}
                                        >
                                        </textarea>

                                    </div>
                                    <div className="inputOne">
                                        <button>Add to Api</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShopForm
