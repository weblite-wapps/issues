// // reducers
import userReducer from '../user/user.reducer'
import issueReducer from '../issue/issue.reducer'
import { combineReducers } from 'redux'

// console.log('userReducer ', userReducer)
// console.log('issueReducer ', issueReducer)

export default combineReducers({
  issue: issueReducer,
  user: userReducer,
})
