import { Divider, MenuList } from '@mui/material'
import ContentNull from './ContentNull'
import { memo, useCallback } from 'react'
import { useNavbarStyles } from '../style/useNavbarStyles'
import { useAppDispatch } from '../../../hooks/redux.hook'
import userSlice from '../../../store/user-slice'

const NotificationMenu: React.FC = () => {
  const classes = useNavbarStyles()
  const dispatch = useAppDispatch()

  const handleRead = useCallback(() => {
    dispatch(userSlice.actions.deleteNotifications())
  }, [dispatch])

  return (
    <div>
      <MenuList className={classes.userBarNotifDropdown}>
        <div className={classes.notifHeader}>
          <h3 className={classes.notifHText}>Notifications</h3>
          <div className={classes.notifHText}>
            <span onClick={handleRead}>Mark all as read</span>
          </div>
        </div>
        <Divider variant="middle" />
        <div className={classes.dropdownContainer}>
          <ContentNull />
        </div>
      </MenuList>
    </div>
  )
}

export default memo(NotificationMenu)
