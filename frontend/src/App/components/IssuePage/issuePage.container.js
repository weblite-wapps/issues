// modules
import { connect } from 'react-redux'
// components
import IssuePage from './issuePage'
// views
import { userIdView, adminIdView } from '../../../logic/user/user.reducer'
// requests
import {
  reqCloseIssue,
  reqDeleteIssue,
} from '../../../logic/issues/issues.request'
// redux
import { getState } from '../../../setup/redux'

const mapStateToProps = state => {
  const { title, body, date, creatorId, issueId, isClosed, sendFieldHeight } =
    state.view.issuePage || {}
  return {
    title,
    body,
    date,
    issueId,
    isClosed,
    sendFieldHeight,
    comments: state.main.comments,
    canClose: userIdView() === adminIdView() || isClosed,
    canDelete: userIdView() === adminIdView() || userIdView() === creatorId,
  }
}

const mapDispatchToProps = () => ({
  onCloseIssue: () => {
    const { issueId } = getState().view.issuePage || {}
    reqCloseIssue(issueId)
  },
  onDeleteIssue: () => {
    const { issueId } = getState().view.issuePage || {}
    reqDeleteIssue(issueId)
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(IssuePage)
