// actions
import { dispatchSetIssue } from './issue.action'
// setup
import { get } from '../../setup/request'

export const reqGetIssue = issueId => {
  get('getIssue', {
    params: { issueId },
  })
    .then(({ data: { issue } }) => dispatchSetIssue(issue))
    .catch(console.log)
}
