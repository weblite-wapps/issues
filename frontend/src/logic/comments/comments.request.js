// modules
import { server } from '../../setup/config'
// setup
import { post } from '../../setup/request'

export const reqNewComment = ({ comment, issueId }) =>
  post('createIssue', {
    comment,
    issueId,
    wisId: null, // TODO: replace
    creatorId: null, // TODO: replace
  })
    .then(console.log)
    .catch(console.log)
