import { memo } from 'react'
import { Badge } from '@mui/material'
import { NotificationsOutlined } from '@mui/icons-material'
import useNavbarStyles from '../style/useNavbarStyles'
import UserBarButtons from '../dropdown/userBarButtons'
import NotificationMenu from './NotificationDropDown'

const NotificationButton: React.FC = () => {
  const classes = useNavbarStyles()

  return (
    <div>
      <UserBarButtons menuClass={classes.userBarNotif} popperClassName={classes.popper}>
        <Badge color="primary" variant="dot" invisible={false}>
          <NotificationsOutlined className={classes.userBarComponentW} />
        </Badge>
        <NotificationMenu />
      </UserBarButtons>
    </div>
  )
}

export default memo(NotificationButton)
