import { memo } from 'react'
import { Badge } from '@mui/material'
import { NotificationsOutlined } from '@mui/icons-material'
import { useNavbarStyles } from '../style/useNavbarStyles'
import UserBarButtons from '../dropdown/userBarButtons'
import NotificationMenu from './NotificationDropDown'
import { useAppSelector } from '../../../hooks/redux.hook'
import { INotification } from '../../../store/user-slice'

const NotificationButton: React.FC = () => {
  const classes = useNavbarStyles()
  const notifications: INotification[] = useAppSelector(state => state.user.notifications)

  return (
    <div>
      <UserBarButtons menuClass={classes.userBarNotif} popperClassName={classes.popper}>
        <Badge color="primary" variant="dot" invisible={notifications.length === 0}>
          <NotificationsOutlined className={classes.userBarComponentW} />
        </Badge>
        <NotificationMenu />
      </UserBarButtons>
    </div>
  )
}

export default memo(NotificationButton)
