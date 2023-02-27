import React from 'react'
import { Helmet } from 'react-helmet'
import AllEvents from '../../../Components/Client/Events/AllEvents/AllEvents'
import Feautured from '../../../Components/Client/Events/Feautured/Feautured'
import ContuctHome1 from '../../../Components/Client/Home/ContuctHome1/ContuctHome1'
import Newsletter from '../../../Components/Client/Home/NewsLetter/NewsLetter'


const Events = () => {
  return (
    <div>
       <Helmet>
                <title>Events</title>
            </Helmet>
      <Feautured />
      <AllEvents />
      <Newsletter />
      <ContuctHome1 />
    </div>
  )
}

export default Events
