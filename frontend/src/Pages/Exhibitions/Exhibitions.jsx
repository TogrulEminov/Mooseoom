import React from 'react'
import ExhebitionCard from '../../Components/Exhebitions/ExhebitionCard/ExhebitionCard.'
import ExhebitionElementor from '../../Components/Exhebitions/ExhebitionElementor/ExhebitionElementor'
import ExhebitionHead from '../../Components/Exhebitions/ExhebitionHead/ExhebitionHead'

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
