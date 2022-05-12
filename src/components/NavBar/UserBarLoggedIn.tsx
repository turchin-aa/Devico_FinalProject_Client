import useNavbarStyles from './useNavbarStyles'
import clsx from 'clsx'
import { Avatar, Divider } from '@mui/material'
import NotificationButton from './Notifications/NotificationButton'

const UserBarLoggedIn = () => {
  const classes = useNavbarStyles()
  return (
    <div className={classes.flexCenter}>
      <NotificationButton />
      <Divider
        className={classes.userBarDivider}
        orientation="vertical"
        variant="middle"
        flexItem
      />
      <div className={classes.userBarText}>
        Welcome!
        <div>Name Surname</div>
      </div>
      <div className={clsx(classes.userBarInner, classes.flexCenter)}>
        <Avatar sx={{ width: 30, height: 30 }} src="/broken-image.jpg" />
      </div>
    </div>
  )
}

export default UserBarLoggedIn
