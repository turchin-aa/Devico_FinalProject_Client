import { useState, MouseEvent, useCallback } from 'react'
import { Button } from '@mui/material'
import clsx from 'clsx'
import useNavbarStyles from '../useNavbarStyles'
import DropDownMenu from './dropDown'

type Props = {
  children: React.ReactNode[]
  menuClass?: string
}

const UserBarButtons: React.FC<Props> = props => {
  const classes = useNavbarStyles()
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)

  const handleOpenMenu = useCallback((event: MouseEvent<HTMLButtonElement>) => {
    const target = event.target as HTMLButtonElement
    return setAnchorEl(target)
  }, [])

  const handleCloseMenu = useCallback(() => {
    return setAnchorEl(null)
  }, [])

  return (
    <div>
      <Button
        aria-controls="menu"
        className={clsx(classes.userBarButton, classes.userBarInner, classes.flexCenter)}
        onClick={handleOpenMenu}
      >
        {props.children[0]}
      </Button>
      <DropDownMenu
        anchorEl={anchorEl}
        handleCloseMenu={handleCloseMenu}
        className={props.menuClass}
      >
        {props.children[1]}
      </DropDownMenu>
    </div>
  )
}

export default UserBarButtons
