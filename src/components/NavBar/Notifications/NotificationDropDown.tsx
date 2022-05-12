import { Menu, Divider, MenuList } from '@mui/material'
import ContentNull from './ContentNull'
import { useState } from 'react'
import useNavbarStyles from '../useNavbarStyles'

interface notifDropDownTypes {
  anchorEl: Element | null
  handleCloseMenu: () => void
}

const NotificationDropDown = ({ anchorEl, handleCloseMenu }: notifDropDownTypes) => {
  const classes = useNavbarStyles()
  const [content, setContent] = useState(null)

  return (
    <div>
      <Menu
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
          {content === null ? <ContentNull /> : null}
        </MenuList>
      </Menu>
    </div>
  )
}

export default NotificationDropDown
