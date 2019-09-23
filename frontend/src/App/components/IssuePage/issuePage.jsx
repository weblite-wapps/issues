// modules
import * as R from 'ramda'
import React from 'react'
// components
import Typography from '@material-ui/core/Typography'
import Comment from './components/Comment/comment.container'
import SendField from './components/SendField/sendField.container'

const IssuePage = ({ title, body, date, comments = [] }) => (
  <div>
    <Typography
      style={{
        background: '#F0F0F0',
        fontWeight: 'bold',
        font: 'Bold',
        fontSize: '16px',
        textAlign: 'right',
        margin: '15px 20px 10px',
        padding: '5px 9px',
        borderRadius: '11px',
      }}
    >
      {title}
    </Typography>
    <Typography
      style={{
        background: '#F0F0F0',
        fontSize: '14px',
        textAlign: 'right',
        margin: '0 20px 10px',
        padding: '5px 9px',
        borderRadius: '11px',
      }}
    >
      {body}
    </Typography>
    <Typography
      color="textSecondary"
      style={{ fontSize: 13, textAlign: 'right', margin: '0 20px 10px' }}
    >{`سه شنبه ۲۶ شهریور - ۱۴:۲۳`}</Typography>
    <div
      style={{
        borderTop: '1px solid #CCCCCC',
        margin: '0 20px 10px',
      }}
    />
    {R.map(
      comment => (
        <Comment {...comment} />
      ),
      comments,
    )}
    <div
      style={{
        height: '55px',
      }}
    />
    <SendField />
  </div>
)

export default IssuePage
