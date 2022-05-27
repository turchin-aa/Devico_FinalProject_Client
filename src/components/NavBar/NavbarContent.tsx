import { useNavbarStyles } from './style/useNavbarStyles'
import UserBarLoggedIn from './UserBarLoggedIn'
import clsx from 'clsx'
import { memo } from 'react'
import { useAppSelector } from '../../hooks/redux.hook'
import { Avatar } from '@mui/material'
import UserBarButtons from './dropdown/userBarButtons'
import { KeyboardArrowDownOutlined } from '@mui/icons-material'
import UserMenu from './userMenu'
import UserLoggedMenu from './UserLoggedMenu'

const NavbarContent: React.FC = () => {
  const classes = useNavbarStyles()

  const isUserAuth = useAppSelector<boolean>(state => state.user.isAuth)
  const avatar = useAppSelector<string | undefined>(state => state.user.avatar)

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
