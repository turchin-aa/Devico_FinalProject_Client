import { NotificationsNoneOutlined } from '@mui/icons-material'
import clsx from 'clsx'
import { memo } from 'react'
import { useAppSelector } from '../../../hooks/redux.hook'
import { INotification } from '../../../store/user-slice'
import { useNavbarStyles } from '../style/useNavbarStyles'
import Notification from './Notification'

const ContentNull = () => {
  const classes = useNavbarStyles()

  const notifications: INotification[] = useAppSelector(state => state.user.notifications)

  return notifications.length > 0 ? (
    <>
      {notifications.map((el: any) => {
        return <Notification color={el.color} text={el.text} />
      })}
    </>
  ) : (
    <div className={classes.notifContentContainer}>
      <div className={clsx(classes.notifContent, classes.flexCenter)}>
        <div className={clsx(classes.notifContentIcon, classes.flexCenter)}>
          <NotificationsNoneOutlined sx={{ fontSize: 50, color: '#979797' }} />
        </div>
        <p className={classes.notifContentH}>No notifications yet</p>
        <p>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
          anim id est laborum.
        </p>
      </div>
    </div>
  )
}

export default memo(ContentNull)
