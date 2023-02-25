import React from 'react'
import "./_BlogDetailsHead.scss"
const BlogDetailsHead = () => {
  return (
    <div className='blogHeadDetails'>
      <div className="container">
        <div className="row">
            <div className="col-6 col-lg-6 col-md-6 col-s-6 col-xs-12">
                <div className="content">
                    <span>salam</span>
                    <h1>The Dancers</h1>
                    <h4>Nov 21</h4>
                </div>
            </div>
            <div className="col-6 col-lg-6 col-md-6 col-s-6 col-xs-12">
                <div  className='content-2'>
                <ul>
                    <li>
                        <img src="https://mooseoom.foxthemes.me/wp-content/uploads/2019/11/member-1-150x150-1-60x60.jpg" alt="" />
                    </li>
                    <li>
                        <p>Lola Rossan</p>
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
