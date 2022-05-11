import { Menu, MenuItem } from '@mui/material'
import { useState, RefObject, MouseEvent, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import useStyles from '../../../styles/useStyle'
import { memo } from 'react'
import { RootState } from '../../../../store'
import { uiActions } from '../../../../store/ui-slice'
import { useDispatch, useSelector } from 'react-redux'

interface DropDown {
  dropDownRef: RefObject<HTMLDivElement>
  anchorEl: Element | null
  handleCloseMenu: () => void
}

const DropDownMenu: React.FC<DropDown> = ({ dropDownRef, anchorEl, handleCloseMenu }) => {
  const menuOut = [
    {
      name: 'Sign In',
      path: '/signin',
    },
    { name: 'Sign Up', path: '/signup' },
  ]
  const menuIn = [
    {
      name: 'Profile',
      path: '',
    },
    { name: 'My events', path: '' },
    { name: 'Sign Out', path: '' },
  ]

  const isUserAuth = useSelector<RootState, boolean>(state => state.ui.isUserAuth)
  const dispatch = useDispatch()

  const classes = useStyles()
  const [menu, setMenu] = useState(isUserAuth ? menuIn : menuOut)
  const navigate = useNavigate()

  const handleClick = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget as HTMLButtonElement
    switch (target.name) {
      case 'Sign Out':
        dispatch(uiActions.toggleAuth())
        if (isUserAuth) {
          setMenu(menuOut)
        } else {
          setMenu(menuIn)
        }
        break
      case 'Sign In':
        navigate('/signin')
        break

      case 'Sign Up':
        navigate('/signup')
        break
      default:
        break
    }
  }, [])

  return (
    <Menu
      ref={dropDownRef}
      onClose={handleCloseMenu}
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      className={classes.userBarDropdown}
    >
      {menu.map(item => (
        <MenuItem
          component="button"
          key={item.name}
          className={classes.userBarDropdownButtons}
          onClick={handleClick}
          name={item.name}
        >
          {item.name}
        </MenuItem>
      ))}
    </Menu>
  )
}

export default memo(DropDownMenu)
