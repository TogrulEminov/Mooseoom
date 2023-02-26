import React from 'react'
import CollectionCard from '../../../Components/Client/Collections/CollectionCard/CollectionCard'
import CollectionHead from '../../../Components/Client/Collections/CollectionHead/CollectionHead'
import CollectionHero from '../../../Components/Client/Collections/CollectionHero/CollectionHero'

const Collections = () => {
  return (
    <div>
      <CollectionHero />
      <CollectionHead />
      <CollectionCard />
    </div>
  )
}

export default Collections
