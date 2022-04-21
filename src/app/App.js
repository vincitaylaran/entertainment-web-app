import { useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'

import '../App.css'

import Input from '../common/components/Input'
import SearchInput from '../common/components/SearchInput'
import Button from '../common/components/Button'

import Bookmark from '../features/bookmark/Bookmark'
import Box from '../common/components/Box'
import CatalogueItem from '../common/components/CatalogueItem'
import Nav from '../common/components/Nav'
import Layout from '../common/components/Layout'

import Catalogue from '../features/catalogue/Catalogue'

const selectCatalogue = (state) => state.catalogue

function App() {
  const catalogue = useSelector(selectCatalogue)

  return (
    <div className='App'>
      <Layout>
        <Nav />
        <Catalogue />
      </Layout>
    </div>
  )
}

export default App
