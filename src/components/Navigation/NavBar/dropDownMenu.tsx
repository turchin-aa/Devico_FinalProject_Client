import { Menu, MenuItem } from '@mui/material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useStyles from '../../styles/useStyle'

const DropDownMenu = (props: {
  dropDownRef: any
  anchorEl: any
  handleCloseMenu: any
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
  const handleClick = (name: string, path: string) => {
    switch (name) {
      case 'Sign Out':
        props.setLogged(!props.logged)
        if (props.logged) {
          setMenu(menuOut)
        } else {
          setMenu(menuIn)
        }
        break
      case 'Sign In':
      case 'Sign Up':
        navigate(path)
        break
      default:
        break
    }
  }

  return (
    <Menu
      ref={props.dropDownRef}
      onClose={props.handleCloseMenu}
      anchorEl={props.anchorEl}
      open={Boolean(props.anchorEl)}
      className={classes.userBarDropdown}
    >
      {menu.map((item, index) => (
        <MenuItem
          component="button"
          key={index}
          className={classes.userBarDropdownButtons}
          onClick={() => handleClick(item.name, item.path)}
        >
          {item.name}
        </MenuItem>
      ))}
    </Menu>
  )
}

export default DropDownMenu
