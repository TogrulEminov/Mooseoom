import React, {useEffect, useState } from 'react'
import "./_ShopFilter.scss"
import axios from 'axios';
const ShopFilter = ({sorting,sort}) => {
    const [count, setCount] = useState([]);
   
    const getDataCount = async () => {
        const response = await axios.get("http://localhost:5555/common/datacount")
        setCount(response.data.data);
    };

    useEffect(() => {
        getDataCount();
    }, [])
    return (
        <div className='shopFilter'>
            <div className="row">
                <div className="col-6">
                    <div className="content">
                        <p>
                            Showing
                            {count?.map((e, index) => {
                                return <span key={index}>{e.shopNum}</span>

                            })}
                            result
                        </p>
                    </div>
                </div>
                <div className="col-6">
                    <div className="selectFilter">
                        <select  name={sort.sort}  onChange={sorting} >
                            <option value="all">Default sorting</option>
                            <option value="rate">Sort by avarage rating</option>
                            <option value="high">Sort by price:High to Low </option>
                            <option value="low">Sort by price:Low to High</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShopFilter
