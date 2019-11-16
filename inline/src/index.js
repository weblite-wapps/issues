import React from 'react'
import ReactDOM from 'react-dom'
import App from './App/main/app.jsx'
// styles
import './index.css'
import './setup/fonts/fonts.scss'
// requests
import loadData from './helpers/weblite.api'

const W = window.W

if (W && W.mode !== 'inline') {
  W.loadData().then(
    ({ customize: { issueId, wisId } }) => W.runWapp(
      W.mode,
      '5d8e5b4201dbd77775ee5023',
      wisId,
      { issueId },
    ))
} else {
  ReactDOM.render(<App />, document.getElementById('root'))
  loadData()
}
