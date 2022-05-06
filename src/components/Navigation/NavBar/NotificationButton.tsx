import {useState,useRef} from 'react'
import {Badge,Button} from '@mui/material'
import {NotificationsOutlined} from '@mui/icons-material'
import useStyles from '../../styles/useStyle'
import NotificationDropDown from './NotificationDropDown'
import clsx from 'clsx'

const NotificationButton: React.FC = () =>{
  const classes = useStyles()
  const [invisible, setInvisible] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)
  const notifDropDownRef = useRef(null)

  const handleOpenMenu = (e:any) =>{
    setAnchorEl(e.currentTarget)
  }
  const handleCloseMenu = (e:any) =>{
    setAnchorEl(null)
  }
  
  return(
    <div>  
      <Button aria-controls='menu' 
      className={clsx(classes.userBarButton, classes.userBarInner, classes.flexCenter)}
      onClick={handleOpenMenu}>
            <Badge color="primary" variant="dot" invisible={invisible}>
              <NotificationsOutlined className={classes.userBarComponentW}/>
            </Badge>  
      </Button>
      <NotificationDropDown notifDropDownRef={notifDropDownRef} anchorEl={anchorEl} handleCloseMenu={handleCloseMenu}/>
    </div>
  )
}

export default NotificationButton