// actions
import { dispatchSetIssue } from './issue.action'
// setup
import { get } from '../../setup/request'

const { W } = window
export const reqGetIssue = issueId => {
  get('getIssue', {
    params: { issueId },
  })
    .then(({ data: { issue } }) => dispatchSetIssue(issue))
    .catch(console.log)
}
