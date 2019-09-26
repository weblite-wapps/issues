// modules
import { connect } from 'react-redux'
// components
import SendField from './sendField'
// actions
import { dispatchSetIssuePageData } from '../../issuePage.actions.js'
// requests
import { reqNewComment } from '../../../../../logic/comments/comments.request'
// redux
import { getState } from '../../../../../setup/redux'
// helpers
import { isPhoneOrTablet } from '../../../../../helpers/device'

const sendComment = () => {
  const { issueId, sendFieldValue } = getState().view.issuePage || {}
  dispatchSetIssuePageData({ sendFieldLoading: true })
  dispatchSetIssuePageData({ sendFieldValue: '' })
  reqNewComment({ comment: sendFieldValue, issueId })
}

const mapStateToProps = state => ({
  value: state.view.issuePage.sendFieldValue,
  loading: state.view.issuePage.sendFieldLoading,
  sendFieldHeight: state.view.issuePage.sendFieldHeight,
})

const mapDispatchToProps = () => ({
  onChange: value => dispatchSetIssuePageData({ sendFieldValue: value }),
  onSend: sendComment,
  onKeyDown: e => {
    if (e.key === 'Enter' && !e.shiftKey && !isPhoneOrTablet) {
      e.preventDefault()
      sendComment()
    }
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SendField)
