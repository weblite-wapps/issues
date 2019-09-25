// modules
import React from 'react'
// components
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
// icons
import CommentIcon from '@material-ui/icons/Chat'
// helpers
import { convertToPersianFormat, toPersianNumber } from '../../../helpers/date'

const statusMap = isClosed =>
  isClosed
    ? { text: 'بسته شده', color: '#d65555' }
    : { text: 'در جریان', color: '#9bd655' }

const Issue = ({ title, commentsCount, isClosed, date, onClick }) => (
  <Button
    style={{
      width: 300,
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
            <img src="/speech.svg"></img>
          </span>
          <Typography
            className="iranyekan"
            color="textSecondary"
            style={{
              fontSize: 10,
              lineHeight: '17px',
              letterSpacing: '-0.07px',
              fontWeight: 'bold',
            }}
          >{`آخرین پیام : ${convertToPersianFormat(
            new Date(date),
          )}`}</Typography>
        </div>
        <Typography
          className="iranyekan"
          style={{
            fontSize: 14,
            lineHeight: '25px',
            letterSpacing: '-0.1px',
            textAlign: 'right',
            marginTop: 2,
          }}
        >
          {title}
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
