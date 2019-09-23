// modules
import { combineReducers } from 'redux'
// reducers
import newIssueReducer from '../components/NewIssue/newIssue.reducer'
import issuePageReducer from '../components/IssuePage/issuePage.reducer'

export default combineReducers({
  newIssue: newIssueReducer,
  issuePage: issuePageReducer,
})
