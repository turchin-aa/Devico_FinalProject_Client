import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import {Avatar,IconButton} from '@mui/material'
import {KeyboardArrowDownOutlined} from '@mui/icons-material'
import clsx from 'clsx'

import useStyles from '../../styles/useStyle'


const UserBarLoggedOut: React.FC = () =>{
  const classes = useStyles()

  return(
    <>
    <div className={clsx(classes.userBar, classes.userBarOut)}>
      <Avatar src="/broken-image.jpg"  className={clsx(classes.buttons)} />
      <IconButton>
        <KeyboardArrowDownOutlined/>
      </IconButton>
    </div>
    </>
  )
}

export default UserBarLoggedOut;