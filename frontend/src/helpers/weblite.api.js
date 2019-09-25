// actions
import { dispatchSetUserData } from '../logic/user/user.actions'
import { dispatchAddUsers } from '../logic/users/users.actions'
// requests
import { reqGetAllIssues } from '../logic/issues/issues.request'
// W
const { W } = window

export default () => {
  W.setHooks({
    wappWillStart(start) {
      start()
      W.loadData().then(({ user: { id }, creatorId: adminId }) => {
        getUsersInfo([id])
        dispatchSetUserData({
          userId: id,
          wisId: W.wisId,
          adminId,
        })
        reqGetAllIssues()
      })
    },
  })
}

export const getUsersInfo = userIds =>
  W.getUsersInfoById(userIds).then(dispatchAddUsers)
