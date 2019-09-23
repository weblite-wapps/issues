// modules
import React from 'react'
import { LocationProvider, Router } from '@reach/router'
import { Provider } from 'react-redux'
// components
import AppBar from '../components/AppBar/appBar'
import AllIssues from '../components/IssueList/allIssues.container'
import MyIssues from '../components/IssueList/myIssues.container'
import IssuePage from '../components/IssuePage/issuePage.container'
import NewIssue from '../components/NewIssue/newIssue.container'
// styles
import './app.css'
// setup
import store from '../../setup/redux'
import { history } from '../../setup/history.js'

const App = () => (
  <Provider store={store}>
    <LocationProvider history={history}>
      <Router>
        <AppBar path=":selected" />
      </Router>
      <div
        style={{
          position: 'fixed',
          top: '50px',
          width: '100%',
          height: 'calc(100% - 50px)',
          overflowX: 'hidden',
          overflowY: 'overlay',
        }}
      >
        <Router>
          <AllIssues path="all" />
          <MyIssues path="mine" />
          <NewIssue path="new" />
          <IssuePage path="issue" />
        </Router>
      </div>
    </LocationProvider>
  </Provider>
)

export default App
