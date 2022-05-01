import { useState } from 'react'
import {Button} from '@mui/material'
import {KeyboardArrowDownOutlined} from '@mui/icons-material'
import useStyles from '../../styles/useStyle'
import clsx from 'clsx'

const ArrowButton: React.FC = () =>{
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  
  return(
      <Button className={clsx(classes.userBarButton, classes.userBarInner,classes.flexCenter)}>
        <KeyboardArrowDownOutlined className={classes.userBarComponentW} fontSize='large'/>
      </Button>
  )
}

export default ArrowButton