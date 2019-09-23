// modules
import { combineReducers } from 'redux'
// reducers
import issuesReducer from '../issues/issues.reducer'
import userReducer from '../user/user.reducer'
import usersReducer from '../users/users.reducer'
import commentsReducer from '../comments/comments.reducer'

export default combineReducers({
  comments: commentsReducer,
  issues: issuesReducer,
  users: usersReducer,
  user: userReducer,
})
