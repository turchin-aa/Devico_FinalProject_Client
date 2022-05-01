import React from 'react'
import {Container, Button} from '@mui/material'
import clsx from 'clsx'
import useStyles from './styles/useStyle'




const Welcome: React.FC = () =>{
  const classes = useStyles()
  return(
    <div id="">
      <div>
        <p className={classes.mainText}>Welcome to Kharkiv Racing</p>
        <p className={classes.additional}>We hare exited to see you here. Let's rock</p>
        <Button variant='contained'className={clsx(classes.buttons,classes.buttonPurple)} href=''>Sign in</Button>
        <Button variant='outlined'className={clsx(classes.buttons,classes.buttonWhite)} href=''>Sign up</Button>
        {/* <Link to=''>Forgot the password?</Link> */}
      </div>
      <div>

      </div>
      
    </div>
  )
}

export default Welcome