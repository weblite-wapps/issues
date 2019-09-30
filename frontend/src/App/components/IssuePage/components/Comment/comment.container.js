// modules
import * as R from 'ramda'
import { connect } from 'react-redux'
// components
import Comment from './comment'
// views
import { adminIdView } from '../../../../../logic/user/user.reducer'

const mapStateToProps = (state, { writerId }) => {
  const user = state.main.users[writerId]
  const profileImage = R.prop('profileImage', user)
  return {
    firstname: R.prop('firstname', user),
    lastname: R.prop('lastname', user),
    profileImage: profileImage
      ? `https://www.weblite.me:3000/image/${R.prop('profileImage', user)}`
      : '',
    fromAdmin: writerId === adminIdView(),
  }
}

export default connect(mapStateToProps)(Comment)
