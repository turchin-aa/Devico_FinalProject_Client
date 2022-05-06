import useStyles from '../../styles/useStyle'
import clsx from 'clsx'
import { Avatar } from '@mui/material'

const UserBarLoggedOut = () => {
  const classes = useStyles()
  return (
    <div className={clsx(classes.userBarInner, classes.flexCenter)}>
      <Avatar sx={{ width: 30, height: 30 }} src="/broken-image.jpg" />
    </div>
  )
}

export default UserBarLoggedOut