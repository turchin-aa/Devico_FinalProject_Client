import { FC, useCallback } from 'react'
import { useNavbarStyles } from '../style/useNavbarStyles'
import info from '../../../assets/picture.webp'
import CloseIcon from '@mui/icons-material/Close'
import { IconButton } from '@mui/material'
import { useAppDispatch } from '../../../hooks/redux.hook'
import userSlice from '../../../store/user-slice'

interface props {
  id: number
  text: string
  color: object
}

const Notification: FC<props> = ({ id, text, color }) => {
  const classes = useNavbarStyles()

  const dispatch = useAppDispatch()

  const handleClose = useCallback(() => {
    console.log('id', id)
    dispatch(userSlice.actions.deleteNotificationById(id))
  }, [dispatch, id])

  return (
    <div className={classes.wrapper} style={color}>
      <div className={classes.closeButtonContainer}>
        <IconButton className={classes.closeButton} onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </div>
      <div className={classes.notificationText}>
        <img src={info} alt="1" className={classes.info} />
        <div className={classes.text}>{text}</div>
      </div>
    </div>
  )
}

export default Notification
