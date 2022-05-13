import { useState } from 'react'
import { Badge } from '@mui/material'
import { NotificationsOutlined } from '@mui/icons-material'
import useNavbarStyles from '../useNavbarStyles'
import NotificationMenu from './NotificationDropDown'
import UserBarButtons from '../dropdown/UserBarButtons'

const NotificationButton: React.FC = () => {
  const classes = useNavbarStyles()
  const [invisible, setInvisible] = useState(false)

  return (
    <div>
      <UserBarButtons menuClass={classes.userBarNotif}>
        <Badge color="primary" variant="dot" invisible={invisible}>
          <NotificationsOutlined className={classes.userBarComponentW} />
        </Badge>
        <NotificationMenu />
      </UserBarButtons>
    </div>
  )
}

export default NotificationButton
