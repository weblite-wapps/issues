// modules
import * as R from 'ramda'
// views
import { userIdView } from '../user/user.reducer'
// actions
// import { ADD_NEW_ISSUE } from './issues.action'
// redux
import { getState } from '../../setup/redux'

const initialState = []

export const issuesView = () => R.path(['main', 'issues'], getState())

// export const issuesView = () =>
//   R.range(1, 15).map(i => ({
//     id: i,
//     title: 'مشکل سرمایش و گرمایش',
//     body:
//       'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه مجله در ستون و سطر آنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد',
//     commentsCount: i,
//     isClosed: false,
//     date: new Date(),
//     creatorId: i % 2 === 0 ? '123' : '456',
//   }))

export const visibleIssuesView = () =>
  R.filter(
    R.either(R.propEq('creatorId', userIdView()), R.prop('isPublic')),
    issuesView(),
  )

export const myIssuesView = () =>
  R.filter(R.propEq('creatorId', userIdView()), issuesView())

const reducers = {
  ADD_NEW_ISSUE: (state, issue) => [issue, ...state],

  DELETE_ISSUE: (state, issueId) => R.reject(R.propEq('_id', issueId), state),

  SET_ISSUES: (_, issues) => issues,

  UPDATE_ISSUE: (state, { id, data }) =>
    R.map(R.when(R.propEq('_id', id), R.mergeDeepLeft(data)), state),
}

export default (state = initialState, { type, payload }) =>
  reducers[type] ? reducers[type](state, payload) : state
