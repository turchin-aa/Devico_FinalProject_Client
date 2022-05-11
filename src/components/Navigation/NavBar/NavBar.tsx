import { Toolbar, Typography, AppBar, Slide, useScrollTrigger } from '@mui/material'
import UserBar from './userBar'
import useStyles from '../../styles/useStyle'

interface Props {
  children: React.ReactElement
}

const HideOnScroll = ({ children }: Props) => {
  const trigger = useScrollTrigger()
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

const NavBar = () => {
  const classes = useStyles()

  return (
    <HideOnScroll>
      <AppBar elevation={0} className={classes.navbar}>
        <Toolbar>
          <Typography variant="h6" component="div">
            <UserBar />
          </Typography>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  )
}

export default NavBar
