import { useState } from 'react'
import useStyles from '../../styles/useStyle'
import {Avatar, Divider} from '@mui/material'
import ArrowButton from './arrowButton'
import NotificationButton from './NotificationButton'
import clsx from 'clsx'

const UserBarLoggedIn = ()=>{
  const classes = useStyles()
  return(
    <>
      <NotificationButton/>

      <Divider className={classes.userBarDivider} orientation='vertical' variant="middle" flexItem/>

      <div className={classes.userBarText}>
        Welcome!
        <div>Name Surname</div>
      </div>

      <div className={clsx(classes.userBarInner,classes.flexCenter)}>
        <Avatar sx={{ width: 30, height: 30 }} src="/broken-image.jpg" />
      </div>
    </>
    
  )
}
const UserBarLoggedOut = ()=>{
  const classes = useStyles()
  return(
    <div className={clsx(classes.userBarInner,classes.flexCenter)}>
      <Avatar sx={{ width: 30, height:30 }} src="/broken-image.jpg" />
    </div>
  )
}

const UserBar: React.FC = () =>{
  const classes = useStyles()
  const [logged, setLogged] = useState(true)
  
  const ifLoggedIn = (logged:boolean)=>{
      return logged? <UserBarLoggedIn />:<UserBarLoggedOut/>
  }


  return(
    <div className={clsx(classes.userBar,classes.flexCenter)}>
      
      {ifLoggedIn(logged)}
      <ArrowButton logged={logged} setLogged={setLogged}/>
    </div>
  )

}

export default UserBar;