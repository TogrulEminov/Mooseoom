import React from 'react'
import ExhebitionCard from '../../../Components/Client/Exhebitions/ExhebitionCard/ExhebitionCard.'
import ExhebitionElementor from '../../../Components/Client/Exhebitions/ExhebitionElementor/ExhebitionElementor'
import ExhebitionHead from '../../../Components/Client/Exhebitions/ExhebitionHead/ExhebitionHead'


const Exhibitions = () => {
  return (
    <div className='exhabitionSection'>
      <ExhebitionHead />
      <ExhebitionElementor />
      <ExhebitionCard />
    </div>
  )
}

export default Exhibitions
