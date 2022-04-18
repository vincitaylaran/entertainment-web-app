import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './rootReducer'
import { print1, print2, print3 } from '../addons/middleware'

const middlewareEnhancer = applyMiddleware(print1, print2, print3)

// Lets our app use the browser extension, Redux DevTools.
const composedEnhancer = composeWithDevTools()

const store = createStore(rootReducer, composedEnhancer)

export default store
