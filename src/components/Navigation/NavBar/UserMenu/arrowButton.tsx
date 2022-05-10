import { useState, useRef, MouseEvent, useCallback, RefObject } from 'react'
import { Button } from '@mui/material'
import { KeyboardArrowDownOutlined } from '@mui/icons-material'
import useStyles from '../../../styles/useStyle'
import DropDownMenu from './UserDropDownMenu'
import clsx from 'clsx'

const ArrowButton = (props: { logged: boolean; setLogged: any }) => {
  const dropDownRef: RefObject<HTMLDivElement> = useRef(null)

  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)

  const handleOpenMenu = useCallback((event: MouseEvent<HTMLButtonElement>) => {
    const target = event.target as HTMLButtonElement
    setAnchorEl(target)
  }, [])

  const handleCloseMenu = useCallback(() => {
    setAnchorEl(null)
  }, [])

  return (
    <div>
      <Button
        aria-controls="menu"
        className={clsx(classes.userBarButton, classes.userBarInner, classes.flexCenter)}
        onClick={handleOpenMenu}
      >
        <KeyboardArrowDownOutlined className={classes.userBarComponentW} fontSize="large" />
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
