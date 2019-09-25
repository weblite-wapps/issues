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

const mapStateToProps = state => ({
  value: state.view.issuePage.sendFieldValue,
  loading: state.view.issuePage.sendFieldLoading,
})

const mapDispatchToProps = () => ({
  onChange: value => dispatchSetIssuePageData({ sendFieldValue: value }),
  onSend: () => {
    const { issueId, sendFieldValue } = getState().view.issuePage || {}
    dispatchSetIssuePageData({ sendFieldLoading: true })
    dispatchSetIssuePageData({ sendFieldValue: '' })
    reqNewComment({ comment: sendFieldValue, issueId })
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SendField)
