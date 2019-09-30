// modules
import React from 'react'
// components
import Typography from '@material-ui/core/Typography'
import ProfileInfo from '../profileInfo/profileInfo'
// helpers

const Comment = ({ body, fromAdmin, ...props }) => (
  <div style={{ margin: '11px 20px' }}>
    <ProfileInfo {...props} fromAdmin={fromAdmin} />
    <div>
      <Typography
        className="iranyekan"
        dir="rtl"
        style={{
          background: '#F0F0F0',
          [`margin${fromAdmin ? 'Right' : 'Left'}`]: 43,
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
