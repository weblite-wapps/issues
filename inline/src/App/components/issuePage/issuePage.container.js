// modules
import { connect } from 'react-redux'
// components
import IssuePage from './issuePage'

// W
const W = window.W

const mapStateToProps = state => ({
  issue: state.issue,
  userId: state.user.userId,
})

const mapDispatchToProps = () => ({
  onShowIssue: () =>
    W && W.runWapp('main', '5d8b97e38f1caa56a175a827', undefined),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(IssuePage)
