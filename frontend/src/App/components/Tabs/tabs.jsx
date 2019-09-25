// modules
import React from 'react'
import { withStyles } from '@material-ui/core/styles'
// components
import MuiAppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
// helper
import { navigate } from '../../../setup/history.js'

const StyledTabs = withStyles({
  root: {
    backgroundColor: '#F0F0F0',
    minHeight: '40px',
    maxHeight: '40px',
  },
  indicator: {
    height: '100%',
    color: 'white',
    backgroundColor: '#818181',
  },
})(props => <Tabs {...props} />)

const StyledTab = withStyles({
  root: {
    color: '#000',
    fontSize: '11px',
    lineHeight: '21px',
    letterSpacing: '-0.08px',
    fontFamily: 'iranyekan',
    fontWeight: 'bold',
    padding: '0 12px',
    minHeight: '40px',
    maxHeight: '40px',
    zIndex: 5,
  },
  selected: {
    color: '#FFFFFF',
  },
})(props => <Tab {...props} />)

const MyTabs = ({ selected }) => (
  <MuiAppBar
    position="static"
    color="default"
    style={{ width: '100%', position: 'fixed' }}
  >
    <StyledTabs
      value={selected}
      variant="fullWidth"
      onChange={(_, value) => navigate(value)}
    >
      <StyledTab label="درخواست جدید" value="new" />
      <StyledTab label="درخواست های من" value="mine" />
      <StyledTab label="همه درخواست ها" value="all" />
    </StyledTabs>
  </MuiAppBar>
)

export default MyTabs
