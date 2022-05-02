import {CssBaseline,Toolbar, Typography, AppBar  } from '@mui/material'
import UserBar from './userBar'
import useStyles from '../../styles/useStyle'


const NavBar: React.FC = () =>{
  const classes = useStyles()
  
  return(
    <>
    <CssBaseline />
      <AppBar 
      elevation={0}
        className={classes.navbar}
      >
        <Toolbar>
          <Typography variant="h6" component="div">
            <UserBar/>
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default NavBar;