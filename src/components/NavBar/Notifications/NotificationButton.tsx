import { useState, useRef, MouseEvent, RefObject, useCallback } from 'react'
import { Badge, Button } from '@mui/material'
import { NotificationsOutlined } from '@mui/icons-material'
import useNavbarStyles from '../useNavbarStyles'
import NotificationDropDown from './NotificationDropDown'
import clsx from 'clsx'

const NotificationButton: React.FC = () => {
  const classes = useNavbarStyles()
  const [invisible, setInvisible] = useState(false)
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)

  const handleOpenMenu = useCallback((event: MouseEvent<HTMLButtonElement>) => {
    const target = event.target as HTMLButtonElement
    setAnchorEl(target)
  }, [])

  const handleCloseMenu = useCallback(() => {
    setAnchorEl(null)
  }, [])

  return (
    <div>
      <Button
        aria-controls="menu"
        className={clsx(classes.userBarButton, classes.userBarInner, classes.flexCenter)}
        onClick={handleOpenMenu}
      >
        <Badge color="primary" variant="dot" invisible={invisible}>
          <NotificationsOutlined className={classes.userBarComponentW} />
        </Badge>
      </Button>
      <NotificationDropDown anchorEl={anchorEl} handleCloseMenu={handleCloseMenu} />
    </div>
  )
}

export default NotificationButton
