import {Button} from '@mui/material'
import useStyles from '../styles/useStyle'

const WelcomeText = ()=>{
  const classes = useStyles()
  return(
    <div className={classes.welcomeBlock}>
        <p className={classes.mainText}>Welcome <br/> <span>to Kharkiv Racing</span></p>
        <p className={classes.additional}>We hare exited to see you here. Let's rock</p>
        <div className={classes.buttons}>
          <Button variant='contained' href=''>Sign in</Button>
          <Button variant='outlined' href=''>Sign up</Button>
        </div>
        <div>
          <a href="#">Forgot the pssword?</a>
        </div>
      </div>
  )
}

export default WelcomeText