// modules
import React from 'react'
// components
import Typography from '@material-ui/core/Typography'

const IssuePage = () => (
  <div
    style={{
      position: 'fixed',
      border: '2px solid red',
      width: '100%',
      height: '100%',
      overflowX: 'hidden',
      overflowY: 'hidden',
    }}
  >
    <div style={{}}>
      <div>سوال</div>
      <div>
        <img src="issue.svg" alt="" />
      </div>
    </div>
    <div>
      <Typography
        className="iranyekan"
        style={{
          fontWeight: 'bold',
          font: 'Bold',
          fontSize: '14px',
          lineHeight: '25px',
          letterSpacing: '-0.1px',
          textAlign: 'right',
          margin: '10px 20px 10px',
          padding: '5px 9px',
          borderRadius: '11px',
          overflowWrap: 'break-word',
          wordWrap: 'break-word',
          wordBreak: 'break-word',
          whiteSpace: 'pre-line',
        }}
      >
        title
      </Typography>
      <Typography
        className="iranyekan"
        style={{
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
        body
      </Typography>
    </div>
  </div>
)

export default IssuePage
