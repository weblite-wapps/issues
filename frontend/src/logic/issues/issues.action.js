// modules
import { createAction } from 'redux-actions'
// setup
import { dispatch } from '../../setup/redux'

export const ADD_NEW_ISSUE = 'ADD_NEW_ISSUE'
const addNewIssue = createAction(ADD_NEW_ISSUE)
export const dispatchAddNewIssue = (...args) => dispatch(addNewIssue(...args))

export const SET_ISSUES = 'SET_ISSUES'
const setIssues = createAction(SET_ISSUES)
export const dispatchSetIssues = (...args) => dispatch(setIssues(...args))
