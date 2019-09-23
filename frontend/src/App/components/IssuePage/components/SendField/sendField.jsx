// modules
import React from 'react'
// components
import InputBase from '@material-ui/core/InputBase'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
// icons
import CloseIcon from '@material-ui/icons/Close'
import SendIcon from '@material-ui/icons/Send'

const SendField = ({ value, loading, onChange, onSend }) => (
  <div
    style={{
      position: 'fixed',
      bottom: 0,
      width: '100%',
      height: '50px',
      background: '#7DD9DE',
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
      inputProps={{ style: { minHeight: 30 } }}
      multiline
      rows={1}
    />
  </div>
)

export default SendField
