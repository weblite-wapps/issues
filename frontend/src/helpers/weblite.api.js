// W
const { W } = window
// actions
import { dispatchSetUserData } from '../logic/user/user.actions'
import { dispatchAddUsers } from '../logic/users/users.actions'

export default () => {
  W.setHooks({
    wappWillStart(start, error) {
      start()

      W.loadData().then(({ user: { id }, creatorId: adminId }) => {
        getUsersInfo([id])
        dispatchSetUserData({
          userId: id,
          wisId: W.wisId,
          adminId,
        })
      })
    },
  })
}

export const getUsersInfo = userIds =>
  W.getUsersInfoById(userIds).then(dispatchAddUsers)
