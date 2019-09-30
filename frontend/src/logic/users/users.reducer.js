// actions
import { ADD_USERS } from './users.actions'

const initialState = {}

// const initialState = {
//   '123': {
//     firstname: 'محمد',
//     lastname: 'قنبری',
//   },
//   '456': {
//     firstname: 'حسین',
//     lastname: 'نوروزی',
//   }
// }

const reducers = {
  [ADD_USERS]: (state, users) => ({ ...state, ...users }),
}

export default (state = initialState, { type, payload }) =>
  reducers[type] ? reducers[type](state, payload) : state
