import useStyles from '../../styles/useStyle'
import ArrowButton from './arrowButton'
import UserBarLoggedIn from './UserBarLoggedIn'
import UserBarLoggedOut from './UserBarLoggedOut'
import clsx from 'clsx'

const UserBar = (props: { logged: boolean; setLogged: any }) => {
  const classes = useStyles()

  return (
    <div className={clsx(classes.userBar, classes.flexCenter)}>
      {props.logged ? <UserBarLoggedIn /> : <UserBarLoggedOut />}
      <ArrowButton logged={props.logged} setLogged={props.setLogged} />
    </div>
  )
}

export default UserBar
