import useNavbarStyles from './style/useNavbarStyles'
import UserBarLoggedIn from './UserBarLoggedIn'
import clsx from 'clsx'
import { memo, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux.hook'
import { Avatar } from '@mui/material'
import UserBarButtons from './dropdown/userBarButtons'
import { KeyboardArrowDownOutlined } from '@mui/icons-material'
import UserMenu from './userMenu'
import UserLoggedMenu from './UserLoggedMenu'
import { sagaActions } from '../../store/saga-actions'

const NavbarContent: React.FC = () => {
  const classes = useNavbarStyles()

  const dispatch = useAppDispatch()

  const isUserAuth = useAppSelector<boolean>(state => state.user.isAuth)
  const avatar = useAppSelector<string | undefined>(state => state.user.avatar)

  useEffect(() => {
    if (!avatar) {
      dispatch({ type: sagaActions.USER_GET_AVATAR_SAGA })
    }
  }, [dispatch, avatar])

  return (
    <div className={clsx(classes.userBar, classes.flexCenter)}>
      {isUserAuth ? <UserBarLoggedIn /> : null}
      <div className={clsx(classes.userBarInner, classes.flexCenter)}>
        <Avatar src={isUserAuth ? avatar : '/broken-image.jpg'} />
      </div>
      <UserBarButtons
        menuClass={classes.userBarDropdown}
        popperClassName={classes.popper}
        buttonClass={clsx(classes.userBarButton, classes.userBarInner, classes.flexCenter)}
      >
        <KeyboardArrowDownOutlined className={classes.userBarComponentW} fontSize="large" />
        {isUserAuth ? <UserLoggedMenu /> : <UserMenu />}
      </UserBarButtons>
    </div>
  )
}

export default memo(NavbarContent)
