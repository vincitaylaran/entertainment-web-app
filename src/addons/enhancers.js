import store from '../store'

export const enhancedDispatch = (createStore) => {
  return (rootReducer, preloadedState, enhancers) => {
    const store = createStore(rootReducer, preloadedState, enhancers)

    return {
      ...store,
      dispatch(action) {
        const result = store.dispatch(action)
        console.log('Do stuff while dispatching...')
        return result
      },
    }
  }
}

export const enhancedGetState = (createStore) => {
  return (rootReducer, preloadedState, enhancers) => {
    const store = createStore(rootReducer, preloadedState, enhancers)

    return {
      ...store,
      getState() {
        return { ...store.getState() }
      },
    }
  }
}
