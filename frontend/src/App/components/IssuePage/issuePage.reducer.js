// modules
import * as R from 'ramda'
// actions
// import { SET_ISSUE_PAGE_DATA } from './issuePage.actions'

const initialState = {
  title: '',
  body: '',
  date: 0,
  issueId: '',
  isClosed: false,
  sendFieldLoading: false,
  sendFieldValue: '',
}

const reducers = {
  SET_ISSUE_PAGE_DATA: (state, data) => ({
    ...state,
    ...data,
  }),
}

export default (state = initialState, { type, payload }) =>
  reducers[type] ? reducers[type](state, payload) : state
