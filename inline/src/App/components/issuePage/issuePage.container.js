// modules
import { connect } from 'react-redux'

// components
import IssuePage from './issuePage'
import { issueView } from '../../../logic/issue/issue.reducer'

// views

const mapStateToProps = () => ({
  // issue: issueView(),
})

export default connect(mapStateToProps)(IssuePage)
