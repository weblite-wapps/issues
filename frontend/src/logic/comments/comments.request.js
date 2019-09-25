// setup
import { post, get } from '../../setup/request'
import errorCodes from '../../setup/errorCodes'
// views
import { userIdView, wisIdView } from '../user/user.reducer'
// actions
import { dispatchSetComments } from './comments.actions'
import {
  dispatchUpdateIssue,
  dispatchDeleteIssue,
} from '../issues/issues.action'
import { dispatchSetIssuePageData } from '../../App/components/IssuePage/issuePage.actions'
import { dispatchSetSnackbarMessage } from '../../App/components/snackbar/snackbar.actions'
import { navigate } from '../../setup/history'

export const reqNewComment = ({ comment, issueId }) =>
  post('newComment', {
    comment,
    issueId,
    writerId: userIdView(),
    wisId: wisIdView(),
  })
    .then(({ data: { commentsCount, issueId } }) => {
      dispatchUpdateIssue(issueId, { commentsCount })
      reqGetComments(issueId)
      dispatchSetSnackbarMessage({
        message: 'پاسخ شما با موفقیت ثبت شد',
        type: 'success',
      })
    })
    .catch(({ response: { data: { errorCode } } }) => {
      dispatchSetSnackbarMessage({
        message: errorCode ? errorCodes[errorCode] : '',
        type: 'error',
      })
      dispatchSetIssuePageData({ sendFieldLoading: false })
      if (errorCode === 1) {
        dispatchDeleteIssue(issueId)
        navigate('all')
      } else if (errorCode === 2) {
        dispatchSetIssuePageData({ isClosed: true })
        dispatchUpdateIssue(issueId, { isClosed: true })
      }
    })

export const reqGetComments = issueId =>
  get('getComments', { params: { issueId } })
    .then(({ data: { comments } }) => {
      dispatchSetComments(comments)
      dispatchSetIssuePageData({ sendFieldLoading: false })
    })
    .catch(console.log)
