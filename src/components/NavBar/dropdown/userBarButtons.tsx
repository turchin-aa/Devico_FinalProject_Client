import { useState, useCallback, memo, useRef } from 'react'
import { Button } from '@mui/material'
import DropDownMenu from './dropDown'

type Props = {
  children: React.ReactElement[]
  menuClass?: string
  buttonClass?: string
  popperClassName?: string
}

const UserBarButtons: React.FC<Props> = props => {
  const [isOpen, setOpen] = useState<boolean>(false)
  const anchorRef = useRef<HTMLDivElement>(null)

  const handleOpen = useCallback(() => {
    return setOpen(true)
  }, [setOpen])

  const handleClose = useCallback(() => {
    return setOpen(false)
  }, [setOpen])

  return (
    <div>
      <Button aria-controls="menu" className={props.buttonClass} onClick={handleOpen}>
        {props.children[0]}
      </Button>
      <DropDownMenu
        isOpen={isOpen}
        anchorRef={anchorRef}
        className={props.menuClass}
        popperClassName={props.popperClassName}
        handleClose={handleClose}
      >
        {props.children[1]}
      </DropDownMenu>
    </div>
  )
}

export default memo(UserBarButtons)
