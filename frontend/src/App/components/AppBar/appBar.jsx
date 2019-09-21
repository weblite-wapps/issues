// modules
import React from 'react'
// components
import MuiAppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
// helper
import { navigate } from '../../../setup/history.js'

const AppBar = ({ selected }) => {
  return (
    <MuiAppBar
      position="static"
      color="default"
      style={{ width: '100%', position: 'fixed' }}
    >
      <Tabs
        value={selected}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
        aria-label="simple tabs example"
        style={{ height: 50 }}
        onChange={(_, value) => navigate(value)}
      >
        <Tab label="درخواست جدید" value="new" style={{ fontSize: 13 }} />
        <Tab label="درخواست های من" value="mine" style={{ fontSize: 13 }} />
        <Tab label="همه درخواست ها" value="all" style={{ fontSize: 13 }} />
      </Tabs>
    </MuiAppBar>
  )
}

export default AppBar
