import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import {Avatar} from '@mui/material'
import {KeyboardArrowDownOutlined} from '@mui/icons-material'
import clsx from 'clsx'

import useStyles from './styles/useStyle'



// function ifLoggedIn


const UserBar: React.FC = () =>{
  const classes = useStyles()

  return(
    <>
    <div className={classes.userBar}>
      <Avatar src="/broken-image.jpg" />
      <KeyboardArrowDownOutlined/>
    </div>
    </>
  )
}

export default UserBar;