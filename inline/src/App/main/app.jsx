// modules
import React from 'react'
import { Provider } from 'react-redux'

// components
import IssuePage from '../components/issuePage/issuePage.container'

// setup
import store from '../../setup/redux'

const App = () => (
  <Provider store={store}>
    <IssuePage />
  </Provider>
)

export default App
