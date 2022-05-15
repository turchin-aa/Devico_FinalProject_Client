import { MenuItem } from '@mui/material'
import { useCallback } from 'react'
import { memo } from 'react'
import { useDispatch } from 'react-redux'
import useStyles from '../../theme/useStyle'
import { userSliceActions } from '../../store/user-slice'

const UserLoggedMenu = () => {
  const classes = useStyles()

  const dispatch = useDispatch()

  const toggleAuthHandler = useCallback(() => {
    dispatch(userSliceActions.toggleAuth())
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
        onClick={toggleAuthHandler}
      >
        Sign Out
      </MenuItem>
    </div>
  )
}

export default memo(UserLoggedMenu)
