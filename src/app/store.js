import { createStore, compose, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './rootReducer'
import catalogue from '../data.json'
import { enhancedDispatch, enhancedGetState } from '../addons/enhancers'
import { print1, print2, print3 } from '../addons/middleware'

const preloadedState = {
  // Sets initial state for bookmarks to be an empty array.
  bookmarks: [],

  // Sets initial state for catalogue to be the sample data provided
  // by FE Mentor.
  catalogue,
}

// Merges all of our enhancers into 1 mega-enhancer.
// const composedEnhancer = compose(enhancedDispatch, enhancedGetState)

const middlewareEnhancer = applyMiddleware(print1, print2, print3)
const composedEnhancer = composeWithDevTools()

const store = createStore(rootReducer, preloadedState, composedEnhancer)

export default store
