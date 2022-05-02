import React from 'react'
import {Button,CardMedia} from '@mui/material'
import clsx from 'clsx'
import useStyles from './styles/useStyle'




const Welcome: React.FC = () =>{
  const classes = useStyles()
  const img:string = 'https://64.media.tumblr.com/1438f240f252cd35c61717e909bc39e6/2c2b030ebff2d9fa-50/s1280x1920/547f2c3c3513e545f202c513496de1c58db54c9d.png'
  return(
    <div className={classes.flexCenter}>
      <div className={classes.welcomeBlock}>
        <p className={classes.mainText}>Welcome <br/> <span>to Kharkiv Racing</span></p>
        <p className={classes.additional}>We hare exited to see you here. Let's rock</p>
        <div>
          <Button variant='contained'className={clsx(classes.buttons,classes.buttonPurple)} href=''>Sign in</Button>
          <Button variant='outlined'className={clsx(classes.buttons,classes.buttonWhite)} href=''>Sign up</Button>
        </div>
        <div>
          <a href="#">Forgot the pssword?</a>
        </div>
      </div>
      <div >
          <CardMedia sx={{width:500, height: 443 }} component='img' src={img} />
      </div>
      
    </div>
  )
}

export default Welcome