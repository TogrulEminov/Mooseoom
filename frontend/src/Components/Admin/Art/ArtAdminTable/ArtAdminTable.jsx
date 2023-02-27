import React, { useContext } from 'react'
import { mainContext } from '../../../../Context/Context'
import "./_ArtAdminTable.scss"
import { AiFillEdit, AiOutlineDelete } from "react-icons/ai"
import "./_ArtAdminTable.scss"
const ArtAdminTable = () => {
    const { artData,search,searchData,delData } = useContext(mainContext)
    return (
        <div className='artAdminTable'>
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
                        <th>information</th>
                        <th>title</th>
                        <th>workers</th>
                        <th>artPath</th>
                        <th>Uptade</th>
                        <th>Delete</th>
                    </thead>
                    <tbody>
                        {artData && artData
                         .filter((item) => {
                            return search.trim().toUpperCase()===""
                              ? item
                              : item.name.toLowerCase().includes(search.toLowerCase());
                          })
                        .map((e) => (
                            <tr key={e._id}>
                                <td data-aria-label='name'>{e.name}</td>
                                <td data-aria-label='information'><span>{e.information}</span></td>
                                <td data-aria-label='title'>{e.title}</td>
                                <td data-aria-label='workers'>{e.workers}</td>
                                <td data-aria-label='artPath'>
                                    <img src={e.artPath} alt="" />
                                </td>
                                <td data-aria-label='Uptade'>
                                    <div><AiFillEdit /></div>
                                </td>
                                <td data-aria-label='Delete'>
                                    <p><AiOutlineDelete  onClick={()=>delData(e._id)} /></p>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ArtAdminTable
