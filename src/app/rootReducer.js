import { combineReducers } from 'redux'

import bookmarksReducer from '../features/bookmark/bookmarkSlice'
import catalogueReducer from '../features/catalogue/catalogueSlice'

const rootReducer = combineReducers({
  bookmarks: bookmarksReducer,
  catalogue: catalogueReducer,
})

export default rootReducer
