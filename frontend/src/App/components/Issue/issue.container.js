// modules
import { connect } from 'react-redux'
// components
import Issue from './issue'
// actions
import { dispatchSetIssuePageData } from '../IssuePage/issuePage.actions'
// router
import { navigate } from '../../../setup/history.js'

const mapDispatchToProps = (_, { title, body, date }) => ({
  onClick: () => {
    dispatchSetIssuePageData({ title, body, date })
    navigate('issue')
  },
})

export default connect(
  null,
  mapDispatchToProps,
)(Issue)
