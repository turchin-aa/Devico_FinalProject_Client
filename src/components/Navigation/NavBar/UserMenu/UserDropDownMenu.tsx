import { Menu, MenuItem } from '@mui/material'
import { useState, RefObject, MouseEvent, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import useStyles from '../../../styles/useStyle'

const DropDownMenu = (props: {
  dropDownRef: RefObject<HTMLDivElement>
  anchorEl: Element | null
  handleCloseMenu: () => void
  logged: boolean
  setLogged: any
}) => {
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

  const classes = useStyles()
  const [menu, setMenu] = useState(props.logged ? menuIn : menuOut)
  const navigate = useNavigate()

  const handleClick = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget as HTMLButtonElement
    switch (target.name) {
      case 'Sign Out':
        props.setLogged(!props.logged)
        if (props.logged) {
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
      ref={props.dropDownRef}
      onClose={props.handleCloseMenu}
      anchorEl={props.anchorEl}
      open={Boolean(props.anchorEl)}
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

export default DropDownMenu
