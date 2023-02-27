import React from 'react'
import { Helmet } from 'react-helmet'
import GaleryDetail from '../../../Components/Client/GaleryDetail/GaleryDetail'

const GaleryDetails = () => {
  return (
    <div>
       <Helmet>
                <title>Galery details</title>
            </Helmet>
      <GaleryDetail/>
    </div>
  )
}

export default GaleryDetails
