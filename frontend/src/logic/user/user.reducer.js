// modules
import * as R from 'ramda'
// actions
import { SET_USER_DATA } from './user.actions'
// redux
import { getState } from '../../setup/redux'

const initialState = {
  userId: '',
  adminId: '',
  wisId: '',
  isAdmin: false,
}

export const userIdView = () => R.path(['main', 'user', 'userId'], getState())
export const adminIdView = () => R.path(['main', 'user', 'adminId'], getState())
export const wisIdView = () => R.path(['main', 'user', 'wisId'], getState())
export const isAdminView = () => R.path(['main', 'user', 'isAdmin'], getState())

const reducers = {
  [SET_USER_DATA]: (state, data) => ({ ...state, ...data }),
}

export default (state = initialState, { type, payload }) =>
  reducers[type] ? reducers[type](state, payload) : state
