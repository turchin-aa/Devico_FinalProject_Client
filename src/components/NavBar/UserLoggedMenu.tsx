import { MenuItem } from '@mui/material'
import { useCallback } from 'react'
import { memo } from 'react'
import { useAppDispatch } from '../../hooks/redux.hook'
import useStyles from '../../theme/useStyle'
import { sagaActions } from '../../store/saga-actions'
import { Link } from 'react-router-dom'

const UserLoggedMenu = () => {
  const classes = useStyles()

  const dispatch = useAppDispatch()

  const logoutHandler = useCallback(() => {
    dispatch({ type: sagaActions.USER_LOGOUT_SAGA })
  }, [dispatch])

  return (
    <div>
      <MenuItem component="button" className={classes.userBarDropdownButtons}>
        <Link to="profile" className={classes.link}>
          My Profile
        </Link>
      </MenuItem>
      <MenuItem component="button" className={classes.userBarDropdownButtons}>
        <Link to="event" className={classes.link}>
          My Event
        </Link>
      </MenuItem>
      <MenuItem
        component="button"
        className={classes.userBarDropdownButtons}
        onClick={logoutHandler}
      >
        <span className={classes.link}>Sign Out</span>
      </MenuItem>
    </div>
  )
}

export default memo(UserLoggedMenu)
