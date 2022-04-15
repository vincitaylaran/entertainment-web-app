import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { ReactComponent as BookmarkEmptyIcon } from '../../svgs/icon-bookmark-empty.svg'
import { ReactComponent as BookmarkFullIcon } from '../../svgs/icon-bookmark-full.svg'
import './Bookmark.css'

const selectBookmarks = (state) => state.bookmarks

function Bookmark({ className, item }) {
  const [isActive, setIsActive] = useState(false)
  const dispatch = useDispatch()
  const bookmarks = useSelector(selectBookmarks)

  useEffect(() => {
    if (item) {
      setIsActive(isItemBookmarked(item))
    }
  }, [])

  const isItemBookmarked = (item) =>
    bookmarks.some(
      (bookmarked) =>
        bookmarked.title.toLowerCase() === item.title.toLowerCase()
    )

  return (
    <div
      className={`Bookmark ${className || ''}`}
      onClick={() => {
        if (item) {
          if (isItemBookmarked(item)) {
            dispatch({
              type: 'bookmarks/bookmarkRemoved',
              payload: item.title,
            })
          } else {
            dispatch({ type: 'bookmarks/bookmarkAdded', payload: item })
          }
        }
        setIsActive(!isActive)
      }}
    >
      {isActive ? (
        <BookmarkFullIcon className='Bookmark-icon' />
      ) : (
        <BookmarkEmptyIcon className='Bookmark-icon' />
      )}
    </div>
  )
}

export default Bookmark
