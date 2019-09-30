// modules
import * as R from 'ramda'
import { connect } from 'react-redux'
// components
import NewIssue from './newIssue'
// actions
import { dispatchSetFieldValue } from './newIssue.actions'
import { dispatchSetSnackbarMessage } from '../snackbar/snackbar.actions'
// requests
import { reqCreateIssue } from '../../../logic/issues/issues.request'

const mapStateToProps = state => state.view.newIssue

const mapDispatchToProps = () => ({
  onChange: (field, value) => dispatchSetFieldValue({ field, value }),
  onSubmit: data => {
    if (!(R.trim(data.title) && R.trim(data.body))) {
      dispatchSetSnackbarMessage({
        message: 'عنوان و متن سوال نباید خالی باشند',
        type: 'error',
      })
      return
    }

    dispatchSetFieldValue({ field: 'loading', value: true })
    reqCreateIssue(data)
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewIssue)
