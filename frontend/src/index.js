import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import './setup/fonts/fonts.scss'
import App from './App/main/app.jsx'
import './helpers/date'
// requests
import { reqGetAllIssues } from './logic/issues/issues.request'

ReactDOM.render(<App />, document.getElementById('root'))
reqGetAllIssues()
