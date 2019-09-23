// modules
import { connect } from 'react-redux'
// components
import IssuePage from './issuePage'
// views
import { issueByIdView } from '../../../logic/issues/issues.reducer'

const date = new Date()

const mapStateToProps = (state, { id }) => {
  const { title, body, date } = state.view.issuePage || {}
  return {
    title,
    body,
    date,
    comments: state.main.comments,
  }
}

export default connect(mapStateToProps)(IssuePage)
