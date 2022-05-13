import { MenuItem } from '@mui/material'
import { useState, MouseEvent, useCallback } from 'react'
import { memo } from 'react'
import { RootState } from '../../store/index'
import { userSliceActions } from '../../store/user-slice'
import { useDispatch, useSelector } from 'react-redux'
import { menuOut, menuIn } from './userMenuVar'
import useStyles from '../../theme/useStyle'

const UserMenu = () => {
  const classes = useStyles()

  const isUserAuth = useSelector<RootState, boolean>(state => state.user.isAuth)
  const dispatch = useDispatch()

  const [menu, setMenu] = useState(isUserAuth ? menuIn : menuOut)

  const handleClick = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget as HTMLButtonElement
    switch (target.name) {
      case 'Sign Out':
        dispatch(userSliceActions.toggleAuth())
        if (isUserAuth) {
          setMenu(menuOut)
        } else {
          setMenu(menuIn)
        }
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
