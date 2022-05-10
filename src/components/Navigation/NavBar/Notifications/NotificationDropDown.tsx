import { Menu, Divider, MenuList } from '@mui/material'
import { useState, RefObject } from 'react'
import { NotificationsNoneOutlined } from '@mui/icons-material'
import clsx from 'clsx'
import useStyles from '../../../styles/useStyle'

interface notifDropDownTypes {
  notifDropDownRef: RefObject<HTMLDivElement>
  anchorEl: Element | null
  handleCloseMenu: () => void
}

const NotificationDropDown = ({
  notifDropDownRef,
  anchorEl,
  handleCloseMenu,
}: notifDropDownTypes) => {
  const classes = useStyles()
  const [content, setContent] = useState(null)

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
        ref={notifDropDownRef}
        onClose={handleCloseMenu}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        className={classes.userBarNotif}
      >
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
      </Menu>
    </div>
  )
}

export default NotificationDropDown
