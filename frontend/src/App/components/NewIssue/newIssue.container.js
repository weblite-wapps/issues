// modules
import { connect } from 'react-redux'
// components
import NewIssue from './newIssue'
// actions
import { dispatchSetFieldValue } from './newIssue.actions'

const mapStateToProps = state => state.view.newIssue

const mapDispatchToProps = () => ({
  onChange: (field, value) => dispatchSetFieldValue({ field, value }),
  onSubmit: () => {
    console.log('submit')
    dispatchSetFieldValue({ field: 'loading', value: true })
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewIssue)
