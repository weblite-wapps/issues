// modules
import React from 'react'
// components
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
// icons
import CommentIcon from '@material-ui/icons/Chat'

const statusMap = {
  closed: { text: 'بسته شده', color: '#d65555' },
  open: { text: 'در جریان', color: '#9bd655' },
}

const Issue = ({ title, commentsCount, status, date, onClick }) => (
  <Card
    style={{
      width: 300,
      borderRadius: 12,
      margin: '10px 0 0',
      cursor: 'pointer',
    }}
    onClick={onClick}
  >
    <CardContent style={{ padding: 7, background: '#f0f0f0' }}>
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
            width: 40,
            height: 20,
            background: '#ccc',
            borderRadius: '10px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
        >
          <Typography style={{ fontSize: 15, color: 'white' }}>
            {commentsCount}
          </Typography>
          <CommentIcon style={{ fontSize: 15, color: 'white' }} />
        </span>
        <Typography
          color="textSecondary"
          style={{ fontSize: 13 }}
        >{`آخرین پیام : سه شنبه ۲۶ شهریور - ۱۴:۲۳`}</Typography>
      </div>
      <Typography style={{ fontSize: 16, textAlign: 'right', marginTop: 2 }}>
        {title}
      </Typography>
    </CardContent>
    <div
      style={{
        textAlign: 'center',
        background: statusMap[status].color,
        height: 25,
      }}
    >
      <Typography style={{ fontSize: 15, color: 'white' }}>
        {statusMap[status].text}
      </Typography>
    </div>
  </Card>
)

export default Issue
