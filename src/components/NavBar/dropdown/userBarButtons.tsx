import { useState, MouseEvent, useCallback } from 'react'
import { Button } from '@mui/material'
import useNavbarStyles from '../useNavbarStyles'
import DropDownMenu from './DropDown'

type Props = {
  children: React.ReactNode[]
  menuClass?: string
  buttonClass?: string
}

const UserBarButtons: React.FC<Props> = props => {
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
      <Button aria-controls="menu" className={props.buttonClass} onClick={handleOpenMenu}>
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
