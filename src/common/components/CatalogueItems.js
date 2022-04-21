import React from 'react'
import './CatalogueItems.css'
import CatalogueItem from './CatalogueItem'
import { v4 as uuid } from 'uuid'

const generateCatalogue = (catalogue, isTrending) => {
  if (isTrending) {
    return catalogue.filter((item) => item.isTrending)
  }

  return catalogue.filter((item) => !item.isTrending)
}

/**
 *
 * @param {*} props: { catalogue: array, isTrending: boolean }
 * @returns
 */
function CatalogueItems({ catalogue, isTrending }) {
  const filteredCatalogue = generateCatalogue(catalogue, isTrending)

  return (
    <div className={`CatalogueItems${isTrending ? '--trending' : ''}`}>
      <h1 className='CatalogueItems-section-name'>Recommended for you</h1>
      <div className={`CatalogueItems-grid${isTrending ? '--trending' : ''}`}>
        {filteredCatalogue.map((item) => (
          <CatalogueItem item={item} key={uuid()} />
        ))}
      </div>
    </div>
  )
}

export default CatalogueItems
