import React, { useState } from 'react'
// import {useNavigate} from 'react-router-dom'
import {CssBaseline,Toolbar, Typography, AppBar  } from '@mui/material'
// import clsx from 'clsx'

import UserBar from '../UserBarLogedOut'
import UserBarLoggedIn from '../userBarLoggedIn'
import useStyles from '../styles/useStyle'

// function ifLoddedIn(){
//   if(loggedIn){
//     return <UserBar/>
//   }
//   return <UserBarLogged/>
// }


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
            {/* <UserBar/> */}
            <UserBarLoggedIn/>
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
    </>
  )
}

export default NavBar;