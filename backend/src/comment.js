// modules
const { get, post } = require('axios').create({
  baseURL: 'https://wapp.weblite.me/srv-comment'
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
