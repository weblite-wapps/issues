// modules
import React from 'react'
// components
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
// helpers
import { convertToPersianFormat, toPersianNumber } from '../../../helpers/date'

const statusMap = isClosed =>
  isClosed
    ? { text: 'بسته شده', color: '#d65555' }
    : { text: 'در جریان', color: '#9bd655' }

const Issue = ({
  title,
  body,
  commentsCount,
  isClosed,
  isPublic,
  date,
  onClick,
}) => (
  <Button
    style={{
      width: 'calc(100% - 40px)',
      borderRadius: 12,
      marginTop: '10px',
      cursor: 'pointer',
      overflow: 'hidden',
      textTransform: 'none',
      padding: '0',
    }}
    onClick={onClick}
  >
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <span style={{ padding: 7, background: '#f0f0f0' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <span
              style={{
                maxWidth: 50,
                minWidth: 50,
                height: 20,
                padding: '0 5px',
                background: '#ccc',
                borderRadius: '10px',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                boxSizing: 'border-box',
              }}
            >
              <Typography
                className="iranyekan"
                style={{
                  fontSize: 12,
                  fontWeight: 'bold',
                  lineHeight: '21px',
                  letterSpacing: '-0.08px',
                  color: 'white',
                }}
              >
                {toPersianNumber(commentsCount)}
              </Typography>
              <img alt="commentIcon" src="speech.svg"></img>
            </span>
            {!isPublic && (
              <span
                style={{
                  maxWidth: 20,
                  minWidth: 20,
                  height: 20,
                  padding: '0 5px',
                  background: '#ccc',
                  borderRadius: '10px',
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  boxSizing: 'border-box',
                  marginLeft: 5,
                }}
              >
                <img alt="lockIcon" src="lock.svg"></img>
              </span>
            )}
          </div>
          <Typography
            className="iranyekan"
            color="textSecondary"
            style={{
              fontSize: 10,
              lineHeight: '17px',
              letterSpacing: '-0.07px',
              fontWeight: 'bold',
            }}
          >
            {convertToPersianFormat(new Date(date))}
          </Typography>
        </div>
        <Typography
          className="iranyekan"
          style={{
            fontSize: 14,
            lineHeight: '25px',
            letterSpacing: '-0.1px',
            textAlign: 'right',
            marginTop: 2,
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
          dir="auto"
          noWrap
          style={{
            fontSize: 14,
            lineHeight: '25px',
            letterSpacing: '-0.1px',
            textAlign: 'right',
            marginTop: 2,
          }}
        >
          {body}
        </Typography>
      </span>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: statusMap(isClosed).color,
          height: 25,
        }}
      >
        <Typography
          className="iranyekan"
          style={{
            fontSize: 12,
            lineHeight: '17px',
            letterSpacing: '-0.07px',
            fontWeight: 'bold',
            color: 'white',
          }}
        >
          {statusMap(isClosed).text}
        </Typography>
      </div>
    </div>
  </Button>
)

export default Issue
