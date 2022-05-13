<<<<<<< HEAD:src/components/HomePage/WelcomeTextBlock.tsx
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

  const showRecoverPasHandler = useCallback(() => {
    dispatch(uiActions.toggleForgetPassword())
  }, [dispatch])
=======
import { Button } from '@mui/material'
import useWelcomeStyles from './useWelcomeStyles'
import { useNavigate } from 'react-router-dom'

const WelcomeText = () => {
  const classes = useWelcomeStyles()
  const navigate = useNavigate()
  const handleClick = (name: string) => {
    switch (name) {
      case 'Sign in':
        navigate('/signin')
        break
      case 'Sign up':
        navigate('/signup')
        break
      default:
        break
    }
  }
>>>>>>> znika-fix-responsive-design:src/components/home-page/welcome/WelcomeTextBlock.tsx

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

export default WelcomeText
