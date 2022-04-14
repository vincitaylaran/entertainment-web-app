import React from 'react'
import { ReactComponent as BookmarkEmptyIcon } from '../../assets/icon-bookmark-empty.svg'
import { ReactComponent as BookmarkFullIcon } from '../../assets/icon-bookmark-full.svg'
import './Bookmark.css'

function Bookmark({ isActive }) {
  return (
    <div className='Bookmark'>
      {isActive ? (
        <BookmarkFullIcon className='Bookmark-icon' />
      ) : (
        <BookmarkEmptyIcon className='Bookmark-icon' />
      )}
    </div>
  )
}

export default Bookmark
