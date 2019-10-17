// actions
import {
  dispatchAddNewIssue,
  dispatchDeleteIssue,
  dispatchUpdateIssue,
  dispatchSetIssues,
} from './issues.action'
import { dispatchResetNewIssue } from '../../App/components/NewIssue/newIssue.actions'
import {
  dispatchResetIssuePage,
  dispatchSetIssuePageData,
} from '../../App/components/IssuePage/issuePage.actions'
import { dispatchSetComments } from '../comments/comments.actions'
import { dispatchSetSnackbarMessage } from '../../App/components/snackbar/snackbar.actions'
// views
import {
  userIdView,
  wisIdView,
  isAdminView,
  adminIdView,
} from '../user/user.reducer'
// setup
import { get, post } from '../../setup/request'
import errorCodes from '../../setup/errorCodes'
// helpers
import { navigate } from '../../setup/history'

const { W } = window
export const reqCreateIssue = ({ title, body, isPublic }) =>
  post('createIssue', {
    title,
    body,
    isPublic,
    wisId: wisIdView(),
    creatorId: userIdView(),
  })
    .then(({ data: { issue } }) => {
      dispatchAddNewIssue(issue)
      dispatchResetNewIssue()
      navigate('all')
      dispatchSetSnackbarMessage({
        message: 'سوال با موفقیت ثبت شد',
        type: 'success',
      })
      !isAdminView() &&
        W &&
        W.sendNotificationToUsers(
          'سوالی از شما مطرح شده است',
          'وپ سوال',
          ['push', 'weblite'],
          {},
          [adminIdView()],
        )
      W && W.analytics('ADD_ISSUE', { private: !isPublic })
    })
    .catch(console.log)

export const reqCloseIssue = issueId =>
  post('closeIssue', {
    issueId,
  })
    .then(() => {
      dispatchUpdateIssue(issueId, { isClosed: true })
      dispatchSetIssuePageData({ isClosed: true })
      dispatchSetSnackbarMessage({
        message: 'سوال با موفقیت بسته شد',
        type: 'success',
      })
      W && W.analytics('CLOSE_ISSUE')
    })
    .catch(({ response: { data: { errorCode } } }) => {
      // TODO:
      dispatchSetSnackbarMessage({
        message: errorCode ? errorCodes[errorCode] : '',
        type: 'error',
      })
    })

export const reqDeleteIssue = issueId =>
  post('deleteIssue', {
    issueId,
  })
    .then(() => {
      dispatchDeleteIssue(issueId)
      navigate('all')
      dispatchSetComments([])
      dispatchResetIssuePage()
      dispatchSetSnackbarMessage({
        message: 'سوال با موفقیت حذف شد',
        type: 'success',
      })
      W && W.analytics('DELETE_ISSUE')
    })
    .catch(console.log)

export const reqGetAllIssues = () =>
  get('getAllIssues', {
    params: {
      wisId: wisIdView(),
    },
  })
    .then(({ data: { issues } }) => dispatchSetIssues(issues))
    .catch(console.log)
