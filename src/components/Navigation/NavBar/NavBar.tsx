import React, { useState } from 'react'
import {CssBaseline,Toolbar, Typography, AppBar  } from '@mui/material'

import UserBar from './UserBarLogedOut'
import UserBarLoggedIn from './userBarLoggedIn'
import useStyles from '../../styles/useStyle'

function ifLoggedIn(loggedIn:boolean){
  return loggedIn? <UserBarLoggedIn/>:<UserBar/>
}


const NavBar: React.FC = () =>{
  const classes = useStyles()
  let loggedIn=true
  return(
    <>
    <CssBaseline />
      <AppBar 
        className={classes.navbar}
      >
        <Toolbar>
          <Typography variant="h6" component="div">
            {ifLoggedIn(loggedIn)}
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default NavBar;