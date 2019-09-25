// modules
import React from 'react'
// components
import Typography from '@material-ui/core/Typography'
// helpers
import { convertToPersianFormat } from '../../../../../helpers/date'

const Comment = ({
  body,
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
            alt="userImage"
            src={profileImage}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        ) : (
          <img src="user.svg" alt="user" />
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
          className="iranyekan"
          style={{
            fontSize: '14px',
            lineHeight: '25px',
            letterSpacing: '-0.1px',
            fontWeight: 'bold',
            textAlign: fromAdmin ? 'left' : 'right',
            borderRadius: '11px',
          }}
        >
          {firstname && lastname ? `${firstname} ${lastname}` : 'در حال دریافت'}
        </Typography>
        <Typography
          color="textSecondary"
          className="iranyekan"
          style={{
            fontSize: 10,
            fontWeight: 'bold',
            lineHeight: '17px',
            textAlign: fromAdmin ? 'left' : 'right',
            letterSpacing: '-0.07px',
          }}
        >
          {convertToPersianFormat(new Date(date))}
        </Typography>
      </span>
    </div>
    <div>
      <Typography
        className="iranyekan"
        dir="rtl"
        style={{
          background: '#F0F0F0',
          [`margin${fromAdmin ? 'Left' : 'Right'}`]: 43,
          padding: '5px 9px',
          borderRadius: '11px',
          fontSize: '12px',
          lineHeight: '21px',
          letterSpacing: '-0.08px',
          overflowWrap: 'break-word',
          wordWrap: 'break-word',
          wordBreak: 'break-word',
          whiteSpace: 'pre-line',
        }}
      >
        {body}
      </Typography>
    </div>
  </div>
)

export default Comment
