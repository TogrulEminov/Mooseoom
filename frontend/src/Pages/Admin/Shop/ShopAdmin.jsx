import axios from 'axios';
import React from 'react'
import { Helmet } from 'react-helmet'
import ShopForm from '../../../Components/Admin/ShopAdmin/ShopForm/ShopForm'
import ShopTable from '../../../Components/Admin/ShopAdmin/ShopTable/ShopTable'

const ShopAdmin = () => {
  return (
    <div>
      <Helmet>
                <title>Shop</title>
            </Helmet>
      <ShopForm />
      <ShopTable />
    </div>
  )
}

export default ShopAdmin
