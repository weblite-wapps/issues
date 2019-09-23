// modules
import React from 'react'
// components
import Typography from '@material-ui/core/Typography'

const Comment = ({
  text,
  date,
  fromAdmin,
  firstname,
  lastname,
  profileImage,
}) => (
  <div style={{ margin: '10px 20px' }}>
    <div
      style={{
        marginBottom: 5,
        display: 'flex',
        flexDirection: fromAdmin ? 'row' : 'row-reverse',
        alignItems: 'center',
      }}
    >
      <span
        style={{
          width: '35px',
          height: '35px',
          borderRadius: '50%',
          background: '#BC7DDE',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        {profileImage ? (
          <img
            src={profileImage}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        ) : (
          <img src="/user.svg" alt="user" />
        )}
      </span>
      <span
        style={{
          display: 'flex',
          flexDirection: 'column',
          margin: '0 8px',
        }}
      >
        <Typography
          style={{
            fontSize: '14px',
            textAlign: fromAdmin ? 'left' : 'right',
            borderRadius: '11px',
          }}
        >
          {`${firstname} ${lastname}`}
        </Typography>
        <Typography
          color="textSecondary"
          style={{ fontSize: 13, textAlign: 'right' }}
        >{`سه شنبه ۲۶ شهریور - ۱۴:۲۳`}</Typography>
      </span>
    </div>
    <div>
      <Typography
        style={{
          background: '#F0F0F0',
          fontSize: '14px',
          textAlign: 'right',
          [`margin${fromAdmin ? 'Left' : 'Right'}`]: 43,
          padding: '5px 9px',
          borderRadius: '11px',
        }}
      >
        {text}
      </Typography>
    </div>
  </div>
)

export default Comment
