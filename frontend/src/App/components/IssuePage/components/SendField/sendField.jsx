// modules
import React from 'react'
// components
import InputBase from '@material-ui/core/InputBase'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
// icons
import SendIcon from '@material-ui/icons/Send'

const SendField = ({
  value,
  loading,
  onChange,
  onSend,
  onKeyDown,
  sendFieldHeight,
}) => (
  <div
    style={{
      position: 'fixed',
      bottom: 0,
      width: '100%',
      height: sendFieldHeight,
      background: '#0D2154',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    }}
  >
    <Button
      onClick={onSend}
      disabled={loading}
      style={{
        width: '40px',
        height: '40px',
        minWidth: '40px',
        minHeight: '40px',
        borderRadius: '50%',
        margin: '0 10px',
      }}
    >
      {loading ? (
        <CircularProgress size={20} style={{ color: 'white' }} />
      ) : (
        <SendIcon
          style={{
            fontSize: 28,
            marginRight: 2,
            color: 'white',
            transform: 'rotate(180deg)',
          }}
        />
      )}
    </Button>
    <InputBase
      style={{
        width: '100%',
        height: '30px',
        padding: '5px 10px 0',
        marginRight: '10px',
        background: 'white',
        borderRadius: '10px',
      }}
      dir="rtl"
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder="پاسخ خود را وارد کنید"
      inputProps={{
        onKeyDown,
        style: {
          minHeight: 30,
          fontSize: '12px',
          lineHeight: '21px',
          letterSpacing: '-0.08px',
          fontFamily: 'iranyekan',
        },
      }}
      multiline
      rows={1}
    />
  </div>
)

export default SendField
