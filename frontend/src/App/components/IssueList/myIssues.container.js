// modules
import { connect } from 'react-redux'
// components
import IssueList from './issueList'
// actions
// views
import { myIssuesView } from '../../../logic/issues/issues.reducer'

const mapStateToProps = () => ({
  issues: myIssuesView(),
})

export default connect(mapStateToProps)(IssueList)
