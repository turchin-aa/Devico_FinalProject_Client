import { Button, Typography } from '@mui/material'
import { useDispatch } from 'react-redux'
import { uiActions } from '../../../store/ui-slice'
import { memo, useCallback } from 'react'
import useWelcomeStyles from './useWelcomeStyles'

const WelcomeText = () => {
  const classes = useWelcomeStyles()

  const dispatch = useDispatch()

  const toggleRegHandler = useCallback(() => {
    dispatch(uiActions.toggleReg())
  }, [dispatch])

  const toggleLogHandler = useCallback(() => {
    dispatch(uiActions.toggleLog())
  }, [dispatch])

  const showRecoverPasHandler = useCallback(() => {
    dispatch(uiActions.toggleForgetPassword())
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
        <Typography
          sx={{ textDecoration: 'underline', cursor: 'pointer' }}
          onClick={showRecoverPasHandler}
        >
          Forgot the password?
        </Typography>
      </div>
    </div>
  )
}

export default memo(WelcomeText)
