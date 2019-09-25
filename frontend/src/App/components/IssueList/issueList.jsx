// modules
import * as R from 'ramda'
import React from 'react'
// components
import Issue from '../Issue/issue.container'

const IssueList = ({ issues }) => {
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: 10,
      }}
    >
      {issues.length ? (
        R.map(item => <Issue {...item} />, issues)
      ) : (
        <div
          style={{
            position: 'fixed',
            width: '100%',
            top: '50px',
            height: 'calc(100% - 96px)',
            color: '#bbbbbb',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          سوالی وجود ندارد
        </div>
      )}
    </div>
  )
}

export default IssueList
