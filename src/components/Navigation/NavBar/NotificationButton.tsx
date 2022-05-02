import {useState } from 'react'
import {Badge,Button} from '@mui/material'
import {NotificationsOutlined} from '@mui/icons-material'
import useStyles from '../../styles/useStyle'
import clsx from 'clsx'

const NotificationButton: React.FC = () =>{
  const classes = useStyles()
  const [invisible, setInvisible] = useState(false)
  
  return(
    <Button className={clsx(classes.userBarButton, classes.userBarInner, classes.flexCenter)}>
          <Badge color="primary" variant="dot" invisible={invisible}>
            <NotificationsOutlined className={classes.userBarComponentW}/>
          </Badge>  
    </Button>
  )
}

export default NotificationButton