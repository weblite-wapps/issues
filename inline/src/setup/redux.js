// modules
import { createStore, combineReducers, compose } from 'redux'
// reducers
import reducers from '../logic/main/main.reducer'

/* eslint-disable no-underscore-dangle */
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ name: 'issue' })
    : compose
/* eslint-enable */

const store = createStore(combineReducers(reducers), composeEnhancers())

export default store
export const { dispatch, getState } = store
