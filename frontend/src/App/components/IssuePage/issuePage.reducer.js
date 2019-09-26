// consts
import { INITIAL_SEND_FIELD_HEIGHT } from '../../../helpers/sizing'

const initialState = {
  title: '',
  body: '',
  date: 0,
  issueId: '',
  isClosed: false,
  sendFieldValue: '',
  sendFieldLoading: false,
  sendFieldHeight: INITIAL_SEND_FIELD_HEIGHT,
}

const reducers = {
  SET_ISSUE_PAGE_DATA: (state, data) => ({
    ...state,
    ...data,
  }),
}

export default (state = initialState, { type, payload }) =>
  reducers[type] ? reducers[type](state, payload) : state
