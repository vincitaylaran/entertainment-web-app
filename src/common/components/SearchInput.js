import React from 'react'
import Input from './Input'
import './SearchInput.css'
import { ReactComponent as SearchIcon } from '../../svgs/icon-search.svg'

function SearchInput({ className }) {
  return (
    <div className={`SearchInput ${className || ''}`}>
      <SearchIcon className='SearchInput-icon' />
      <Input
        className='SearchInput-field'
        placeholder='Search for movies or TV series'
      />
    </div>
  )
}

export default SearchInput
