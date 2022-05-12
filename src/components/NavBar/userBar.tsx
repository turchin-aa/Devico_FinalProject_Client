import useNavbarStyles from './useNavbarStyles'
import UserBarLoggedIn from './UserBarLoggedIn'
import clsx from 'clsx'
import { memo } from 'react'
import { RootState } from '../../store/index'
import { useSelector } from 'react-redux'
import { Avatar } from '@mui/material'
import UserBarButtons from './dropdown/userBarButtons'
import { KeyboardArrowDownOutlined } from '@mui/icons-material'
import UserMenu from './userMenu'

const UserBar: React.FC = () => {
  const classes = useNavbarStyles()
  const isUserAuth = useSelector<RootState, boolean>(state => state.ui.isUserAuth)

  return (
    <div className={clsx(classes.userBar, classes.flexCenter)}>
      {isUserAuth ? <UserBarLoggedIn /> : null}
      <div className={clsx(classes.userBarInner, classes.flexCenter)}>
        <Avatar sx={{ width: 30, height: 30 }} src="/broken-image.jpg" />
      </div>
      <UserBarButtons menuClass={classes.userBarDropdown}>
        <KeyboardArrowDownOutlined className={classes.userBarComponentW} fontSize="large" />
        <UserMenu />
      </UserBarButtons>
    </div>
  )
}

export default memo(UserBar)
