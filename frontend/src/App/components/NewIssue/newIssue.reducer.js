const initialState = {
  title: '',
  body: '',
  isPublic: true,
  loading: false,
}

const reducers = {
  SET_FIELD_VALUE: (state, { field, value }) => ({
    ...state,
    [field]: value,
  }),

  RESET_NEW_ISSUE: () => initialState,
}

export default (state = initialState, { type, payload }) =>
  reducers[type] ? reducers[type](state, payload) : state
