// modules
import * as R from 'ramda'
import React from 'react'
// components
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Comment from './components/Comment/comment.container'
import SendField from './components/SendField/sendField.container'
// helpers
import { convertToPersianFormat } from '../../../helpers/date'

const IssuePage = ({
  title,
  body,
  date,
  issueId,
  isClosed,
  comments = [],
  canClose,
  canDelete,
  onCloseIssue,
  onDeleteIssue,
}) => (
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
    >
      {convertToPersianFormat(new Date(date))}
    </Typography>
    <div
      style={{
        borderTop: '1px solid #CCCCCC',
        margin: '0 20px 10px',
      }}
    />
    <div
      style={{
        margin: '0 20px 10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
      }}
    >
      {canDelete && (
        <Button
          onClick={onDeleteIssue}
          style={{
            background: '#D65555',
            color: 'white',
            borderRadius: '11px',
            width: '100%',
            fontWeight: 'bold',
            fontSize: '14px',
          }}
        >
          حذف سوال
        </Button>
      )}
      {canClose && (
        <Button
          onClick={onCloseIssue}
          disabled={isClosed}
          style={{
            background: isClosed ? '#CCCCCC' : '#EDCB11',
            color: 'white',
            borderRadius: '11px',
            width: '100%',
            fontWeight: 'bold',
            fontSize: '14px',
            marginLeft: canDelete && '10px',
          }}
        >
          {isClosed ? 'بسته شده' : 'بستن سوال'}
        </Button>
      )}
    </div>
    {(canClose || canDelete) && (
      <div
        style={{
          borderTop: '1px solid #CCCCCC',
          margin: '0 20px 10px',
        }}
      />
    )}
    {comments.length ? (
      R.map(comment => <Comment {...comment} />, comments)
    ) : (
      <div
        style={{
          width: '100%',
          marginTop: 25,
          color: '#bbbbbb',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        هنوز پاسخی داده نشده
      </div>
    )}
    {!isClosed && (
      <div
        style={{
          height: '55px',
        }}
      />
    )}
    {!isClosed && <SendField issueId={issueId} />}
  </div>
)

export default IssuePage
