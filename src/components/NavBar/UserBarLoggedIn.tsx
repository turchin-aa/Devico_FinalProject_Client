import useNavbarStyles from './useNavbarStyles'
import { Divider } from '@mui/material'
import NotificationButton from './notifications/NotificationButton'

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
    </div>
  )
}

export default UserBarLoggedIn
