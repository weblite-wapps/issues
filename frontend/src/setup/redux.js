// modules
import { createStore, combineReducers, compose } from 'redux'
// reducers
// import reducers from './reducers'
const reducers = {}

/* eslint-disable no-underscore-dangle */
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ name: 'issues' })
    : compose
/* eslint-enable */

const store = createStore(combineReducers(reducers))

export default store
export const { dispatch, getState } = store
