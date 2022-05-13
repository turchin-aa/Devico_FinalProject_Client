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

  return (
    <div className={classes.welcomeBlock}>
      <p className={classes.mainText}>
        Welcome <br /> <span>to Kharkiv Racing</span>
      </p>
      <p className={classes.additional}>We hare exited to see you here. Let's rock</p>
      <div className={classes.buttons}>
        <Button variant="contained" onClick={() => handleClick('Sign in')}>
          Sign in
        </Button>
        <Button variant="outlined" onClick={() => handleClick('Sign up')}>
          Sign up
        </Button>
      </div>
      <div>
        <a href="#">Forgot the password?</a>
      </div>
    </div>
  )
}

export default WelcomeText
