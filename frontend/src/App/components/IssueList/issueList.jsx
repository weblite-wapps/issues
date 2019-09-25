// modules
import * as R from 'ramda'
import React from 'react'
// components
import Issue from '../Issue/issue.container'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import SearchIcon from '@material-ui/icons/Search'

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
      <TextField
        dir="rtl"
        style={{ width: 'calc(100% - 40px)', margin: '20px 0 5px' }}
        disabled
        inputProps={{
          style: {
            padding: '0 14px',
            height: '35px',
            fontSize: '12px',
            lineHeight: '21px',
            letterSpacing: '-0.08px',
            fontFamily: 'iranyekan',
          },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        required
        value=""
        onChange={Function.prototype}
        variant="outlined"
        placeholder="جست و جو کنید"
      />
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
            fontSize: '14px',
            lineHeight: '25px',
            letterSpacing: '-0.08px',
            fontFamily: 'iranyekan',
            fontWeight: 'bold',
          }}
        >
          سوالی وجود ندارد
        </div>
      )}
    </div>
  )
}

export default IssueList
