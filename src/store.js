import { createStore } from 'redux'
import rootReducer from './reducer'
import catalogue from './data.json'

const store = createStore(rootReducer, { bookmarks: [], catalogue })

export default store
