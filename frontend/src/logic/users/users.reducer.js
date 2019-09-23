// modules
import * as R from 'ramda'
// actions
import { ADD_USERS } from './users.actions'

const initialState = {
  '123': {
    firstname: 'محمد',
    lastname: 'قنبری',
  },
  '456': {
    firstname: 'حسین',
    lastname: 'نوروزی',
    profileImage:
      'https://m.media-amazon.com/images/M/MV5BMTkxMzk4MjQ4MF5BMl5BanBnXkFtZTcwMzExODQxOA@@._V1_.jpg',
  },
}

const reducers = {
  [ADD_USERS]: (state, users) => ({ ...state, users }),
}

export default (state = initialState, { type, payload }) =>
  reducers[type] ? reducers[type](state, payload) : state
