import { ClickAwayListener, Fade, Paper, Popper } from '@mui/material'
import { memo, RefObject } from 'react'

interface Props {
  children: React.ReactElement
  anchorRef: RefObject<HTMLDivElement>
  isOpen: boolean
  className?: string
  popperClassName?: string
  handleClose: (event: Event) => void
}

const DropDownMenu: React.FC<Props> = ({
  children,
  popperClassName,
  anchorRef,
  isOpen,
  className,
  handleClose,
}) => {
  return (
    <Popper
      open={isOpen}
      anchorEl={anchorRef.current}
      className={popperClassName}
      disablePortal={true}
    >
      <ClickAwayListener onClickAway={handleClose}>
        <Fade in={isOpen}>
          <Paper className={className}>{children}</Paper>
        </Fade>
      </ClickAwayListener>
    </Popper>
  )
}

export default memo(DropDownMenu)
