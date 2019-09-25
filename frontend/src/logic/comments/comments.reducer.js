// modules
import * as R from 'ramda'
// actions
import { SET_COMMENTS } from './comments.actions'

const initialState = []
// [
//   {
//     text:
//       'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
//     writerId: '123',
//     date: new Date(),
//   },
//   {
//     text:
//       'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
//     writerId: '456',
//     date: new Date(),
//   },
//   {
//     text:
//       'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
//     writerId: '123',
//     date: new Date(),
//   },
//   {
//     text:
//       'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
//     writerId: '456',
//     date: new Date(),
//   },
//   {
//     text:
//       'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
//     writerId: '123',
//     date: new Date(),
//   },
//   {
//     text:
//       'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
//     writerId: '456',
//     date: new Date(),
//   },
// ]

const reducers = {
  [SET_COMMENTS]: (_, comments) => comments,
}

export default (state = initialState, { type, payload }) =>
  reducers[type] ? reducers[type](state, payload) : state
