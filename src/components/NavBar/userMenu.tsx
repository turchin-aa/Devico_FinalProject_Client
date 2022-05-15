import { MenuItem } from '@mui/material'
import { useCallback } from 'react'
import { memo } from 'react'
import { useDispatch } from 'react-redux'
import useStyles from '../../theme/useStyle'
import { uiActions } from '../../store/ui-slice'

const UserMenu = () => {
  const classes = useStyles()

  const dispatch = useDispatch()

  const toggleRegHandler = useCallback(() => {
    dispatch(uiActions.toggleReg())
  }, [dispatch])

  const toggleLogHandler = useCallback(() => {
    dispatch(uiActions.toggleLog())
  }, [dispatch])

  return (
    <div>
      <MenuItem
        component="button"
        className={classes.userBarDropdownButtons}
        onClick={toggleLogHandler}
      >
        Sign In
      </MenuItem>
      <MenuItem
        component="button"
        className={classes.userBarDropdownButtons}
        onClick={toggleRegHandler}
      >
        Sign Up
      </MenuItem>
    </div>
  )
}

export default memo(UserMenu)
