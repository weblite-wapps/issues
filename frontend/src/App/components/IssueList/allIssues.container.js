// modules
import { connect } from 'react-redux'
// components
import IssueList from './issueList'
// actions
// views
import { issuesView } from '../../../logic/issues/issues.reducer'

const mapStateToProps = () => ({
  issues: issuesView(),
})

export default connect(mapStateToProps)(IssueList)
