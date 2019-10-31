// modules
import * as R from 'ramda'
// redux
import { getState } from '../../setup/redux'
import { SET_ISSUE } from './issue.action'

const initialState = {}

export const issueView = () => R.path([' issue'], getState())
export const issueIdView = () => R.path(['issue', '_id'], getState())

const reducers = {
  [SET_ISSUE]: (_, issue) => issue,
}

export default (state = initialState, { type, payload }) =>
  reducers[type] ? reducers[type](state, payload) : state
