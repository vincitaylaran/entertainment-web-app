import React from 'react'
import { useSelector } from 'react-redux'
import './Catalogue.css'

import SearchInput from '../../common/components/SearchInput'
import CatalogueItems from '../../common/components/CatalogueItems'

const selectCatalogue = (store) => store.catalogue

function Catalogue() {
  const catalogue = useSelector(selectCatalogue)

  return (
    <div className='Catalogue'>
      <SearchInput className='Catalogue-search-input' />
      <CatalogueItems isTrending catalogue={catalogue} />
      <CatalogueItems catalogue={catalogue} />
    </div>
  )
}

export default Catalogue
