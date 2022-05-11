import { Button, Typography } from '@mui/material'
import useStyles from '../styles/useStyle'
import { useDispatch } from 'react-redux'
import { uiActions } from '../../store/ui-slice'
import { useCallback } from 'react'

const WelcomeText = () => {
  const classes = useStyles()

  const dispatch = useDispatch()

  const toggleRegHandler = useCallback(() => {
    dispatch(uiActions.toggleReg())
  }, [dispatch])

  const toggleLogHandler = useCallback(() => {
    dispatch(uiActions.toggleLog())
  }, [dispatch])

  return (
    <div className={classes.welcomeBlock}>
      <p className={classes.mainText}>
        Welcome <br /> <span>to Kharkiv Racing</span>
      </p>
      <p className={classes.additional}>We hare exited to see you here. Let's rock</p>
      <div className={classes.buttons}>
        <Button variant="contained" onClick={toggleLogHandler}>
          Sign in
        </Button>
        <Button variant="outlined" onClick={toggleRegHandler}>
          Sign up
        </Button>
      </div>
      <div>
        <Typography sx={{ textDecoration: 'underline', cursor: 'pointer' }}>
          Forgot the password?
        </Typography>
      </div>
    </div>
  )
}

export default WelcomeText
