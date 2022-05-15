import { MenuItem } from '@mui/material'
import { useCallback } from 'react'
import { memo } from 'react'
import { useDispatch } from 'react-redux'
import useStyles from '../../theme/useStyle'
import { sagaActions } from '../../store/saga-actions'

const UserLoggedMenu = () => {
  const classes = useStyles()

  const dispatch = useDispatch()

  const logoutHandler = useCallback(() => {
    dispatch({ type: sagaActions.USER_LOGOUT_SAGA })
  }, [dispatch])

  return (
    <div>
      <MenuItem component="button" className={classes.userBarDropdownButtons}>
        My Profile
      </MenuItem>
      <MenuItem component="button" className={classes.userBarDropdownButtons}>
        My Event
      </MenuItem>
      <MenuItem
        component="button"
        className={classes.userBarDropdownButtons}
        onClick={logoutHandler}
      >
        Sign Out
      </MenuItem>
    </div>
  )
}

export default memo(UserLoggedMenu)
