// // reducers
import userReducer from '../user/user.reducer'
import issueReducer from '../issue/issue.reducer'
import { combineReducers } from 'redux'

export default combineReducers({
  issue: issueReducer,
  user: userReducer,
})
