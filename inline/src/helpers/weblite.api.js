// actions
import { dispatchSetUserData } from '../logic/user/user.actions'
// requests
import { reqGetIssue } from '../logic/issue/issue.request'
// W
const { W } = window

export default () => {
  if (W)
    W.setHooks({
      wappWillStart(start) {
        start()
        W.loadData().then(
          ({ user: { id: userId }, customize: { issueId } }) => {
            console.log('inline issueId ', issueId)
            reqGetIssue(issueId)
            dispatchSetUserData({ userId, wisId: W.wisId })
          },
        )
      },
    })
  else {
    dispatchSetUserData({
      userId: '123',
      wisId: 'wis123',
    })
    reqGetIssue('5db477a400f0c37b866c6911')
  }
}
