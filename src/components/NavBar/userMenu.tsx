import { MenuItem } from '@mui/material'
import { useState, MouseEvent, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import useNavbarStyles from './useNavbarStyles'
import { memo } from 'react'
import { RootState } from '../../store/index'
import { uiActions } from '../../store/ui-slice'
import { useDispatch, useSelector } from 'react-redux'
import { menuOut, menuIn } from './userMenuVar'

const UserMenu = () => {
  const classes = useNavbarStyles()

  const isUserAuth = useSelector<RootState, boolean>(state => state.ui.isUserAuth)
  const dispatch = useDispatch()

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
    <div>
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
    </div>
  )
}

export default memo(UserMenu)
