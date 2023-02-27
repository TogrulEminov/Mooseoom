import React from 'react'
import { Helmet } from 'react-helmet'
import ExhebitionCard from '../../../Components/Client/Exhebitions/ExhebitionCard/ExhebitionCard.'
import ExhebitionElementor from '../../../Components/Client/Exhebitions/ExhebitionElementor/ExhebitionElementor'
import ExhebitionHead from '../../../Components/Client/Exhebitions/ExhebitionHead/ExhebitionHead'


const Exhibitions = () => {
  return (
    <div className='exhabitionSection'>
       <Helmet>
                <title>Exhebitions</title>
            </Helmet>
      <ExhebitionHead />
      <ExhebitionElementor />
      <ExhebitionCard />
    </div>
  )
}

export default Exhibitions
