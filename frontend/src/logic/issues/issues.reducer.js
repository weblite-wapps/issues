// modules
import * as R from 'ramda'
// views
import { userIdView } from '../user/user.reducer'
// actions
import { ADD_NEW_ISSUE } from './issues.action'

const initialState = []

export const issuesView = () =>
  R.range(1, 7).map(i => ({
    id: i,
    title: 'مشکل سرمایش و گرمایش',
    body:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه مجله در ستون و سطر آنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد',
    commentsCount: i,
    status: i % 2 === 0 ? 'closed' : 'open',
    creatorId: i % 2 === 0 ? '123' : '456',
  }))

export const myIssuesView = () =>
  R.filter(R.propEq('creatorId', userIdView()), issuesView())

const reducers = {
  ADD_NEW_ISSUE: (state, issue) => [issue, ...state],
}

export default (state = initialState, { type, payload }) =>
  reducers[type] ? reducers[type](state, payload) : state
