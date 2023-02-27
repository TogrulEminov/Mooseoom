import React from 'react'
import { Helmet } from 'react-helmet'
import OurGalleryBody from '../../../Components/Client/OurGallery/OurGalleryBody/OurGalleryBody'
import OurGalleryHead from '../../../Components/Client/OurGallery/OurGalleryHead/OurGalleryHead'

const OurGalerry = () => {
  return (
    <div>
       <Helmet>
                <title>Gallery</title>
            </Helmet>
      <OurGalleryHead />
      <OurGalleryBody />
    </div>
  )
}

export default OurGalerry
