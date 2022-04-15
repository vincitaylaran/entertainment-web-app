import { useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'

import '../App.css'

import Input from '../common/components/Input'
import SearchInput from '../common/components/SearchInput'
import Button from '../common/components/Button'

import Bookmark from '../features/bookmark/Bookmark'
import Box from '../common/components/Box'
import CatalogueItem from '../common/components/CatalogueItem'

const selectCatalogue = (state) => state.catalogue

function App() {
  const catalogue = useSelector(selectCatalogue)

  return (
    <div className='App'>
      <Input placeholder='Email address' />
      <SearchInput />
      <Button text='Login to your account' />
      <Bookmark />
      <Box>Hello</Box>
      {catalogue.map((item) => (
        <CatalogueItem item={item} key={uuidv4()} />
      ))}
    </div>
  )
}

export default App
