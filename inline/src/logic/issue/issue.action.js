// modules
import { createAction } from 'redux-actions'
// setup
import { dispatch } from '../../setup/redux'

export const SET_ISSUE = 'SET_ISSUE'
const setIssue = createAction(SET_ISSUE)
export const dispatchSetIssue = (...args) => dispatch(setIssue(...args))
