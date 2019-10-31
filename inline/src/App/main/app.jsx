// modules
import React from 'react'
import { Provider } from 'react-redux'
import { MuiThemeProvider } from '@material-ui/core/styles'

// components
import IssuePage from '../components/issuePage/issuePage.container'
// style
import theme from '../../helpers/style/appTheme'

// setup
import store from '../../setup/redux'

const App = () => (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>{<IssuePage />}</MuiThemeProvider>
  </Provider>
)

export default App
