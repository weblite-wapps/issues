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
import * as R from 'ramda'

const mapStateToProps = state => {
  const { title, body, date, creatorId, issueId, isClosed, sendFieldHeight } =
    state.view.issuePage || {}

  const creatorUser = state.main.users[creatorId || '']
  const profileImage = R.prop('profileImage', creatorUser)

  return {
    title,
    body,
    date,
    firstname: R.prop('firstname', creatorUser),
    lastname: R.prop('lastname', creatorUser),
    profileImage: profileImage
      ? `https://www.weblite.me:3000/image/${R.prop(
          'profileImage',
          creatorUser,
        )}`
      : '',
    issueId,
    isClosed,
    sendFieldHeight,
    comments: state.main.comments,
    canClose:
      userIdView() === adminIdView() || userIdView() === creatorId || isClosed,
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
