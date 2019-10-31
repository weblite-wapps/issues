// modules
import { connect } from 'react-redux'
// components
import IssuePage from './issuePage'
import { getState } from '../../../setup/redux'
import { issueIdView } from '../../../logic/issue/issue.reducer'

// W
const W = window.W

const mapStateToProps = state => ({
  issue: state.issue,
  userId: state.user.userId,
})

const mapDispatchToProps = () => ({
  onShowIssue: () => {
    W &&
      W.runWapp(
        'main',
        '5d8b97e38f1caa56a175a827',
        getState().user.senderWisId,
        { issueId: issueIdView() },
      )
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(IssuePage)
