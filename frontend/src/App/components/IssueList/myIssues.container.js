// modules
import * as R from 'ramda'
import { connect } from 'react-redux'
// components
import IssueList from './issueList'
// views
import { myIssuesView } from '../../../logic/issues/issues.reducer'

const mapStateToProps = () => ({
  issues: R.compose(
    R.reverse,
    R.sortBy(R.prop('date')),
  )(myIssuesView()),
})

export default connect(mapStateToProps)(IssueList)
