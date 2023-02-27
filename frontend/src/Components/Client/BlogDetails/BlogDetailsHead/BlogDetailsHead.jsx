import React, { useContext } from 'react'
import { mainContext } from '../../../../Context/Context'
import "./_BlogDetailsHead.scss"
const BlogDetailsHead = ({data}) => {
  return (
    <div className='blogHeadDetails'>
      <div className="container">
        <div className="row">
          <div className="col-6 col-lg-6 col-md-6 col-s-6 col-xs-12">
            <div className="content">
              <span>{data.catagories}</span>
              <h1>{data.title}</h1>
              <h4>{data.date}</h4>
            </div>
          </div>
          <div className="col-6 col-lg-6 col-md-6 col-s-6 col-xs-12">
            <div className='content-2'>
              <ul>
                <li>
                  <img src={data.publisherUrl} alt={data.publisher} />
                </li>
                <li>
                  <p>{data.publisher}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogDetailsHead
