import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const bookmarksSlice = createSlice({
  name: 'bookmarks',
  initialState,

  // TODO: each catalogue item has an "isBookmarked" property.
  // Please make use of that property when writing the reducers.
  reducers: {
    bookmarkAdded(state, action) {
      state.push(action.payload)
    },
    bookmarkRemoved(state, action) {
      return state.filter((item) => item.title !== action.payload)
    },
  },
})

export const { bookmarkAdded, bookmarkRemoved } = bookmarksSlice.actions

export default bookmarksSlice.reducer
