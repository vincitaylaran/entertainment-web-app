export default function bookmarksReducer(state = [], action) {
  switch (action.type) {
    case 'bookmarks/bookmarkAdded': {
      return [...state, action.payload]
    }
    case 'bookmarks/bookmarkRemoved': {
      return state.filter((item) => item.title !== action.payload)
    }
    default:
      return state
  }
}
