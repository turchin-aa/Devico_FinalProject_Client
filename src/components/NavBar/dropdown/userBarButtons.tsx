import { useState, MouseEvent, useCallback, memo, useEffect } from 'react'
import { Button } from '@mui/material'
import DropDownMenu from './dropDown'

type Props = {
  children: React.ReactNode[]
  menuClass?: string
  buttonClass?: string
}

const UserBarButtons: React.FC<Props> = props => {
  const [isOpen, setOpen] = useState<boolean>(false)

  const handleOpenMenu = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      const target = event.target as HTMLButtonElement

      return setOpen(!isOpen)
    },
    [isOpen],
  )
  const handleCloseMenu = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      const target = event.target as HTMLButtonElement

      return setOpen(!isOpen)
    },
    [isOpen],
  )

  return (
    <div>
      <Button aria-controls="menu" className={props.buttonClass} onClick={handleOpenMenu}>
        {props.children[0]}
      </Button>
      <DropDownMenu isOpen={isOpen} className={props.menuClass}>
        {props.children[1]}
      </DropDownMenu>
    </div>
  )
}

export default memo(UserBarButtons)
