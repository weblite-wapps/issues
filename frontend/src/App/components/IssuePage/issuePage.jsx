// modules
import * as R from 'ramda'
import React, { useRef } from 'react'
// components
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Comment from './components/Comment/comment.container'
import SendField from './components/SendField/sendField.container'
// helpers
import { convertToPersianFormat } from '../../../helpers/date'
import { HEADER_HEIGHT } from '../../../helpers/sizing'

export let listRef = null

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
  sendFieldHeight,
}) => {
  listRef = useRef(null)

  return (
    <div
      style={{
        height: '100%',
      }}
    >
      <div
        ref={listRef}
        style={{
          overflowX: 'hidden',
          overflowY: 'overlay',
          position: 'fixed',
          display: 'flex',
          flexDirection: 'column',
          top: `${HEADER_HEIGHT}px`,
          bottom: `${sendFieldHeight}px`,
          height: `calc(100% - ${HEADER_HEIGHT}px - ${sendFieldHeight}px)`,
        }}
      >
        <Typography
          className="iranyekan"
          style={{
            background: '#F0F0F0',
            fontWeight: 'bold',
            font: 'Bold',
            fontSize: '14px',
            lineHeight: '25px',
            letterSpacing: '-0.1px',
            textAlign: 'right',
            margin: '15px 20px 10px',
            padding: '5px 9px',
            borderRadius: '11px',
            overflowWrap: 'break-word',
            wordWrap: 'break-word',
            wordBreak: 'break-word',
            whiteSpace: 'pre-line',
          }}
        >
          {title}
        </Typography>
        <Typography
          className="iranyekan"
          style={{
            background: '#F0F0F0',
            fontSize: '12px',
            lineHeight: '21px',
            letterSpacing: '-0.08px',
            textAlign: 'right',
            margin: '0 20px 10px',
            padding: '5px 9px',
            borderRadius: '11px',
            overflowWrap: 'break-word',
            wordWrap: 'break-word',
            wordBreak: 'break-word',
            whiteSpace: 'pre-line',
          }}
        >
          {body}
        </Typography>
        <Typography
          color="textSecondary"
          className="iranyekan"
          style={{
            textAlign: 'right',
            margin: '0 20px 10px',
            fontSize: 10,
            lineHeight: '17px',
            letterSpacing: '-0.07px',
            fontWeight: 'bold',
          }}
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
                fontSize: '12px',
                lineHeight: '21px',
                letterSpacing: '-0.08px',
                fontFamily: 'iranyekan',
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
                fontSize: '12px',
                lineHeight: '21px',
                letterSpacing: '-0.08px',
                marginLeft: canDelete && '10px',
                fontFamily: 'iranyekan',
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
              height: '100%',
              color: '#bbbbbb',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '14px',
              lineHeight: '25px',
              letterSpacing: '-0.08px',
              fontFamily: 'iranyekan',
              fontWeight: 'bold',
              flex: 1,
            }}
          >
            هنوز پاسخی داده نشده
          </div>
        )}
      </div>
      {!isClosed && <SendField issueId={issueId} />}
    </div>
  )
}

export default IssuePage
