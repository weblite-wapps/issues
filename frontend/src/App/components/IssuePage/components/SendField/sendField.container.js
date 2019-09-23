// modules
import { connect } from 'react-redux'
// components
import SendField from './sendField'
// actions
import { dispatchSetIssuePageData } from '../../issuePage.actions.js'

const mapStateToProps = state => ({
  value: state.view.issuePage.sendFieldValue,
  loading: state.view.issuePage.sendFieldLoading,
})

const mapDispatchToProps = () => ({
  onChange: value => dispatchSetIssuePageData({ sendFieldValue: value }),
  onSend: () => {
    dispatchSetIssuePageData({ sendFieldLoading: true })
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SendField)
