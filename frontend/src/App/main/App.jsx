// modules
import React from 'react'
import { LocationProvider, Router } from '@reach/router'
import { Provider } from 'react-redux'
// components
import AppBar from '../components/AppBar/appBar'
import IssueList from '../components/IssueList/issueList'
// styles
import './App.css'
// setup
import store from '../../setup/redux'
import { history } from '../../setup/history.js'

const issues = new Array(10).fill({
  title: 'مشکل سرمایش و گرمایش',
  commentsCount: 11,
  status: 'closed',
  onClick: console.log,
})

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
          <IssueList issues={issues} path="all" />
          {/* <AllIssues path="all" /> */}
          {/* <MyIssues path="mine" /> */}
          {/* <newIssue path="new" /> */}
        </Router>
      </div>
    </LocationProvider>
  </Provider>
)

export default App
