// modules
import { createAction } from 'redux-actions'
// setup
import { dispatch } from '../../setup/redux'

export const ADD_NEW_ISSUE = 'ADD_NEW_ISSUE'
const addNewIssue = createAction(ADD_NEW_ISSUE)
export const dispatchAddNewIssue = (...args) => dispatch(addNewIssue(...args))

export const DELETE_ISSUE = 'DELETE_ISSUE'
const deleteIssue = createAction(DELETE_ISSUE)
export const dispatchDeleteIssue = (...args) => dispatch(deleteIssue(...args))

export const SET_ISSUES = 'SET_ISSUES'
const setIssues = createAction(SET_ISSUES)
export const dispatchSetIssues = (...args) => dispatch(setIssues(...args))

export const UPDATE_ISSUE = 'UPDATE_ISSUE'
const updateIssue = createAction(UPDATE_ISSUE, (id, data) => ({ id, data }))
export const dispatchUpdateIssue = (...args) => dispatch(updateIssue(...args))
