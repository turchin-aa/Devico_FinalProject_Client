import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import {CssBaseline,Toolbar, Typography, AppBar  } from '@mui/material'
import clsx from 'clsx'

import UserBar from '../UserBar'
import useStyles from '../styles/useStyle'



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
      <Toolbar id="back-to-top-anchor" />
    </>
  )
}

export default NavBar;