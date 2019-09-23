// actions
import { dispatchAddNewIssue } from './issues.action'
import { dispatchResetNewIssue } from '../../App/components/NewIssue/newIssue.actions'
// setup
import { get, post } from '../../setup/request'

export const reqCreateIssue = ({ title, body, isPublic }) =>
  post('createIssue', {
    title,
    body,
    isPublic,
    wisId: null, // TODO: replace
    creatorId: null, // TODO: replace
  })
    .then(({ issue }) => {
      dispatchAddNewIssue(issue)
      dispatchResetNewIssue()
    })
    .catch(console.log)

export const reqCloseIssue = ({ issueId }) =>
  post('closeIssue', {
    issueId,
    userId: null, // TODO: replace
  })
    .then(console.log)
    .catch(console.log)

export const reqGetAllIssues = () =>
  get('getAllIssues', {
    params: {
      wisId: null, // TODO: replace}
    },
  })
    .then(({ issues }) => dispatchSetIssues(issues))
    .catch(console.log)
