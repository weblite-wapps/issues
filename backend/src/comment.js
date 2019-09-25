// modules
const { get, post } = require('axios').create({
  baseURL: 'http://localhost:3003'
})

exports.addNewComment = ({ comment, writerId, wisId, issueId }) =>
  post('createComment', {
    contextId: issueId,
    body: comment,
    writerId,
    wisId
  })

exports.getComments = issueId =>
  get('contextComments', {
    params: {
      contextId: issueId
    }
  })
