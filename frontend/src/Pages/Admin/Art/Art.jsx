import React from 'react'
import ArtAdmin from '../../../Components/Admin/Art/ArtAdmin/ArtAdmin'
import ArtAdminTable from '../../../Components/Admin/Art/ArtAdminTable/ArtAdminTable'
import {Helmet} from "react-helmet";

const Art = () => {
  return (
    <div>
      <Helmet>
                <title>Art</title>
            </Helmet>
      <ArtAdmin />
      <ArtAdminTable />
    </div>
  )
}

export default Art
