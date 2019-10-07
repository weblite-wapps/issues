// modules
import * as R from 'ramda'
// views
import { userIdView, adminIdView } from '../user/user.reducer'
// redux
import { getState } from '../../setup/redux'

const initialState = []

export const issuesView = () => R.path(['main', 'issues'], getState())

export const visibleIssuesView = () =>
  R.filter(
    issue =>
      userIdView() === adminIdView() ||
      R.propEq('creatorId', userIdView(), issue) ||
      R.prop('isPublic', issue),
    issuesView(),
  )

export const myIssuesView = () =>
  R.filter(R.propEq('creatorId', userIdView()), issuesView())

const reducers = {
  ADD_NEW_ISSUE: (state, issue) => [issue, ...state],

  DELETE_ISSUE: (state, issueId) => R.reject(R.propEq('_id', issueId), state),

  SET_ISSUES: (_, issues) => issues,

  UPDATE_ISSUE: (state, { id, data }) =>
    R.map(R.when(R.propEq('_id', id), R.mergeDeepLeft(data)), state),
}

export default (state = initialState, { type, payload }) =>
  reducers[type] ? reducers[type](state, payload) : state
