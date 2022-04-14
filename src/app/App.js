import '../App.css'

import Input from '../common/components/Input'
import SearchInput from '../common/components/SearchInput'
import Button from '../common/components/Button'

import Bookmark from '../features/bookmark/Bookmark'

function App() {
  return (
    <div className='App'>
      <Input placeholder='Email address' />
      <SearchInput />
      <Button text='Login to your account' />
      <Bookmark />
    </div>
  )
}

export default App
