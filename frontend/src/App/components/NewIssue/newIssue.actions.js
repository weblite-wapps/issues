// modules
import { createAction } from 'redux-actions'
// setup
import { dispatch } from '../../../setup/redux'

export const SET_FIELD_VALUE = 'SET_FIELD_VALUE'
export const dispatchSetFieldValue = (...args) =>
  dispatch(createAction(SET_FIELD_VALUE)(...args))

export const RESET_NEW_ISSUE = 'RESET_NEW_ISSUE'
export const dispatchResetNewIssue = (...args) =>
  dispatch(createAction(RESET_NEW_ISSUE)(...args))
