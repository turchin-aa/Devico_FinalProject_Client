import useStyles from '../../styles/useStyle'
import ArrowButton from './UserMenu/arrowButton'
import UserBarLoggedIn from './UserBarLoggedIn'
import UserBarLoggedOut from './UserBarLoggedOut'
import clsx from 'clsx'
import { memo } from 'react'
import { RootState } from '../../../store/index'
import { useSelector } from 'react-redux'

const UserBar: React.FC = () => {
  const classes = useStyles()
  const isUserAuth = useSelector<RootState, boolean>(state => state.ui.isUserAuth)

  return (
    <div className={clsx(classes.userBar, classes.flexCenter)}>
      {isUserAuth ? <UserBarLoggedIn /> : <UserBarLoggedOut />}
      <ArrowButton />
    </div>
  )
}

export default memo(UserBar)
