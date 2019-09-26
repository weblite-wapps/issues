// modules
import React from 'react'
// components
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import CircularProgress from '@material-ui/core/CircularProgress'

const titlesStyle = {
  width: '100%',
  textAlign: 'right',
}

const fontStyle = {
  fontSize: '12px',
  lineHeight: '21px',
  letterSpacing: '-0.08px',
  fontFamily: 'iranyekan',
}

const NewIssue = ({ title, body, onChange, onSubmit, loading, isPublic }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '5px 15px',
      }}
    >
      <p style={{ ...titlesStyle, ...fontStyle }}>عنوان درخواست</p>
      <TextField
        dir="rtl"
        style={{ width: '100%' }}
        inputProps={{
          style: {
            padding: '0 14px',
            fontSize: '12px',
            height: '35px',
            ...fontStyle,
          },
        }}
        required
        value={title}
        onChange={e => onChange('title', e.target.value)}
        variant="outlined"
        placeholder="عنوان درخواست خود را وارد کنید"
        // multiline
      />

      <p style={{ ...titlesStyle, ...fontStyle }}>متن درخواست</p>
      <TextField
        dir="rtl"
        style={{ width: '100%' }}
        multiline
        rows="5"
        value={body}
        variant="outlined"
        InputProps={{
          style: {
            fontSize: '12px',
            ...fontStyle,
          },
        }}
        onChange={e => onChange('body', e.target.value)}
        placeholder="متن درخواست خود را وارد کنید"
      />

      <p style={{ ...titlesStyle, ...fontStyle }}>نوع درخواست</p>
      <ButtonGroup>
        <Button
          style={{
            padding: 0,
            marginRight: 1,
            borderColor: 'white',
            width: '150px',
            height: '35px',
            fontSize: '12px',
            fontWeight: 'bold',
            color: 'white',
            borderRadius: '11px 0px 0px 11px',
            background: isPublic ? '#CCCCCC' : '#7DD9DE',
            ...fontStyle,
          }}
          onClick={() => onChange('isPublic', false)}
        >
          خصوصی
        </Button>
        <Button
          style={{
            padding: 0,
            marginLeft: 1,
            borderColor: 'white',
            width: '150px',
            height: '35px',
            fontSize: '12px',
            fontWeight: 'bold',
            color: 'white',
            borderRadius: '0px 11px 11px 0px',
            background: isPublic ? '#7DD9DE' : '#CCCCCC',
            ...fontStyle,
          }}
          onClick={() => onChange('isPublic', true)}
        >
          عمومی
        </Button>
      </ButtonGroup>

      <div
        style={{
          height: '40px',
        }}
      />

      <Button
        variant="contained"
        onClick={() => onSubmit({ title, body, isPublic })}
        disabled={loading}
        style={{
          position: 'fixed',
          bottom: 0,
          width: '100%',
          height: '40px',
          borderRadius: 0,
          background: '#7DD9DE',
          color: 'white',
          fontSize: '16px',
          fontWeight: 'bold',
        }}
      >
        {loading ? (
          <CircularProgress size={20} style={{ color: 'white' }} />
        ) : (
          <p
            className="iranyekan"
            style={{
              margin: 0,
              fontSize: '16px',
              lineHeight: '28px',
              fontWeight: 'bold',
              letterSpacing: '-0.26px',
            }}
          >
            ارسال
          </p>
        )}
      </Button>
    </div>
  )
}

export default NewIssue
