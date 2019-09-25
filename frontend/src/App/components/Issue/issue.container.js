// modules
import { connect } from 'react-redux'
// components
import Issue from './issue'
// actions
import { dispatchSetIssuePageData } from '../IssuePage/issuePage.actions'
import { dispatchSetComments } from '../../../logic/comments/comments.actions'
// router
import { navigate } from '../../../setup/history.js'
// requests
import { reqGetComments } from '../../../logic/comments/comments.request'

const mapDispatchToProps = (_, props) => ({
  onClick: () => {
    dispatchSetIssuePageData({ ...props, issueId: props._id })
    dispatchSetComments([])
    reqGetComments(props._id)
    navigate('issue')
  },
})

export default connect(
  null,
  mapDispatchToProps,
)(Issue)
