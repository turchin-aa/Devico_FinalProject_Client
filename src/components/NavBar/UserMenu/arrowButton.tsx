import { useState, MouseEvent, useCallback } from 'react'
import { Button } from '@mui/material'
import { KeyboardArrowDownOutlined } from '@mui/icons-material'
import useNavbarStyles from '../useNavbarStyles'
import DropDownMenu from './UserDropDownMenu'
import clsx from 'clsx'

const ArrowButton: React.FC = () => {
  const classes = useNavbarStyles()
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
      <DropDownMenu anchorEl={anchorEl} handleCloseMenu={handleCloseMenu} />
    </div>
  )
}

export default ArrowButton
