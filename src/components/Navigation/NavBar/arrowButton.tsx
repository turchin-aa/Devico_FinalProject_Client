import { useState, useRef } from 'react'
import { Button } from '@mui/material'
import { KeyboardArrowDownOutlined } from '@mui/icons-material'
import useStyles from '../../styles/useStyle'
import DropDownMenu from './dropDownMenu'
import clsx from 'clsx'

const ArrowButton = (props: { logged: boolean; setLogged: any }) => {
  const dropDownRef = useRef(null)

  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState(null)

  const handleOpenMenu = (e: any) => {
    setAnchorEl(e.currentTarget)
  }
  const handleCloseMenu = (e: any) => {
    setAnchorEl(null)
  }

  return (
    <div>
      <Button
        aria-controls="menu"
        className={clsx(
          classes.userBarButton,
          classes.userBarInner,
          classes.flexCenter
        )}
        onClick={handleOpenMenu}
      >
        <KeyboardArrowDownOutlined
          className={classes.userBarComponentW}
          fontSize="large"
        />
      </Button>
      <DropDownMenu
        dropDownRef={dropDownRef}
        anchorEl={anchorEl}
        handleCloseMenu={handleCloseMenu}
        logged={props.logged}
        setLogged={props.setLogged}
      />
    </div>
  )
}

export default ArrowButton
