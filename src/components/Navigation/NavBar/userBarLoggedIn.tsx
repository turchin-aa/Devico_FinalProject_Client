import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import {Avatar, Divider, IconButton, Badge
  // , StyledBadge 
} from '@mui/material'
import {KeyboardArrowDownOutlined, Notifications} from '@mui/icons-material'
import clsx from 'clsx'
import useStyles from '../../styles/useStyle'




const UserBarLoggedIn: React.FC = () =>{
  const classes = useStyles()
  const [invisible, setInvisible] = useState(false)

  // const handleBadgeVisibility = () => {
  //   setInvisible(!invisible)
  // }

  return(
    <>
    <div className={clsx(classes.userBar, classes.userBarIn)}>
      <div>

        <Badge color="secondary" variant="dot" invisible={invisible}>
          <Notifications fontSize="large"/>
        </Badge>

      </div>
      <Divider orientation='vertical' variant="middle" flexItem/>
      <div>
        Welcome UserName
      </div>
      <div>
        <Avatar src="/broken-image.jpg" />
      </div>
      <div>
        <KeyboardArrowDownOutlined/>
      </div>
    </div>
    </>
  )
}

export default UserBarLoggedIn;