import React, { useContext } from 'react'
import { mainContext } from '../../../../Context/Context'
import { AiFillEdit, AiOutlineDelete } from "react-icons/ai"
import "./_ShopTable.scss"
const ShopTable = () => {
    const { data, search, searchData, delShopData,handleEditClick } = useContext(mainContext)
    return (
        <div className='shopTable'>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-12 col-md-12 col-s-12 col-xs-12 inputSearch">
                        <form action="">
                            <input type="text" onChange={searchData}
                                value={search} placeholder='Type here ...' />
                            <button>Search</button>
                        </form>
                    </div>
                </div>
                <table>
                    <thead>
                        <th>name</th>
                        <th>description</th>
                        <th>rate</th>
                        <th>price</th>
                        <th>percentage</th>
                        <th>Image</th>
                        <th>Catagory</th>
                        <th>Uptade</th>
                        <th>Delete</th>
                    </thead>
                    <tbody>
                        {data && data
                         .filter((item) => {
                            return search.trim().toUpperCase()===""
                              ? item
                              : item.name.toLowerCase().includes(search.toLowerCase());
                          })
                        .map((e) => (
                            <tr key={e._id}>
                                <td data-aria-label='name'>{e.name}</td>
                                <td data-aria-label='description'><span>{e.description}</span></td>
                                <td data-aria-label='rate'>{e.rate}</td>
                                <td data-aria-label='price'>{e.price}</td>
                                <td data-aria-label='percentage'>{e.percantagePrice}</td>
                                <td data-aria-label='Image'>
                                    <img src={e.imagePath} alt="" />
                                </td>
                                <td data-aria-label='Catagory'>{e.catagory}</td>
                                <td data-aria-label='Uptade'>
                                    <div><AiFillEdit onClick={() => handleEditClick(e)}/></div>
                                </td>
                                <td data-aria-label='Delete'>
                                    <p><AiOutlineDelete onClick={() => delShopData(e._id)} /></p>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ShopTable
