import { memo } from 'react'
import useNavbarStyles from './style/useNavbarStyles'
import { Divider } from '@mui/material'
import NotificationButton from './Notifications/NotificationButton'
import { useAppSelector } from '../../hooks/redux.hook'

const UserBarLoggedIn = () => {
  const classes = useNavbarStyles()

  const user = useAppSelector(state => state.user.email)

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
        <div>{user}</div>
      </div>
    </div>
  )
}

export default memo(UserBarLoggedIn)
