import React from 'react'
import AllEvents from '../../Components/Events/AllEvents/AllEvents'
import Feautured from '../../Components/Events/Feautured/Feautured'
import ContuctHome1 from '../../Components/Home1/ContuctHome1/ContuctHome1'
import Newsletter from '../../Components/Home1/NewsLetter/NewsLetter'

const Events = () => {
  return (
    <div>
      <Feautured />
      <AllEvents />
      <Newsletter />
      <ContuctHome1 />
    </div>
  )
}

export default Events
