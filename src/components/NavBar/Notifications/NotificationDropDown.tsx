import { Divider, MenuList } from '@mui/material'
import ContentNull from './ContentNull'
import { memo, useState } from 'react'
import { useNavbarStyles } from '../style/useNavbarStyles'

const NotificationMenu: React.FC = () => {
  const classes = useNavbarStyles()
  const [content, setContent] = useState(null)

  return (
    <div>
      <MenuList className={classes.userBarNotifDropdown}>
        <div className={classes.notifHeader}>
          <h3 className={classes.notifHText}>Notifications</h3>
          <div className={classes.notifHText}>
            <span>Mark all as read</span>
          </div>
        </div>
        <Divider variant="middle" />
        <div className={classes.notifContentContainer}>
          {content === null ? <ContentNull /> : null}
        </div>
      </MenuList>
    </div>
  )
}

export default memo(NotificationMenu)
