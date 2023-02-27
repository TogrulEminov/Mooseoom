import React, { useContext, useState } from 'react'
import "./_CollectionCard.scss"
import { Link } from "react-router-dom"
import { mainContext } from '../../../../Context/Context'
import {motion,AnimatePresence} from "framer-motion"

const CollectionCard = () => {
    const { blog, blogItems, filterArtItems, setBlogItems } = useContext(mainContext)

    const [visible, setVisible] = useState(3)

    const showMoreItems = () => {
        setVisible((prevValue) => prevValue + 3)
    }
    return (
        <div className='collectionCard'>
            <div className="container">
                <div className="collectionFilter">
                    <div className="row">
                        <ul className='col-12 content'>
                            <li><button onClick={() => setBlogItems(blog)}>Filter</button></li>
                            <li><button onClick={() => filterArtItems("Paintings")}>Paintings</button></li>
                            <li><button onClick={() => filterArtItems("Sculptures")}>Sculptures</button></li>
                            <li><button onClick={() => filterArtItems("Drawings")}>Drawings</button></li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    {blogItems && blogItems
                        .slice(0, visible)
                        .map((blog,e) => (
                            <motion.div key={e} animate={{opacity:1, scale:1}} initial={{opacity:1, scale:0}} exit={{opacity:0,scale:0}}  layout className="col-4  col-lg-4 col-md-6 col-s-12 col-xs-12 collectionAll" >
                            <AnimatePresence>
                                <img src={blog.blogImage} alt="" />
                                <h3><Link to="">{blog.title}</Link></h3>
                                </AnimatePresence>
                            </motion.div>
                        ))}
                </div>
            </div>
            <div className='row'>
                <div className="col-12 loadMore">
                    <button onClick={() => showMoreItems()}>Load more</button>
                </div>
            </div>
        </div>
    )
}

export default CollectionCard
