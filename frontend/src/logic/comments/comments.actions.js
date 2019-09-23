// modules
import { createAction } from 'redux-actions'
// setup
import { dispatch } from '../../setup/redux'

export const SET_COMMENTS = 'SET_COMMENTS'
export const dispatchSetComments = (...args) =>
  dispatch(createAction(SET_COMMENTS)(...args))
