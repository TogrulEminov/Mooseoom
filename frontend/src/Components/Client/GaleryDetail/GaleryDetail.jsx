import React from 'react'
import "./_GaleryDetail.scss"
const GaleryDetail = ({art}) => {
  return (
    <div className='galeryDetail'>
      <div className="container">
        <div className="row">
            <div className="col-10 col-lg-10 col-md-10 col-s-10 col-xs-10">
                <div className="content">
                    <h4>{art.workers}</h4>
                    <h1>{art.name}</h1>
                    <p>{art.information}</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default GaleryDetail
