import { Menu, MenuItem, Divider, MenuList } from '@mui/material'
import { useState, useCallback } from 'react'
import { ArrowDropUp, NotificationsNoneOutlined } from '@mui/icons-material'
import clsx from 'clsx'
import useStyles from '../../styles/useStyle'

const NotificationDropDown = (props: {
  notifDropDownRef: any
  anchorEl: any
  handleCloseMenu: any
}) => {
  const classes = useStyles()
  const [content, setContent] = useState(null)
  const [menu, setMenu] = useState()

  const ifContentNull = () => {
    if (content === null) {
      return (
        <div className={clsx(classes.notifContent, classes.flexCenter)}>
          <div className={clsx(classes.notifContentIcon, classes.flexCenter)}>
            <NotificationsNoneOutlined sx={{ fontSize: 50, color: '#979797' }} />
          </div>
          <p className={classes.notifContentH}>No notifications yet</p>
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
        </div>
      )
    }
  }

  return (
    <div>
      <Menu
        ref={props.notifDropDownRef}
        onClose={props.handleCloseMenu}
        anchorEl={props.anchorEl}
        open={Boolean(props.anchorEl)}
        className={classes.userBarNotif}
      >
        {/* <ArrowDropUp className={clsx(classes.userBarComponentW, classes.userBarNotifArrow)} fontSize='large'/>       */}
        <MenuList className={classes.userBarNotifDropdown}>
          <div className={classes.notifHeader}>
            <h3 className={classes.notifHText}>Notifications</h3>
            <div className={classes.notifHText}>
              <span>Mark all as read</span>
            </div>
          </div>
          <Divider variant="middle" />
          {ifContentNull()}
        </MenuList>
        {/* <MenuItem></MenuItem>       */}
      </Menu>
    </div>
  )
}

export default NotificationDropDown
