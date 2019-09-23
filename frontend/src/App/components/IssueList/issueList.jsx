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
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: 10,
      }}
    >
      {R.map(
        item => (
          <Issue {...item} />
        ),
        issues,
      )}
    </div>
  )
}

export default IssueList
