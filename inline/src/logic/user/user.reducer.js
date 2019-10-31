// modules
import * as R from 'ramda'
// actions
import { SET_USER_DATA } from './user.actions'
// redux
import { getState } from '../../setup/redux'

const initialState = {
  userId: '',
  wisId: '',
  senderWisId: '',
}

export const userIdView = () => R.path(['user', 'userId'], getState())
export const wisIdView = () => R.path(['user', 'wisId'], getState())
export const senderWisIdView = () => R.path(['user', 'senderWisId'], getState())

const reducers = {
  [SET_USER_DATA]: (state, data) => ({ ...state, ...data }),
}

export default (state = initialState, { type, payload }) =>
  reducers[type] ? reducers[type](state, payload) : state
