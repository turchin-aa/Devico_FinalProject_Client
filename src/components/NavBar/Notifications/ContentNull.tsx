import { NotificationsNoneOutlined } from '@mui/icons-material'
import clsx from 'clsx'
import { memo } from 'react'
import useNavbarStyles from '../useNavbarStyles'

const ContentNull = () => {
  const classes = useNavbarStyles()
  return (
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
  )
}

export default memo(ContentNull)
