// actions
import { dispatchSetUserData } from '../logic/user/user.actions'
import { dispatchAddUsers } from '../logic/users/users.actions'
// requests
import { reqGetAllIssues } from '../logic/issues/issues.request'
// W
const { W } = window

export default () => {
  if (W)
    W.setHooks({
      wappWillStart(start, err, { args }) {
        start()
        W.loadData().then(({ user: { id }, creator, creatorId: adminId }) => {
          getUsersInfo([id])
          dispatchSetUserData({
            userId: id,
            wisId: W.wisId,
            adminId,
            isAdmin: creator,
          })
          reqGetAllIssues((args && args.issueId) || undefined)
        })
      },
    })
  else {
    dispatchAddUsers({
      '123': {
        firstname: 'محمد',
        lastname: 'قنبری',
      },
      '456': {
        firstname: 'حسین',
        lastname: 'نوروزی',
      },
    })
    dispatchSetUserData({
      userId: '123',
      adminId: '456',
      wisId: 'wiswis',
    })
    reqGetAllIssues()
  }
}

export const getUsersInfo = userIds =>
  W && W.getUsersInfoById(userIds).then(dispatchAddUsers)
