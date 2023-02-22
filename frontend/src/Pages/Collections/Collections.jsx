import React from 'react'
import CollectionCard from '../../Components/Collections/CollectionCard/CollectionCard'
import CollectionHead from '../../Components/Collections/CollectionHead/CollectionHead'
import CollectionHero from '../../Components/Collections/CollectionHero/CollectionHero'

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
