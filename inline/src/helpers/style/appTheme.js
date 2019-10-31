import { createMuiTheme } from '@material-ui/core/styles'

export default createMuiTheme({
  overrides: {
    MuiTypography: {
      body1: {
        fontFamily: 'inherit',
      },
    },
    MuiButton: {
      root: {
        fontFamily: 'inherit',
        boxShadow: 'none',
      },
      contained: {
        boxShadow: 'none',
        '&:active': {
          boxShadow: 'none',
        },
      },
    },
  },
})
