import { Menu, MenuItem } from '@mui/material'
import useStyles from '../../styles/useStyle'
import { useDispatch } from 'react-redux'
import { uiActions } from '../../../store/ui-slice'
const DropDownMenu = (props: {
  dropDownRef: any
  anchorEl: any
  handleCloseMenu: any
  logged: boolean
  setLogged: any
}) => {
  const classes = useStyles()

  const dispatch = useDispatch()

  const toggleRegHandler = () => {
    dispatch(uiActions.toggleReg())
  }

  const toggleLogHandler = () => {
    dispatch(uiActions.toggleLog())
  }

  return (
    <Menu
      ref={props.dropDownRef}
      onClose={props.handleCloseMenu}
      anchorEl={props.anchorEl}
      open={Boolean(props.anchorEl)}
      className={classes.userBarDropdown}
    >
      <MenuItem
        component="button"
        className={classes.userBarDropdownButtons}
        onClick={toggleRegHandler}
      >
        Sign Up
      </MenuItem>
      <MenuItem
        component="button"
        className={classes.userBarDropdownButtons}
        onClick={toggleLogHandler}
      >
        Sign In
      </MenuItem>
    </Menu>
  )
}

export default DropDownMenu
